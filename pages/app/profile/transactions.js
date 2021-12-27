import React from "react";
import Container from "/components/layout/Container";
import Tabs from "/components/layout/Tabs";

const Transactions = () => {
  return (
    <Container
      title="Hesabım"
      description="Kolay İK hesabınızla ilgili tüm işlemleri buradan gerçekleştirebilirsiniz."
      iconShow={false}
    >
      <Tabs>
        <div className="infoBox">Kayıtlı bir ödeme bulunamadı.</div>
      </Tabs>
    </Container>
  );
};

export default Transactions;
