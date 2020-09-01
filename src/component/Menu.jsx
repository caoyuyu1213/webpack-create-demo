import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

const Menu = () => {
  const dispatch = useDispatch();
  const { count, diss } = useSelector((state) => ({
    count: state["count"],
    diss: state["diss"],
  }));
  return (
    <div className="menu">
      <Button type="default" href="/home">
        menu菜单
      </Button>
      <p>{count}</p>
      <p>{diss}</p>
    </div>
  );
};

export default Menu;
