import React from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Cut = () => {
  const dispatch = useDispatch();
  const { number } = useSelector((state) => ({
    number: state["number"],
  }));

  const handleCut = () => {
    dispatch({ type: "cut" });
  };

  return (
    <div className="cut">
      <p>{number}</p>
      <Button type="primary" danger onClick={handleCut}>
        减减
      </Button>
    </div>
  );
};

export default Cut;
