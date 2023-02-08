import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { useState } from "react";

const Btn = styled.div`
  width: ${(props) =>
    props.size == "small" ? "100px" : props.size == "big" ? "150px" : "100px"};
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
// const Btn2 = styled.div`
//   width: 200px;
//   height: 100px;
//   background: #000;
//   color: #fff;
//   border-radius: 5px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 20px;
//   cursor: pointer;
//   margin-top: 20px;
// `;
// const Btn3 = styled.div`
//   width: 300px;
//   height: 150px;
//   background: #000;
//   color: #fff;
//   border-radius: 5px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 20px;
//   cursor: pointer;
//   margin-top: 20px;
// `;

const Button1 = (props) => {
  let [modalbox, setModalbox] = useState(false);
  const bbttn = () => {
    setModalbox(!modalbox);
  };
  return (
    <div>
      <Btn size={props.size} onClick={bbttn}>
        버튼
      </Btn>
      {/* <Btn2 onClick={bbttn}>버튼2</Btn2> */}
      {/* <Btn3 onClick={bbttn}>버튼3</Btn3> */}
      <Modal btmodal={modalbox}></Modal>
    </div>
  );
};

export default Button1;
