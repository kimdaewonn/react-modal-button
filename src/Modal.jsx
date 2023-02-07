import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 600px;
  height: 300px;
  background: #f6f6f6;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.modalbbox ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

// const Modal = (props) => {
//   return (
//     <div>
//       <Box ison={props.onFu}>모달</Box>
//     </div>
//   );
// };

const Modal = (props) => {
  return (
    <div>
      <Box modalbbox={props.btmodal}>모달</Box>
    </div>
  );
};

export default Modal;
