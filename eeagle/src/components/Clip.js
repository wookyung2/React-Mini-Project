import React from "react";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import Article from "./Article";
import { ListContanier } from "../style/style";

const Clip = () => {
  const clippedList = useSelector((state) => state.searchReducer.clipes);

  return (
    <>
      <Nav />
      <ListContanier>
        {clippedList.map((ele) => 
        <Article ele={ele}/>
        )}
      </ListContanier>
    </>
  );
};

export default Clip;
