import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Button from "./Button";

const Main = () => {
  return (
    <>
      <div>Main입니다</div>
      <Link to="/modal">모달페이지</Link>
      <Link to="/button">버튼페이지</Link>
      <Button />
      <Modal />
    </>
  );
};

export default Main;
