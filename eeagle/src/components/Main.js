import React, { useRef, useState } from "react";
import "../style/MainStyle.js";
import { HiOutlineSearch } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import {
  Dropdown,
  List,
  Logo,
  SearchContainer,
  SearchForm,
} from "../style/MainStyle.js";
import { Button, NavBar } from "../style/style.js";

const localHistoryKey = "search";

export default function Main() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const timerId = useRef(null);
  const [histories, setHistory] = useState(
    localStorage.getItem(localHistoryKey)?.split(",") ?? []
  );
  const [historyToggle, setHistoryToggle] = useState(false);

  //마지막 입력 후 0.5초 동안 아무입력 없으면 페이지 이동.

  const onChange = (e) => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      if (e.target.value) {
        navigate("/search");
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

    if (histories.length > 5) {
      // reversed.pop()
      return;
    }

    setHistory([...histories, value]);
    setValue("");
    localStorage.setItem(localHistoryKey, [...histories, value]);
    navigate(`/search?q=${value}`);
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
              {[...histories].reverse().map((history, i) => (
                <List key={i}>
                  <HiOutlineSearch className="ListIcon" />
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
