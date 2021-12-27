import React from "react";
import Container from "/components/layout/Container";
import Tabs from "/components/layout/Tabs";
import FileManagement from "/components/widgets/FileManagement";

const Files = () => {
  return (
    <Container
      title="Hesabım"
      description="Kolay İK hesabınızla ilgili tüm işlemleri buradan gerçekleştirebilirsiniz."
      iconShow={false}
    >
      <Tabs>
      <FileManagement />
      </Tabs>
    </Container>
  );
};

export default Files;
