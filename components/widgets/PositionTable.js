import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { CgPlayPauseR } from "react-icons/cg";
import { AppContext } from "/context/AppProvider";
import { POST } from "/services/api";

const PositionTable = () => {
  const context = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (context?.userInfo?.user?.id) {
      getData();
    }
  }, [context?.userInfo?.user?.id]);

  const getData = () => {
    POST(`/api/person/person-unit`, {
      personId: context.userInfo.user.id,
    }).then((res) => {
      const items = res.data.units[0].items;
      const newList = [
        {
          company:
            items["22a7a2321bd7636e00392c6464049c53"].companyUnitItem.name,
          title: items["7410677d8540271924d4c4ff66e7f1be"].companyUnitItem.name,
          team: items["bc4628e99648ffae3c78a703b8de8eba"].companyUnitItem.name,
          section:
            items["d13d43f8c1f4469b208575ece99f2d85"].companyUnitItem.name,
          departman:
            items["f82445dc9de83dd2ba22edb75f1afd3c"].companyUnitItem.name,
          type: res.data.units[0].employmentType,
          branch:
            items["0d5ae1e3f2580855be6d37a80108dfb1"].companyUnitItem.name,
          startDate: res.data.units[0].startDate
            ? moment(res.data.units[0].startDate).format("Do MMM YYYY")
            : "-",
          endDate: res.data.units[0].endDate
            ? moment(res.data.units[0].endDate).format("Do MMM YYYY")
            : "-",
        },
      ];

      setData(newList);
    });
  };
  const columns = [
    {
      name: "Başlangıç",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Bitiş",
      selector: (row) => row.endDate,
      sortable: true,
    },
    {
      name: "Çalışma Şekli",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Şirket",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "Şube",
      selector: (row) => row.branch,
      sortable: true,
    },
    {
      name: "Departman",
      selector: (row) => row.departman,
      sortable: true,
    },
    {
      name: "Bölüm",
      selector: (row) => row.section,
      sortable: true,
    },
    {
      name: "Takım",
      selector: (row) => row.team,
      sortable: true,
    },
    {
      name: "Ünvan",
      selector: (row) => row.title,
      sortable: true,
    },
  ];
  return (
    <div>
      <CgPlayPauseR /> <span>Pozisyon</span>
      <DataTable columns={columns} data={data} pagination striped />
    </div>
  );
};

export default PositionTable;
