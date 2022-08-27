import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticle } from "../redux-store/newsSlice";
import {
  clipToggle,
  keywordUpdate,
  cleanUpArticles,
} from "../redux-store/newsSlice";
import { ListContanier, ListDiv } from "../style";

function Search() {
  const [value, setValue] = useState("");
  const [showClip, setShowClip] = useState(false);
  const { articles, clipped, keyword, isLoading, page } = useSelector(
    (state) => state.news
  );
  const dispatch = useDispatch();

  // Submit 핸들함수
  // 바로전 키워드와 다르면 Articles를 cleanup하고,
  // 그 후 keywordUpdate, fetchArticle 순차적으로 실행
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword[keyword.length - 1] !== value) dispatch(cleanUpArticles());
    dispatch(keywordUpdate({ keyword: value }));
    dispatch(fetchArticle({ keyword: value, page: page }));
    setValue("");
  };

  // Clip 모아보기 토글함수
  const handleClip = (e) => {
    setShowClip(!showClip);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <div>
        <button onClick={handleClip}>Show Clip</button>
      </div>
      {showClip ? (
        <ListContanier>
          {clipped.map((article) => {
            const title = article.headline.main;
            const id = article._id;
            return (
              <ListDiv key={id}>
                <h1 className="title">{title}</h1>
                <button
                  onClick={() => {
                    dispatch(clipToggle({ id: id }));
                  }}
                >
                  clip
                </button>
              </ListDiv>
            );
          })}
        </ListContanier>
      ) : (
        <ListContanier>
          {articles.map((article) => {
            const title = article.headline.main;
            const id = article._id;
            return (
              <ListDiv key={id}>
                <h1 className="title">{title}</h1>
                <button
                  onClick={() => {
                    dispatch(clipToggle({ id: id }));
                  }}
                >
                  clip
                </button>
              </ListDiv>
            );
          })}
        </ListContanier>
      )}
    </>
  );
}

export default Search;
