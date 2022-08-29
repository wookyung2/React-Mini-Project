import React from "react";
import clipmark from "../img/clipmark.svg";
import { clip } from "../redux/search";
import Nav from "./Nav";
import {
  ListContanier,
  ListDiv,
  Title,
  ATag,
  ClipIcon,
  Content,
} from "../style";
import { useDispatch, useSelector } from "react-redux";

const Clip = () => {
  const clippedList = useSelector((state) => state.searchReducer.clipes);
  const dispatch = useDispatch();

  return (
    <>
      <Nav/>
      <ListContanier>
        {clippedList.map((ele) =>
         <ListDiv key={ele._id}>
         <Title>
           {/*타이틀 클릭시 새창으로 이동*/}
           <ATag
             href={ele.web_url}
             target="_blank"
             rel="noreferrer"
             title="Detail view"
           >
             {ele.headline.main}
           </ATag>
           <ClipIcon
             src={clipmark}
             alt="clipicon"
             onClick={() => dispatch(clip(ele))}
           ></ClipIcon>
         </Title>
         <Content>{ele.snippet}</Content>
         {/* <Content>{date}</Content> */}
       </ListDiv>
        )}
      </ListContanier>
    </>
  );
};

export default Clip;