import Nav from "./Nav";
import Article from "./Article";
import React, { useRef,useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../redux-store/newsSlice";
import { ListContanier } from "../style/style";
import { useInView } from 'react-intersection-observer';
import Loading from "../style/Loading";

function Search() {
  const dispatch = useDispatch()
  const [ref, inView] = useInView();
  const checkPage = useRef(1);
  const articleList = useSelector((state) => state.articles);
  const isLoading = useSelector((state) => state.isLoading);

  // 새로운 키워드로 검색하면 checkPage.current 1로 초기화
  if(articleList.length < 10) checkPage.current = 1

  // 무한 스크롤 page 1 증가
  useEffect(()=>{
    if(articleList.length !==0 && inView) {
        checkPage.current += 1
        dispatch(getList({page : checkPage.current}));
      }
  },[inView]);

  return (
    <>
      <Nav showClip={false}/>
      <ListContanier>
        {articleList.map((ele) => 
          <Article key={ele._id} ele={ele}/>
        )}
        <div ref={ref} />
      </ListContanier>
      {isLoading && <Loading />}
    </>
  );
}

export default Search;
