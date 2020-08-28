import React, { useEffect } from "react";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./app.scss";
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
  const { count, number, data } = useSelector((state) => ({
    count: state["count"],
    number: state["number"],
    data: state["data"],
  }));

  const handleAdd = () => {
    dispatch({ type: "add" });
  };

  const handleCut = () => {
    dispatch({ type: "cut" });
  };

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
    <div className="app">
      <div className="demo">
        <p>{count}</p>
        <Button type="primary" onClick={handleAdd}>
          加加
        </Button>
        <p>{number}</p>
        <Button type="primary" danger onClick={handleCut}>
          减减
        </Button>
        <p>换行</p>
        <Button type="primary" href='/menu'>路由跳转</Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default App;
