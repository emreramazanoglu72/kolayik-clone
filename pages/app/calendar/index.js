import React, { useContext, useState, useEffect } from "react";
import Container from "/components/layout/Container";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { POST } from "/services/api";
const localizer = momentLocalizer(moment);
const now = new Date();

const index = () => {
  const [filter, setFilter] = useState({
    start: moment(now).format("YYYY-MM-DDT00:00:00.000Z"),
    end: moment(now).add(1, "months").format("YYYY-MM-DDT00:00:00.000Z"),
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [filter]);
  const getData = async () => {
    const data = await POST(`/api/calendar/`, filter);
    setData(data?.data?.events);
  };
  return (
    <Container
      title="Takvim"
      description="İzin, resmi tatiller gibi etkinlikleri görüntüleyebilirsiniz."
      iconShow={false}
    >
      <Calendar
        localizer={localizer}
        events={data}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        culture={"tr"}
        messages={{
          date: "Tarih",
          time: "Zaman",
          event: "Etkinlik",
          allDay: "Tüm Gün",
          week: "Hafta",
          work_week: "Çalışma haftası",
          day: "Gün",
          month: "Ay",
          previous: "Önceki",
          next: "Sonraki",
          yesterday: "Dün",
          tomorrow: "Yarın",
          today: "Bugün",
          agenda: "Gündem",
          noEventsInRange: "Bu aralıkta hiçbir etkinlik yok.",
        }}
        onRangeChange={(item) => {
          setFilter({
            start: moment(item.start).format("YYYY-MM-DDT00:00:00.000Z"),
            end: moment(item.end)
              .add(1, "days")
              .format("YYYY-MM-DDT00:00:00.000Z"),
          });
        }}
        style={{ height: 500 }}
      />
    </Container>
  );
};

export default index;
