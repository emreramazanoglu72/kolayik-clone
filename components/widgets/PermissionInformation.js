import React, { useState, useEffect, useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiCheckMark, GiCancel, GiCommercialAirplane } from "react-icons/gi";
import { POST } from "/services/api";
import { WidgetCard } from "../cards";
import { AppContext } from "/context/AppProvider";
const PermissionInformation = () => {
  const context = useContext(AppContext);
  const [info, setInfo] = useState({ currentUsed: 0, unused: 0 });
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    context?.userInfo?.user?.id &&
      POST(`/api/leave/status/${context?.userInfo?.user?.id}`).then((res) => {
        res?.data && Object.keys(res?.data).map((item) => {
          if (res.data[item].name == "Yıllık İzin") {
            setInfo(res.data[item]);
          }
        });
      });

    POST(`/api/widgets/leave-days`).then((response) => {
      setData(response.data.items);
    });
  };
  return (
    <WidgetCard
      icon={<GiCommercialAirplane />}
      title="İzin Bilgilerim/Yıllık İzin"
    >
      <div className="d-flex justify-content-between">
        <div className="remainder">
          <p>Kalan</p>
          <h5 className="text-danger font-weight-bold">{info.unused} gün</h5>
        </div>
        <div className="used">
          <p>Kullanılan</p>
          <h5 className="font-weight-bold">{info.currentUsed} gün</h5>
        </div>
      </div>

      <div className="permission">
        <label>Son izinlerim:</label>
        <ul className="permissionList">
          {data.map((item, key) => (
            <li className="permissionItem" key={key}>
              {item.status == "approved" ? (
                <GiCheckMark className="successIcon" />
              ) : (
                <GiCancel className="dangerIcon" />
              )}

              <span> 13 Ara 2021 (Rapor) </span>
              <BsThreeDotsVertical className="dotsIcon" />
            </li>
          ))}
        </ul>
      </div>

      <div className="footer">
        <a href="#" className="footerLink">
          İzin geçmişim >
        </a>
      </div>
    </WidgetCard>
  );
};

export default PermissionInformation;
