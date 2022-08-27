import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchArticle } from "../redux-store/newsSlice";
import { clipToggle } from "../redux-store/newsSlice";
import Nav from './Nav'
import {
  ListContanier,
  ListDiv,
  Title,
  ATag,
  ClipIcon,
  Content,
} from "../style";
import clipmark from "../img/clipmark.svg";
import unclipmark from "../img/unclipmark.svg";

function Search() {
  // const [value, setValue] = useState("");
  const { articles, clippedId } = useSelector(
    (state) => state.news
  );
  const dispatch = useDispatch();


  // Submit 핸들함수 
  // 바로전 키워드와 다르면 Articles를 cleanup하고,
  // 그 후 keywordUpdate, fetchArticle 순차적으로 실행
  // const handleSubmit = ({e, value}) => {
  //   e.preventDefault();
  //   console.log(e);
  //   console.log(value);
    // if(keyword[keyword.length-1] !== value) dispatch(cleanUpArticles());
    //   dispatch(keywordUpdate({ keyword: value }));
    //   dispatch(fetchArticle({keyword:value, page:page}));
    //   setValue("");
  // };



  return (
    <>
      <Nav/>
      {/* <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">submit</button>
      </form> */}
      <ListContanier >
           {articles.map((ele) => (
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
                onClick={() => dispatch(clipToggle({id:ele._id}))}>
              </ClipIcon>
            </Title>
            <Content>{ele.snippet}</Content>
            {/* <Content>{date}</Content> */}
          </ListDiv>
           ))}
        </ListContanier>
    </>
  );
}

export default Search;
