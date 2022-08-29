import React from "react";
import {
  ListDiv,
  Title,
  ATag,
  ClipIcon,
  Content,
} from "../style/style";
import clipmark from "../img/clipmark.svg";
import unclipmark from "../img/unclipmark.svg";
import { useDispatch } from "react-redux";
import { clipToggle } from "../redux-store/newsSlice";


const Article = ({ele , clippedId}) => {
  // const {  clippedId } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  return (
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
              src={clippedId.indexOf(ele._id) !== -1 ? clipmark : unclipmark}
              alt="icon"
              onClick={() => dispatch(clipToggle({ id: ele._id }))}
            ></ClipIcon>
          </Title>
          <Content>{ele.snippet}</Content>
          {/* <Content>{date}</Content> */}
          <Content>{`${ele.pub_date.substr(0, 4)}.${ele.pub_date.substr(
              5,
              2
            )}.${ele.pub_date.substr(8, 2)}`}</Content>
        </ListDiv>
      
  );
};

export default Article;
