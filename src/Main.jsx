import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Main = () => {
  return (
    <>
      <div>Main입니다</div>
      <Link to="/button">버튼페이지</Link>
      <Button />
    </>
  );
};

export default Main;
