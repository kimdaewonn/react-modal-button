import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button1 from "./Button1";
import Main from "./Main";
import MaterialButton from "./MaterialButton";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/button1" element={<Button1 />}></Route>
          <Route path="/material" element={<MaterialButton />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
