import React from "react";
import Container from "/components/layout/Container";
import Tabs from "/components/layout/Tabs";

const visaRequests = () => {
  return (
    <Container
      title="Hesabım"
      description="Kolay İK hesabınızla ilgili tüm işlemleri buradan gerçekleştirebilirsiniz."
      iconShow={false}
    >
      <Tabs>
        <div className="infoBox">Kayıtlı vize belgesi süreci bulunamadı.</div>
      </Tabs>
    </Container>
  );
};

export default visaRequests;
