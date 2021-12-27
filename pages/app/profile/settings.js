import React, { useContext, useState } from "react";
import { Col } from "react-bootstrap";
import ReactFlagsSelect from "react-flags-select";
import Container from "/components/layout/Container";
import Tabs from "/components/layout/Tabs";
import { AppContext } from "/context/AppProvider";

const Settings = () => {
  const { userInfo } = useContext(AppContext);
  const [selected, setSelected] = useState("TR");
  return (
    <Container
      title="Hesabım"
      description="Kolay İK hesabınızla ilgili tüm işlemleri buradan gerçekleştirebilirsiniz."
      iconShow={false}
    >
      <Tabs>
        <div className="mt-4 profile">
          <div className="row">
            <div className="profileInfo row col-sm-9">
              <Col sm="3">
                <img src={userInfo?.user.avatarFile.url} className="avatar" />
              </Col>
              <Col sm="8">
                <div className="name">
                  {userInfo?.user.firstName} {userInfo?.user.lastName}
                </div>
                <div className="info">
                  {userInfo?.user.location.companyUnitItem.name}
                </div>
                <div className="info">
                  {userInfo?.user.location.companyUnitItem.name} -{" "}
                  {userInfo?.user.location.companyUnitItem.name}
                </div>
                <div className="info">{userInfo?.user.workEmail}</div>
              </Col>
            </div>
            <div className="align-self-center col-sm-3">
              <button type="button" class="btn btn-outline-secondary">
                Parola Değiştir
              </button>
            </div>
          </div>
          <label className="countryLabel">Dil Seçimi</label>
          <Col sm="5" className="mt-1">
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              searchable
              searchPlaceholder="Dil Seçin"
              style={{
                backgroundColor: "gray",
              }}
            />
          </Col>
        </div>
      </Tabs>
    </Container>
  );
};

export default Settings;
