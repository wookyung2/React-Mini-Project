import React, { useRef, useState } from "react";
import "./Main.scss";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const localHistoryKey = "search";

export default function Main() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const timerId = useRef(null);
  const [histories, setHistory] = useState(
    localStorage.getItem(localHistoryKey)?.split(",") ?? []
  );
  const [historyToggle, setHistoryToggle] = useState(false);

  //마지막 입력 후 0.5초 동안 아무입력 없으면 페이지 이동

  const onChange = (e) => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      if (e.target.value) {
        navigate("/search");
      } else alert("검색어를 입력해주세요");
    }, 3000);

    setValue(e.target.value);
  };

  const onFocus = () => {
    console.log("focus");
    setHistoryToggle(true);
  };

  const onFocusout = () => {
    console.log("focusout");
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
      <div className="search-container">
        <h1 className="logo">Eeagle</h1>
        <div className="search-form">
          {/* 검색어 다섯개 초과 시 하나씩 삭제 */}
          <form onSubmit={onSubmit}>
            <HiOutlineSearch className="search-icon" />
            <input
              value={value}
              type="text"
              placeholder="Search.."
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onFocusout}
            />
          </form>
          {/* 검색어 거꾸로 출력 및 focus일때 dropdwon toggle생성 */}
          {historyToggle && (
            <ul className="dropdown">
              {[...histories].reverse().map((history, i) => (
                <li key={i}>
                  <HiOutlineSearch className="search-icon" />
                  {history}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
