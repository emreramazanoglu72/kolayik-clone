import React, { useEffect, useState, useContext } from "react";
import { BsUmbrella } from "react-icons/bs";
import { AppContext } from "/context/AppProvider";
import { WidgetCard } from "../cards";
import { POST } from "/services/api";

const PublicHolidays = () => {
  const { authentication } = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
      getData();
  }, []);

  const getData = () => {
    POST(`/api/widgets/PublicHolidays`).then((res) => setData(res.data));
  };

  return (
    <WidgetCard icon={<BsUmbrella />} title="Resmi Tatiller">
      {data.length == 0 && (
        <div className="text">Yaklaşan şirket etkinliği yok.</div>
      )}
      {data.map((item, key) => (
        <div key={key} className="d-flex justify-content-between">
          <span>{item.name}</span>
          <span> {item.start} </span>
        </div>
      ))}
    </WidgetCard>
  );
};

export default PublicHolidays;
