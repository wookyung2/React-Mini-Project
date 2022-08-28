import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from "./components/Main";
import Search from "./components/Search";
import Clip from "./components/Clip";

const App = () => {
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Search/>} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
