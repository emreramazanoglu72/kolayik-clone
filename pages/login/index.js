import classNames from "classnames";
import Link from "next/link";
import React, { useContext } from "react";
import { Button, Form, Row } from "react-bootstrap";
import LoginInfoArea from "/components/layout/LoginInfoArea";
import { useFormik } from "formik";
import * as Yup from "yup";
import { POST } from "/services/api";
import Swal from "sweetalert2";
import { AppContext } from "/context/AppProvider";
import { useRouter } from "next/router";

const LoginScreen = () => {
  const router = useRouter();
  const { setUserInfo, setAuthentication } = useContext(AppContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      loginFunction(values);
    },
  });

  const loginFunction = async (values) => {
    const response = await POST("/api/login", {
      username: values.email,
      password: values.password,
    });
    if (response.code == 401) {
      Swal.fire(
        "Üzgünüz!",
        "Lütfen E-Posta Adresinizi Veya Şifrenizi Kontrol Ediniz!",
        "error"
      );
    } else {
      const userInfo = await POST(`/api/person/my-info`, {
        token: response.data.auth_token,
      });
      setAuthentication(response.data);
      setUserInfo(userInfo.data);
      localStorage.setItem("authentication", JSON.stringify(response.data));
      localStorage.setItem("userInfo", JSON.stringify(userInfo.data));
      localStorage.setItem("token", response.data.auth_token);
      router.push('/app');
    }
  };
  return (
    <div className="loginScreen">
      <Row>
        <div className={classNames("col-sm-5 col-xs-12", "loginContainer")}>
          <div className="align-self-center">
            <Form onSubmit={formik.handleSubmit}>
              <img
                src="https://kolayik.com/app/assets/images/kolay-logo.svg"
                className="logo"
              />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">E-posta Adresi</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="E-posta Adresi"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label">Parola</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Parola"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </Form.Group>

              <Button className="w-100" variant="primary" type="submit">
                Giriş Yap
              </Button>

              <div className="d-flex justify-content-between mt-2">
                <Link href="/login/forgot-password">
                  <a className={"text-primary"} href="/login/forgot-password">
                    Parolamı Unuttum
                  </a>
                </Link>
                <a className={"text-primary"} href="#">
                  Parolamı Unuttum
                </a>
              </div>
            </Form>
          </div>
        </div>
        <div className="col-sm-7 col-0 loginInfoArea">
          <LoginInfoArea />
        </div>
      </Row>
    </div>
  );
};

export default LoginScreen;
