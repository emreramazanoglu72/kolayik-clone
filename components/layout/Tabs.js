import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Tabs = (props) => {
  const router = useRouter();
  const { children } = props;
  return (
    <>
      <Row xs={7} md={7} className="g-1 tabs mb-4">
        {[
          { label: "Hesabım", href: "/app/profile/settings" },
          { label: "Kariyerim", href: "/app/profile/job" },
          { label: "İzin Geçmişim", href: "/app/profile/leave-history" },
          { label: "Ödemelerim", href: "/app/profile/transactions" },
          { label: "Eğitimlerim", href: "/app/profile/trainings" },
          { label: "Dosyalarım", href: "/app/profile/files" },
          { label: "Vize Belgelerim", href: "/app/profile/visa-requests" },
          { label: "Zimmetlerim", href: "/app/profile/assets" },
        ].map((item, key) => (
          <Link href={item.href}>
            <button
              key={key}
              className={classNames(
                "tab",
                "col",
                "btn",
                item.href == router.route && "active"
              )}
            >
              {item.label}
            </button>
          </Link>
        ))}
      </Row>
      {children}
    </>
  );
};

export default Tabs;
