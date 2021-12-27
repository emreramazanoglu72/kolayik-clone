import Link from "next/link";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Container from "/components/layout/Container";

 
const index = () => {
  return (
    <Container
      title="Uygulamalar"
      description="Kolay İK'ya ekleyebileceğiniz farklı modülleri burada bulabilirsiniz."
      iconShow={false}
    >
      <Row xs={1} md={4} className="g-3">
        <Col>
          <Link href="/app/apps/notifications">
              <Card>
                <Card.Body>
                  <img
                    src="https://s3-us-west-2.amazonaws.com/kolayik-public/notification/notification.svg"
                    height="64px"
                    width="64px"
                    class="p-1"
                  />
                  Bildirimler
                </Card.Body>
              </Card>
          </Link>
        </Col>
        <Col>
          <Link href="/app/apps/files">
            <Card>
              <Card.Body>
                <img
                  src="https://s3-us-west-2.amazonaws.com/kolayik-public/dosyalar/group-4.svg"
                  height="64px"
                  width="64px"
                  class="p-1"
                />
                Dosyalar
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default index;
