import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "/components/layout/Container";
import CompanyEvents from "/components/widgets/CompanyEvents";
import DepartmentChart from "/components/widgets/DepartmentChart";
import PermissionInformation from "/components/widgets/PermissionInformation";
import PublicHolidays from "/components/widgets/PublicHolidays";
import UpcomingBirthdays from "/components/widgets/UpcomingBirthdays";
import WaitingLeaveDays from "/components/widgets/WaitingLeaveDays";

const HomeScreen = () => {
  return (
    <Container>
      <Row xs={1} md={3} className="g-3">
        <Col>
          <PermissionInformation />
        </Col>
        <Col>
          <UpcomingBirthdays />
        </Col>
        <Col>
          <DepartmentChart />
        </Col>
        <Col>
          <WaitingLeaveDays />
        </Col>
        <Col>
          <CompanyEvents />
        </Col>
        <Col>
          <PublicHolidays />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
