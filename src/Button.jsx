import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { useState } from "react";

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

// const Button = () => {
//   let [modalbox, setModalbox] = useState(false);
//   const isOn = () => {
//     setModalbox(!modalbox);
//   };
//   return (
//     <div>
//       <Btn onClick={isOn}>버튼</Btn>
//       <Modal onFu={modalbox}></Modal>
//     </div>
//   );
// };

const Button = () => {
  let [modalbox, setModalbox] = useState(false);
  const bbttn = () => {
    setModalbox(!modalbox);
  };
  return (
    <div>
      <Btn onClick={bbttn}>버튼</Btn>
      <Modal btmodal={modalbox}></Modal>
    </div>
  );
};

export default Button;
