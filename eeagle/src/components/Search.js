import Nav from "./Nav";
import Article from "./Article";
<<<<<<< HEAD
import React, { useEffect } from "react";
=======
import React, { useEffect } from "react"
>>>>>>> 627ea77bbab9d502282650676b657c2dd3dc5baa
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../reduxSlice/newsSlice";
import { ListContanier } from "../style/style";
import { useInView } from "react-intersection-observer";
import Loading from "../style/Loading";

function Search() {
  const dispatch = useDispatch();
  const [ref, inView] = useInView();
  const articleList = useSelector((state) => state.articles);
  const isLoading = useSelector((state) => state.isLoading);
  const page = useSelector((state) => state.page);

  // 무한 스크롤 page 1 증가
<<<<<<< HEAD
  useEffect(() => {
    if (articleList.length !== 0 && inView) {
      dispatch(getList({ page: page }));
    }
  }, [inView]);
=======
  useEffect(()=>{
    if(articleList.length !==0 && inView) {
        dispatch(getList({page : page}));
      }
  },[inView]);
>>>>>>> 627ea77bbab9d502282650676b657c2dd3dc5baa

  return (
    <>
      <Nav showClip={false} />
      <ListContanier>
<<<<<<< HEAD
        {articleList.map((ele) => (
          <Article key={ele._id} ele={ele} />
        ))}
=======
        {articleList.map((ele) => 
          <Article key={ele._id} ele={ele}/>
        )}
>>>>>>> 627ea77bbab9d502282650676b657c2dd3dc5baa
        <div ref={ref} />
      </ListContanier>
      {isLoading && <Loading />}
    </>
  );
}

export default Search;
