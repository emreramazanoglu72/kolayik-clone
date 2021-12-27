import React, { useContext, useEffect, useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { AppContext } from "/context/AppProvider";
import { POST } from "/services/api";
import { WidgetCard } from "../cards";

const CompanyEvents = () => {
  const { authentication } = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    POST(`/api/widgets/CompanyEvents`).then((res) => setData(res.data));
  };

  return (
    <WidgetCard icon={<FiCalendar />} title="Etkinlik Takvimi">
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

export default CompanyEvents;
