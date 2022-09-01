import React, { useRef, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Input,
  Dropdown,
  List,
  Logo,
  SearchContainer,
  SearchForm,
} from "../style/mainStyle.js";
import { Button, NavBar } from "../style/style.js";
import LogoImage from "../img/Logo.svg";
import {
  getList,
  clear,
  history,
  historyUpdate,
} from "../redux-store/newsSlice";

export default function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [historyToggle, setHistoryToggle] = useState(false);
  const timerId = useRef(null);
  const keywordList = useSelector((state) => state.searchReducer.keywords);

  //마지막 입력 후 1.5 초 동안 아무입력 없으면 페이지 이동한다.
  const onChange = (e) => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      if (e.target.value) {
        if (keywordList.some((keywordList) => keywordList === e.target.value))
          dispatch(historyUpdate(e.target.value));
        else {
          dispatch(history(e.target.value));
        }
        dispatch(clear());
        dispatch(getList({ value: e.target.value, page: 1 }));
        navigate(`/search?q=${e.target.value}`);
      } else alert("검색어를 입력해주세요");
    }, 1500);
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    clearTimeout(timerId.current);
    if (keywordList.some((keywordList) => keywordList === text))
      dispatch(historyUpdate(text));
    else {
      dispatch(history(text));
    }
    dispatch(clear());
    dispatch(getList({ value: text, page: 1 }));
    navigate(`/search?q=${text}`);
  };

  return (
    <>
      <NavBar>
        <Link to="/clip">
          <Button type="submit">Show Clip</Button>
        </Link>
      </NavBar>
      <SearchContainer>
          <SearchForm onSubmit={onSubmit}>
          <Logo src={LogoImage}></Logo>
            <HiOutlineSearch className="SearchIcon" />
            <Input
              value={text}
              type="text"
              placeholder="Search.."
              onChange={onChange}
              onFocus={() => setHistoryToggle(!historyToggle)}
              onBlur={() => setHistoryToggle(!historyToggle)}
            />
          {historyToggle && (
            <Dropdown>
              {[...keywordList].reverse().map((history, i) => (
                <List key={i}>
                  <HiOutlineSearch className="ListIcon" />
                  {history.length > 40
                    ? `${history.substring(0, 40)}...`
                    : history}
                </List>
              ))}
            </Dropdown>
          )}
          </SearchForm>
      </SearchContainer>
    </>
  );
}
