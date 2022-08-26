import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticle } from "../redux-store/newsSlice";
import { clipToggle, keywordUpdate, cleanUpArticles } from "../redux-store/newsSlice";
import "./search.css";

function Search() {
  const [value, setValue] = useState("");
  const [showClip, setShowClip] = useState(false);
  const { articles, clipped, keyword, isLoading, page } = useSelector(
    (state) => state.news
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(keyword[keyword.length-1] !== value) dispatch(cleanUpArticles());
      dispatch(keywordUpdate({ keyword: value }));
      dispatch(fetchArticle({keyword:value, page:page}));
      setValue("");
  };

  const handleClip = (e) => {
    setShowClip(!showClip)
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
      {showClip ? ( <div className="container">
           {clipped.map((article) => {
            const title = article.headline.main;
            const id = article._id;
            return (
              <div key={id} className="article-box">
                <h1 className="title">{title}</h1>
                <button
                  onClick={() => {
                    dispatch(clipToggle({ id: id }));
                  }}
                >
                  clip
                </button>
              </div>
            );
          })}
        </div>) : (<div className="container">
           {articles.map((article) => {
            const title = article.headline.main;
            const id = article._id;
            return (
              <div key={id} className="article-box">
                <h1 className="title">{title}</h1>
                <button
                  onClick={() => {
                    dispatch(clipToggle({ id: id }));
                  }}
                >clip
                </button>
              </div>
            );
          })}
        </div>)}

    </>
  );
}

export default Search;
