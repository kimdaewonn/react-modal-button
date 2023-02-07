import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./Button";
import Main from "./Main";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/button" element={<Button />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
