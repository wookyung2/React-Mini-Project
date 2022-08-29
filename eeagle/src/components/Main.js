import React, { useRef, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  cleanUpArticles,
  fetchArticle,
  keywordUpdate,
} from "../redux-store/newsSlice.js";
import {
  Dropdown,
  List,
  Logo,
  SearchContainer,
  SearchForm,
} from "../style/mainStyle.js";
import { Button, NavBar } from "../style/style.js";

export default function Main() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const timerId = useRef(null);
  const dispatch = useDispatch();
  const { keyword, page } = useSelector((state) => state.news);
  const [historyToggle, setHistoryToggle] = useState(false);

  //마지막 입력 후 0.5초 동안 아무입력 없으면 페이지 이동.

  const onChange = (e) => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      if (e.target.value) {
        navigate(`/search?q=${e.target.value}`);
        dispatch(cleanUpArticles());
        dispatch(fetchArticle({ keyword: e.target.value, page: 1 }));
      } else alert("검색어를 입력해주세요");
    }, 500);

    setValue(e.target.value);
  };
  // Focus에 따라 DropDown on/off
  const onFocus = () => {
    setHistoryToggle(true);
  };

  const onFocusout = () => {
    setHistoryToggle(false);
  };

  //submit 후 /search 페이지로 이동 및 검색어 저장
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(keywordUpdate({ keyword: value }));
    navigate(`/search?q=${e.target.value}`);
    dispatch(cleanUpArticles());
    dispatch(fetchArticle({ keyword: e.target.value, page: 1 }));
  };

  return (
    <>
      <NavBar>
        <Link to="/clip">
          <Button type="submit">Clips</Button>
        </Link>
      </NavBar>
      <SearchContainer>
        <SearchForm>
          {/* 검색어 다섯개 초과 시 하나씩 삭제 */}
          <form onSubmit={onSubmit}>
            <Logo>Eeagle</Logo>
            <HiOutlineSearch className="SearchIcon" />
            <input
              value={value}
              type="text"
              placeholder="Search.."
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onFocusout}
            />
          </form>
          {historyToggle && (
            <Dropdown>
              {keyword.map((word, i) => (
                <List key={i}>
                  <HiOutlineSearch className="ListIcon" />
                  {word}
                </List>
              ))}
            </Dropdown>
          )}
        </SearchForm>
      </SearchContainer>
    </>
  );
}
