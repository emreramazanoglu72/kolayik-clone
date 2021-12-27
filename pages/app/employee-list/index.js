import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Pagination, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { RiAppsLine, RiListCheck, RiOrganizationChart } from "react-icons/ri";
import Container from "/components/layout/Container";
import { POST } from "/services/api";

const index = (props) => {
  const [userList, setUserList] = useState({ resultSet: [], totalCount: 0 });
  const [searchKey, setSearchKey] = useState("");
  const [activeTabs, setActiveTabs] = useState(1);
  const [filter, setFilter] = useState({ page: 1, q: "" });
  const [paginationCount, setPaginationCount] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const columns = [
    {
      name: "Ad-Soyad",
      selector: (row) => `${row.firstName} ${row.lastName}`,
    },
    {
      name: "Ünvan",
      selector: (row) => row.titleName,
    },
    {
      name: "E-Posta",
      selector: (row) => row.workEmail,
    },
    {
      name: "Telefon",
      selector: (row) => row.workPhone,
    },
  ];

  useEffect(() => {
    getData();
  }, [filter]);

  const getData = async () => {
    setIsLoading(true);
    const data = await POST(`/api/person/new-search`, filter);
    setUserList(data);
    var newList = [];
    for (var i = 0; i < data.totalCount / 60; i++) {
      newList.push(i++);
    }
    setPaginationCount(newList);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <Container title="Çalışanlar" description="" iconShow={false}>
        <svg
          _ngcontent-hdg-c106
          viewBox="0 0 102 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo-svg-back logo d-flex m-auto"
          width={50}
          height={50}
        >
          <path
            _ngcontent-hdg-c106
            d="M54 48L79 91.3026L29 91.3025L4 48.0013L29 4.70001L79 4.70001L29 91.3"
            stroke="#376BFB"
            strokeWidth={8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h5 className="text-center font-weight-bold">Yükleniyor</h5>
      </Container>
    );
  }

  return (
    <Container title="Çalışanlar" description="" iconShow={false}>
      <div className="d-flex mb-3 justify-content-between">
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            defaultValue={filter.q}
            onChange={(text) => {
              setTimeout(
                () => setFilter({ ...filter, q: text.target.value }),
                3000
              );
            }}
          />
        </div>
        <div>
          <ButtonGroup aria-label="Basic example">
            <Button
              onClick={() => setActiveTabs(1)}
              variant={activeTabs == 1 ? "primary" : "secondary"}
            >
              <RiAppsLine />
            </Button>
            <Button
              onClick={() => setActiveTabs(2)}
              variant={activeTabs == 2 ? "primary" : "secondary"}
            >
              <RiListCheck />
            </Button>
            <Button  variant="secondary">
              <RiOrganizationChart />
            </Button>
          </ButtonGroup>
        </div>
      </div>

      {/**/}
      {activeTabs == 2 && (
        <DataTable
          columns={columns}
          data={userList.resultSet.filter(
            (filter) =>
              filter.firstName
                .toLowerCase()
                .includes(searchKey.toLowerCase()) ||
              filter.lastName.toLowerCase().includes(searchKey.toLowerCase()) ||
              filter.workPhone
                .toLowerCase()
                .includes(searchKey.toLowerCase()) ||
              filter.workEmail.toLowerCase().includes(searchKey.toLowerCase())
          )}
          pagination
          striped
        />
      )}
      {activeTabs == 1 && (
        <>
          <Row xs={2} md={5} className="g-3">
            {userList.resultSet
              .filter(
                (filter) =>
                  filter.firstName
                    .toLowerCase()
                    .includes(searchKey.toLowerCase()) ||
                  filter.lastName
                    .toLowerCase()
                    .includes(searchKey.toLowerCase()) ||
                  filter.workPhone
                    .toLowerCase()
                    .includes(searchKey.toLowerCase()) ||
                  filter.workEmail
                    .toLowerCase()
                    .includes(searchKey.toLowerCase())
              )
              .map((item, key) => {
                return (
                  <Col>
                    <div className="peopleCard">
                      <img src={item.avatar?.url} className="avatar" />
                      <p className="name">
                        {item.firstName} {item.lastName}
                      </p>
                      <p className="departman">{item.titleName}</p>
                      <p className="email">{item.workEmail}</p>
                      <p className="phone">{item.workPhone}</p>
                    </div>
                  </Col>
                );
              })}
          </Row>
          <Pagination className="mt-4">
            <Pagination.First />
            <Pagination.Prev />
            {paginationCount.map((item, key) => {
              key = key + 1;
              return (
                <Pagination.Item
                  onClick={() => setFilter({ ...filter, page: key })}
                  active={key == filter.page}
                >
                  {key}
                </Pagination.Item>
              );
            })}
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </>
      )}
    </Container>
  );
};

export default index;
