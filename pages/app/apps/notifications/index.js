import React, { useContext, useState, useEffect } from "react";
import Container from "/components/layout/Container";
import DataTable from "react-data-table-component";
import { AppContext } from "/context/AppProvider";
import { POST } from "/services/api";

const index = () => {
  const { authentication } = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    POST(`/api/notification/by-recipient-person-id`).then((res) => {
      const newList = [];
      Object.keys(res.data.notifications).map((item, key) => {
        key = key + 1;
        newList.push({
          id: key,
          title: (
            <>
              {" "}
              <img
                src={res.data.notifications[item].senderPerson.avatar.url}
                height="24px"
                width="24px"
                style={{ borderRadius: 5, marginRight: 10 }}
              />
              {res.data.notifications[item].senderPerson.fullName}
            </>
          ),
          description: res.data.notifications[item].description,
          date: res.data.notifications[item].timeAgo,
        });
      });
      setData(newList);
    });
  };
  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      maxWidth: "20px",
      sortable: true,
    },
    {
      name: "Gönderen",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Açıklama",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Tarih",
      selector: (row) => row.date,
      sortable: true,
    },
  ];

  return (
    <Container
      title="Bildirimler"
      description="Kolay İK üzerinden gerçekleştirilen tüm işlem bildirimlerini bu ekrandan görüntüleyebilirsiniz."
      iconShow={false}
    >
      <DataTable columns={columns} data={data} pagination striped />
    </Container>
  );
};

export default index;
