import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Box = styled.div`
  width: 600px;
  height: 300px;
  background: #f6f6f6;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Modal() {
  return (
    <div>
      {/* <Link to="/">홈으로</Link> */}
      <Box />
    </div>
  );
}

export default Modal;
