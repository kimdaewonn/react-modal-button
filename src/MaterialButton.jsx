import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";

const MaterialButton = () => {
  return (
    <>
      <ButtonGroup
        className="buttongroup1"
        variant="outlined"
        aria-label="outlined button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup
        className="buttongroup2"
        variant="text"
        aria-label="text button group"
      >
        <Button>right-One</Button>
        <Button>right-Two</Button>
        <Button>right-Three</Button>
      </ButtonGroup>
      {/* <Modal btmodal={props.modalbox} /> */}
    </>
  );
};

export default MaterialButton;
