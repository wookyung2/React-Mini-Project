import Nav from "./Nav";
import Article from "./Article";
import React, { useEffect } from "react";
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
  useEffect(() => {
    if (articleList.length !== 0 && inView) {
      dispatch(getList({ page: page }));
    }
  }, [inView]);

  return (
    <>
      <Nav showClip={false} />
      <ListContanier>
        {articleList.map((ele) => (
          <Article key={ele._id} ele={ele} />
        ))}
        <div ref={ref} />
      </ListContanier>
      {isLoading && <Loading />}
    </>
  );
}

export default Search;
