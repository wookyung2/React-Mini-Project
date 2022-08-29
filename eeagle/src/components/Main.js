import React, { useRef, useState } from "react";
import "./Main.scss";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux"
import { getList,clear,history, historyUpdate } from "../redux/search"

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
        console.log(1)

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
      <div className="search-container">
        <div className="search-form">
          {/* 검색어 다섯개 초과 시 하나씩 삭제 */}
          <form>
            <h1 className="logo">Eeagle</h1>
            <HiOutlineSearch className="search-icon" />
            <input
              value={text}
              type="text"
              placeholder="Search.."
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onFocusout}
            />
          </form>
          {historyToggle && (
            <ul className="dropdown">
              {[...keywordList].reverse().map((history, i) => (
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
  )
}