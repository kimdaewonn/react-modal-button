import React from "react";
import { Link } from "react-router-dom";
import Button1 from "./Button1";
import MaterialButton from "./MaterialButton";
import { useState } from "react";

const Main = () => {
  // let [modal1, setModal1] = useState;
  const small = "small";
  const big = "big";
  return (
    <>
      <h1>Main 페이지</h1>
      <Link to="/button1">버튼페이지</Link>
      <Link className="material" to="/material">
        가져온버튼
      </Link>
      <Button1 size={small} />
      <Button1 size={big} />

      <MaterialButton className="material_button" />
    </>
  );
};

export default Main;
