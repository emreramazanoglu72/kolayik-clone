import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React, { useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { BsPeople } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AppContext } from "/context/AppProvider";
import { POST } from "/services/api";
import { WidgetCard } from "../cards";

ChartJS.register(ArcElement, Tooltip, Legend);

const DepartmentChart = () => {
  const { authentication } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    getData();
  }, []);
  var config = {
    datasets: [
      {
        label: "# of Votes",
        data: [],
        backgroundColor: [
          "rgba(249, 200, 88, 1)",
          "rgba(84, 112, 198, 1)",
          "rgba(145, 204, 117, 1)",
        ],
        borderColor: [
          "rgba(249, 200, 88, 1)",
          "rgba(84, 112, 198, 1)",
          "rgba(145, 204, 117, 1)",
        ],
      },
    ],
    labels: [],
    text: "23%",
  };
  const getData = () => {
    POST(`/api/widgets/DepartmentChart`, {
      unitId: "",
    }).then((res) => {
      setTotalCount(res.data.totalCount);
      Object.keys(res.data.unitList).map((item) => {
        config.datasets[0].data.push(res.data.unitList[item].count);
        config.labels.push(res.data.unitList[item].name);
      });
      setData(config);

      setIsLoading(false);
    });
  };
  return (
    <WidgetCard icon={<BsPeople />} title="Çalışan Dağılımı">
      {!isLoading && (
        <Doughnut
          data={data}
          width={250}
          height={250}
          options={{
            elements: {
              center: {
                text: "Red is 2/3 of the total numbers",
                color: "#FF6384", // Default is #000000
                fontStyle: "Arial", // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25, // Default is 25 (in px), used for when text wraps
              },
            },
          }}
        />
      )}

      <div className="footer">
        <FiUsers /> {totalCount}
      </div>
    </WidgetCard>
  );
};

export default DepartmentChart;
