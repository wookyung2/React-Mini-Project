import React from "react";
import { ListDiv, Title, ATag, ClipIcon, Content } from "../style/style";
import clipmark from "../img/clipmark.svg";
import unclipmark from "../img/unclipmark.svg";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { clip } from "../reduxSlice/newsSlice";
=======
import { useDispatch,useSelector } from "react-redux";
import { clip } from "../reduxSlice/newsSlice"
>>>>>>> 627ea77bbab9d502282650676b657c2dd3dc5baa

const Article = ({ ele }) => {
  const dispatch = useDispatch();
  const clippedList = useSelector((state) => state.clipes);

  return (
    <ListDiv key={ele._id}>
      <Title>
        <ATag
          href={ele.web_url}
          target="_blank"
          rel="noreferrer"
          title="Detail view">
          {ele.headline.main}
        </ATag>
        <ClipIcon
          // clippedList에 ele가 있으면 clipmark 없으면 unclipmark
          src={
            clippedList.some((clippedList) => clippedList._id === ele._id)
              ? clipmark
              : unclipmark
          }
          // clip 버튼 클릭
          onClick={() => {
            dispatch(clip(ele));
          }}
          alt="icon"></ClipIcon>
      </Title>
      <Content>{ele.snippet}</Content>
      <Content>{`${ele.pub_date.substr(0, 4)}.${ele.pub_date.substr(
        5,
        2
      )}.${ele.pub_date.substr(8, 2)}`}</Content>
    </ListDiv>
  );
};

export default Article;
