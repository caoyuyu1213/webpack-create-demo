import React from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Add = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => ({
    count: state["count"],
  }));

  const handleAdd = () => {
    dispatch({ type: "add" });
  };

  return (
    <div className="add">
      <p>{count}</p>
      <Button type="primary" onClick={handleAdd}>
        加加
      </Button>
      <Son />
    </div>
  );
};

const Son = () => {
  const { number } = useSelector((state) => ({
    number: state["number"],
  }));
  return (
    <div className="son">
      <p>{number}</p>
    </div>
  );
};

export default Add;
