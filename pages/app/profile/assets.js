import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { AiFillFilePdf } from "react-icons/ai";
import { bytesToSize } from "utils";
import Container from "/components/layout/Container";
import Tabs from "/components/layout/Tabs";
import { POST } from "/services/api";
const assets = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    POST(`/api/person/asset-list`).then((res) => {
      const newList = [];
      res.data.map((item, key) => {
        key = key + 1;
        newList.push({
          category: item.enum.name,
          serialNumber: item.serialNumber,
          loanDate: item.loanDate,
          returnDate: item.returnDate,
          description: item.description,
        });
      });
      setData(newList);
    });
  };
  const columns = [
    {
      name: "Kategori",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Seri Numarası",
      selector: (row) => row.serialNumber,
      sortable: true,
    },
    {
      name: "Veriliş Tarihi",
      selector: (row) => row.loanDate,
      sortable: true,
    },
    {
      name: "İade Tarihi",
      selector: (row) => row.returnDate,
      sortable: true,
    },
    {
      name: "Açıklama",
      selector: (row) => row.description,
      sortable: true,
    },
  ];
  return (
    <Container
      title="Hesabım"
      description="Kolay İK hesabınızla ilgili tüm işlemleri buradan gerçekleştirebilirsiniz."
      iconShow={false}
    >
      <Tabs>
        <DataTable columns={columns} data={data} pagination striped />
      </Tabs>
    </Container>
  );
};

export default assets;
