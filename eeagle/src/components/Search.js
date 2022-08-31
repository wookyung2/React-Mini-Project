import Nav from "./Nav";
import Article from "./Article";
import React, { useRef,useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../redux-store/newsSlice";
import { ListContanier } from "../style/style";
import { useInView } from 'react-intersection-observer';

function Search() {
  const dispatch = useDispatch()
  const [ref, inView] = useInView();
  const checkPage = useRef(1);

  const articleList = useSelector((state) => state.searchReducer.articles);

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
      <ListContanier>
        {console.log(articleList)}
        {articleList.map((ele) => 
          <Article ele={ele}/>
        )}
        <div ref={ref} />
      </ListContanier>
    </>
  );
}

export default Search;
