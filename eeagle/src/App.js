import Main from "./components/Main";
import Search from "./components/Search";
import Clip from "./components/Clip";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

 const NotFound = () => {
   return (
     <>
       <div>
         <h1>Error 404 - Page Not Found!</h1>
         <p>
           The page you tryung to reach does not exist, or has been moved.
           <br />
           Please enter the correct url
         </p>
       </div>
     </>
   );
 };

function App() {
  const history = useSelector((state) => state.searchReducer.keywords);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
             path="/search"
             element={history.length ? <Search /> : <Main />}
           />
          <Route path="/clip" element={<Clip />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
