import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { useState } from "react";

const Button = (props) => {
  const Btn = styled.div`
    width: 100px;
    height: 50px;
    background: #000;
    color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
  `;
  let [modalbox, setModalbox] = useState(false);

  return (
    <div>
      <Btn
        onClick={() => {
          setModalbox(!modalbox);
        }}
      >
        버튼
      </Btn>
      {modalbox === true ? <Modal></Modal> : null}
    </div>
  );
};

export default Button;
