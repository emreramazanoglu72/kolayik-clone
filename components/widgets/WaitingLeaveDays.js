import React, { useContext, useEffect, useState } from "react";
import { RiFolderChartLine } from "react-icons/ri";
import { AppContext } from "/context/AppProvider";
import { POST } from "/services/api";
import { WidgetCard } from "../cards";

const WaitingLeaveDays = () => {
  const { authentication } = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    POST(`/api/widgets/WaitingLeaveDays`).then((res) => setData(res.data.items));
  };

  return (
    <WidgetCard icon={<RiFolderChartLine />} title="İzin Talepleri">
      {data.length == 0 && (
        <div className="text">Onayınızı bekleyen izin talebi yok.</div>
      )}
      {data?.map((item, key) => (
        <div key={key} className="d-flex justify-content-between">
          <span>{item?.name}</span>
          <span> {item?.start} </span>
        </div>
      ))}
    </WidgetCard>
  );
};

export default WaitingLeaveDays;
