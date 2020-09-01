import React, { useEffect } from "react";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];

const App = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => ({
    data: state["data"],
  }));

  useEffect(() => {
    axios
      .get(
        "https://www.fastmock.site/mock/fe94ad60eb686320b7fbd1c40c28c05d/snake/demoTable"
      )
      .then((res) => {
        const own = res.data.result;
        dispatch({ type: "getTableData", table: own });
      });
  }, []);

  return (
    <div className="table">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default App;
