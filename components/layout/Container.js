import React, { useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import FooterBar from "./FooterBar";
import { AppContext } from "context/AppProvider";
import { useRouter } from "next/router";
const Container = (props) => {
  const { children } = props;
  const router = useRouter();
  const context = useContext(AppContext);
  useEffect(()=>{
    if(localStorage.getItem('token') == null){
      router.push("/login")
    }
  },[]);
  return (
    <>
      <Row>
        <Sidebar {...props} />
        <Col className="containerApp">
          <TopBar {...props} />
          <div className="container mt-4 mb-4">{children}</div>
        </Col>
      </Row>
      <FooterBar />
    </>
  );
};
Container.getInitialProps = () => {
  console.log("start");
  return { isim: "emre" };
};
export default Container;
