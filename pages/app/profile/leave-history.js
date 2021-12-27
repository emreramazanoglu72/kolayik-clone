import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Container from "/components/layout/Container";
import Tabs from "/components/layout/Tabs";
import { POST } from "/services/api";
import moment from "moment";
import "moment/locale/tr"; // without this line it didn't work
import { Tooltip, OverlayTrigger, ProgressBar, Col } from "react-bootstrap";
import Select from "react-select";

const LeaveHistory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    POST(`/api/widgets/leave-days`).then((res) => {
      const newList = [];
      res.data.items.map((item, key) => {
        key = key + 1;
        newList.push({
          startDate: moment(item.startDate).format("Do MMM YYYY"),
          endDate: moment(item.endDate).format("Do MMM YYYY"),
          returnDate: moment(item.returnDate).format("Do MMM YYYY"),
          usedDays: item.usedDays,
          type: item.type.name,
          comment: item.comment,
          status: item.status,
        });
      });
      setData(newList);
    });
  };
  const columns = [
    {
      name: "Başlangıç",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Bitiş",
      selector: (row) => row.endDate,
      sortable: true,
    },
    {
      name: "Mesai Başlangıç",
      selector: (row) => row.returnDate,
      sortable: true,
    },
    {
      name: "Süre",
      selector: (row) => row.usedDays,
      sortable: true,
    },
    {
      name: "İzin Türü",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Açıklama",
      selector: (row) => row.comment,

      sortable: true,
    },
    {
      name: "durum",
      selector: (row) => {
        if (row.status == "approved") {
          return <div className="kolayBadge badgeActive">Onaylandı</div>;
        } else {
          return <div className="kolayBadge badgeCanceled">Reddedildi</div>;
        }
      },
      sortable: true,
    },
  ];
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <Container
      title="Hesabım"
      description="Kolay İK hesabınızla ilgili tüm işlemleri buradan gerçekleştirebilirsiniz."
      iconShow={false}
    >
      <Tabs>
        <div className="row">
          <div className="col-sm-4">
            <p className="customLabel">İzin Hakkı / Yıllık İzin</p>
            <ProgressBar
              variant="success"
              now={90}
              style={{ backgroundColor: "#ff4c4c", height: 6 }}
            />
            <div className="d-flex mt-3 justify-content-between">
              <OverlayTrigger
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>Kullanılan Toplam İzin.</Tooltip>
                }
              >
                <p className="bar-text"> 5 gün</p>
              </OverlayTrigger>
              <OverlayTrigger
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>Kalan Toplam İzin.</Tooltip>
                }
              >
                <p className="bar-text"> 5 gün</p>
              </OverlayTrigger>
            </div>
          </div>
          <div className="row col-sm-8 justify-content-end align-self-center">
          <Col sm="3">
              <Select
                placeholder="İzin türü"
                options={options}
                className={"customSelectBox"}
              />
            </Col>
            <Col sm="2">
              <Select
                placeholder="Yıl"
                options={options}
                className={"customSelectBox"}
              />
            </Col>
          </div>
        </div>
        <DataTable fixedHeader columns={columns} data={data} striped />
      </Tabs>
    </Container>
  );
};

export default LeaveHistory;
