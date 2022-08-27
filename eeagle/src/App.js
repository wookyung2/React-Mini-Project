import Main from "./components/Main";
import Search from "./components/Search";
import Clip from "./components/Clip";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./style";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/clip" element={<Clip />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
