import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { CgPlayPauseR } from "react-icons/cg";
import { AppContext } from "/context/AppProvider";
import { POST } from "/services/api";

const SalaryListTable = () => {
  const context = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (context?.userInfo?.user?.id) {
      getData();
    }
  }, [context?.userInfo?.user?.id]);

  const getData = () => {
    POST(`/api/person/salary-list`, {
      personId: context?.userInfo?.user?.id,
    }).then((res) => {
      setData(res.data);
    });
  };
  const columns = [
    {
      name: "Geçerlilik Başlangıç",
      selector: (row) => (
        <>
          {moment(row.effectiveOn).format("Do MMM YYYY")}
          <span className="kolayBadge badgePrimary ml-2">Varsayılan</span>
        </>
      ),
      sortable: true,
    },
    {
      name: "Tutar",
      selector: (row) => `${row.amount} ${row.currency} Aylık`,
      sortable: true,
    },
    {
      name: "Çalışma Ödeme Düzeni",
      selector: (row) => "NET",
      sortable: true,
    },
    {
      name: "Ek Ödemeler",
      selector: (row) => "-",
    },
  ];
  return (
    <div>
      <CgPlayPauseR /> <span>Pozisyon</span>
      <DataTable columns={columns} data={data} pagination striped />
    </div>
  );
};

export default SalaryListTable;
