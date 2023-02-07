import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { useState } from "react";

let [modalbox, setModalbox] = useState(false);

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
const Button = () => {
  return (
    <div>
      {/* <Link to="/">홈으로</Link> */}
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
