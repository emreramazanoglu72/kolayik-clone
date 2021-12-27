import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import LoginInfoArea from "/components/layout/LoginInfoArea";

const ComporateScreen = () => {
  return (
    <div className="loginScreen">
      <Row>
        <div className={classNames("col-sm-5 col-xs-12", "loginContainer")}>
          <div className="align-self-center">
            <Form>
              <img
                src="https://kolayik.com/app/assets/images/kolay-logo.svg"
                className="logo"
              />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">Alan Adı</Form.Label>
                <Form.Control type="email" placeholder="Alan adınızı girin" />
              </Form.Group>

              <Button className="w-100" variant="primary" type="submit">
                Devam
              </Button>

              <div className="d-flex justify-content-between mt-2">
                <Link href="/login">
                  <a className={"text-primary"} href="/login">
                    Giriş Ekranı
                  </a>
                </Link>
              </div>
            </Form>
          </div>
        </div>
        <div className="col-sm-7 loginInfoArea">
          <LoginInfoArea />
        </div>
      </Row>
    </div>
  );
};

export default ComporateScreen;
