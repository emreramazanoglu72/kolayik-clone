import PositionTable from "components/widgets/PositionTable";
import SalaryListTable from "components/widgets/SalaryListTable";
import React from "react";
import Container from "/components/layout/Container";
import Tabs from "/components/layout/Tabs";


const Job = () => {
  return (
    <Container
      title="Hesabım"
      description="Kolay İK hesabınızla ilgili tüm işlemleri buradan gerçekleştirebilirsiniz."
      iconShow={false}
    >
      <Tabs activePage="job">
      <PositionTable />
      <SalaryListTable />
      </Tabs>
    </Container>
  );
};

export default Job;
