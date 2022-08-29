import React from "react";
import { useSelector } from "react-redux";
// import { fetchArticle } from "../redux-store/newsSlice";
import Nav from "./Nav";
import Article from "./Article";
import { ListContanier } from "../style/style";

function Search() {
  // const [value, setValue] = useState("");
  const { articles , clippedId } = useSelector((state) => state.news);

  return (
    <>
      <Nav />
      <ListContanier>
      {articles.map((ele) => 
      <Article ele={ele} clippedId={clippedId}/>
      )}
      </ListContanier>
    </>
  );
}

export default Search;
