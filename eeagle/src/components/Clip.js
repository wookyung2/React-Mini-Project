import React from "react";
// import { FetchApi } from "../util/FetchApi";
import Nav from "./Nav";
import {  useSelector } from "react-redux";
import Article from "./Article";
import { ListContanier } from "../style/style";

const Clip = () => {
  // const [clip, useClip] = useState();
  const { clipped: clippedArticles, clippedId } = useSelector((state) => state.news);
  return (
    <>
      <Nav />
      <ListContanier>
      {clippedArticles.map((ele) => 
      <Article ele={ele} clippedId={clippedId}/>
      )}
      </ListContanier>
    </>
  );
};

export default Clip;
