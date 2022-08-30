import React, { useRef, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getList,clear,history, historyUpdate } from "../redux/search"
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
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [historyToggle, setHistoryToggle] = useState(false);
  const timerId = useRef(null);
  const checkText = useRef("");
  const keywordList = useSelector((state) => state.searchReducer.keywords);

  //마지막 입력 후 1.5 초 동안 아무입력 없으면 페이지 이동한다.
  const onChange = (e) => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      if (e.target.value) {
        if(keywordList.some(keywordList => keywordList === e.target.value)) dispatch(historyUpdate(e.target.value))
        else{
          dispatch(history(e.target.value))
        }

        if(text !== checkText.current) {
          checkText.current = text
          dispatch(clear())
          dispatch(getList({value : e.target.value, page : 1}))
        }
        
        navigate(`/search?q=${e.target.value}`);
      } else alert("검색어를 입력해주세요");
    }, 1500);
    setText(e.target.value);
  };

  const onFocus = () => {
    setHistoryToggle(true);
  };

  const onFocusout = () => {
    setHistoryToggle(false);
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
          <form>
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
                {[...keywordList].reverse().map((history, i) => (
                  <List key={i}>
                    <HiOutlineSearch className="search-icon" />
                    {history}
                  </List>
                ))}
              </Dropdown>
          )}
        </SearchForm>
      </SearchContainer>
    </>
  );
}