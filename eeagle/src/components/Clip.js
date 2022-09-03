import React from "react";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import Article from "./Article";
import { ListContanier } from "../style/style";

const Clip = () => {
  const clippedList = useSelector((state) => state.clipes);
  
  return (
    <>
      <Nav showClip={true}/>
      <ListContanier>
        {clippedList.map((ele) => 
        <Article ele={ele} key={ele._id}/>
        )}
      </ListContanier>
    </>
  );
};

export default Clip;
