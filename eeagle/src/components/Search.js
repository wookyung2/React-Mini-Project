import React, { useRef,useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Nav from './Nav'
import { clip, getList } from "../redux/search"
import { useInView } from 'react-intersection-observer';
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

const Search = () => {
  const dispatch = useDispatch()
  const [ref, inView] = useInView();
  const checkPage = useRef(1);

  const articleList = useSelector((state) => state.searchReducer.articles);
  const clippedList = useSelector((state) => state.searchReducer.clipes);

  // 새로운 키워드로 검색하면 checkPage.current 1로 초기화
  if(articleList.length <= 10) checkPage.current = 1

  // 무한 스크롤 page 1 증가
  useEffect(()=>{
    if(articleList.length !==0 && inView) {
        checkPage.current += 1
        dispatch(getList({page : checkPage.current}));
      }
  },[inView]);

  return (
    <>
      <Nav />
      <ListContanier >
        {articleList.map((ele) => (
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
                // clippedList에 ele가 있으면 clipmark 없으면 unclipmark
                src = { clippedList.some(clippedList => clippedList._id === ele._id) ? clipmark : unclipmark }
                // clip 버튼 클릭
                onClick={() => {dispatch(clip(ele))}}
                alt="icon"
              >
              </ClipIcon>
            </Title>
            <Content>{ele.snippet}</Content>
            {/* <Content>{date}</Content> */}
          </ListDiv>
        ))}
        <div ref={ref} />
      </ListContanier>
    </>
  )
}

export default Search