import React, { useContext, useState, useEffect } from "react";
import { FiGift } from "react-icons/fi";
import { WidgetCard } from "../cards";
import { POST } from "/services/api";
import { AppContext } from "/context/AppProvider";

const UpcomingBirthdays = () => {
  const { authentication } = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
      getData();
  }, []);

  const getData = () => {
    POST(`/api/widgets/UpcomingBirthday`, {
      page: 1,
      limit: 10,
    }).then((res) => setData(res.data.items));
  };

  return (
    <WidgetCard icon={<FiGift />} title="Yaklaşan Doğum Günleri">
      <div className="userList">
        {data.map((item, key) => (
          <div key={key} className="userListItem">
            <div className="userListItemName">
              <img src={item.avatar} alt="" />
              {item.firstName} {item.lastName}
            </div>
            <div className="birthDate">{item.date}</div>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
};

export default UpcomingBirthdays;
