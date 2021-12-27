import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { FiCalendar, FiUsers } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { useRouter } from "next/router";
import classNames from "classnames";

const FooterBar = () => {
  const router = useRouter();

  return (
    <Row className="FooterBar">
      <Col
        className={classNames(
          "footerItem",
          router.pathname == "/app" && "active"
        )}
      >
        <Link href={"/app"}>
          <a href="/app">
            <RiDashboardLine />
            Ana Sayfa
          </a>
        </Link>
      </Col>
      <Col
        className={classNames(
          "footerItem",
          router.pathname == "/app/employee-list" && "active"
        )}
      >
        <Link href={"/app/employee-list"}>
          <a href="/app/employee-list">
            <FiUsers />
            Çalısanlar
          </a>
        </Link>
      </Col>
      <Col
        className={classNames(
          "footerItem",
          router.pathname == "/app/calendar" && "active"
        )}
      >
        {" "}
        <Link href={"/app/calendar"}>
          <a href="/app/calendar">
            <FiCalendar />
            Takvim
          </a>
        </Link>
      </Col>
      {/* <Col className="footerItem">
        <Link href={"/app/apps"}>
          <a href="/app/apps">
            <RiApps2Line />
            Uygulamalar
          </a>
        </Link>
      </Col> */}
    </Row>
  );
};

export default FooterBar;
