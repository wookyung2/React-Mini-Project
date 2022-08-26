import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticle } from "../redux-store/newsSlice";
import "./search.css";

function Search() {
  const [value, setValue] = useState("");
  const { articles, clipped, keyword, isLoading, page } = useSelector(
    (state) => state.news
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchArticle({keyword:value, page:page}));
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

      <div className="container">
      {articles.map((article) => {
            const title = article.headline.main;
            const id = article._id;
            return (
              <div key={id} className="article-box">
                <h1 className="title">{title}</h1>
                <button onClick={() => {}}>clip</button>
              </div>
            );
      })}
      </div>

    </>
  );
}

export default Search;
