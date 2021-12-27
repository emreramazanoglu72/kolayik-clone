import FileManagement from "/components/widgets/FileManagement";
import React from "react";
import Container from "/components/layout/Container";

const index = () => {
  return (
    <Container
      title="Dosyalar"
      description="Şirketinizle ilgili ihtiyaç duyulan tüm dosyaları buraya ekleyebilirsiniz."
      iconShow={false}
    >
      <FileManagement />
    </Container>
  );
};

export default index;
