import React, { useEffect, useState } from "react";
import { Card, Col, ProgressBar, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { AiFillFilePdf } from "react-icons/ai";
import { bytesToSize } from "utils";
import { POST } from "/services/api";

const FileManagement = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    POST(`/api/apps/files/public-list`).then((res) => {
      const newList = [];
      res.data.list.map((item, key) => {
        key = key + 1;
        newList.push({
          title: (
            <>
              <AiFillFilePdf style={{ color: "#8ec793", fontSize: 20 }} />
              {item.filename}
            </>
          ),
          type: "PDF Dökümanı",
          size: bytesToSize(item.size),
          date: item.updatedAt.split(" ")[0],
        });
      });
      setData(newList);
    });
  };

  const columns = [
    {
      name: "Dosya Adı",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Türü",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Boyutu",
      selector: (row) => row.size,
      sortable: true,
    },
    {
      name: "Düzenleme Tarihi",
      selector: (row) => row.date,
      sortable: true,
    },
  ];
  return (
    <>
      <Card>
        <Card.Body>
          <Row className="p-auto mb-auto p-3 mb-4">
            <Col sm="3" className="align-self-center">
              <ProgressBar
                variant="success"
                now={90}
                style={{ backgroundColor: "#ff4c4c", height: 6 }}
              />
            </Col>

            <Col sm="4" className="align-self-center">
              <p style={{ fontSize: 13, opacity: 0.7, margin: "auto" }}>
                Kullanılan Alan %11.00 (5.46 GB / 48.28 GB)
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mt-2">
        <Card.Body>
          <div className="d-flex mb-3 justify-content-between">
            <div>Ana Dizin</div>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={(text) => setSearchKey(text.target.value)}
              />
            </div>
          </div>
          <DataTable columns={columns} data={data} pagination striped />
        </Card.Body>
      </Card>
    </>
  );
};

export default FileManagement;
