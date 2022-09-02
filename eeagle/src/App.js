import Main from "./components/Main";
import Search from "./components/Search";
import Clip from "./components/Clip";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const NotFoundDiv = styled.div`
  width: 800px;
  height: 600px;
  margin: 250px auto 0;
  text-align: center;
`;

const Title = styled.div`
  font-size: 75px;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 25px;
`;

const HomeBtn = styled.button`
  background: #0c2d6d;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  color: #eeeeee;
  padding: 15px;
  cursor: pointer;
`;

const NotFound = () => {
  return (
    <>
      <NotFoundDiv>
        <Title>404</Title>
        <Text>
          The page you tryung to reach does not exist, or has been moved.
          <br />
          Please enter the correct url
        </Text>
        <Link to="/">
          <HomeBtn>Home page</HomeBtn>
        </Link>
      </NotFoundDiv>
    </>
  );
};

function App() {
  const history = useSelector((state) => state.keywords);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/search"
            element={history.length ? <Search /> : <Main />}
          />
          <Route path="/search?q=:id" element={<Search />} />
          <Route path="/clip" element={<Clip />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
