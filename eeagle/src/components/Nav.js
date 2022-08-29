import LogoImage from "../img/Logo.svg";
import SearchBtn from "../img/Search_btn.svg";
import { NavBar, Logo, InputDiv, Button, Input, InputIcon ,MainButton, SearchButton } from "../style";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useRef, useState } from "react";
import { getList,clear,history,historyUpdate } from "../redux/search"
import { HiOutlineSearch } from "react-icons/hi";
import "./Main.scss";

const Nav = () => {
  const [text, setText] = useState("");
  const [historyToggle, setHistoryToggle] = useState(false);
  // 리렌더 초기화 방지
  const checkText = useRef("");
  const keywordList = useSelector((state) => state.searchReducer.keywords);
  const dispatch = useDispatch();

  // Submit 핸들함수 
  // 바로전 키워드와 다르면 Articles를 cleanup하고,
  // 그 후 keywordUpdate, fetchArticle 순차적으로 실행
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // keywordList에 text가 존재하면
    if(keywordList.some(keywordList => keywordList === text)) dispatch(historyUpdate(text))
    else{
      dispatch(history(text))
    }
    // 똑같은 단어 연속 검색 방지
    if(text !== checkText.current) {
        // 똑같은 단어 연속 검색이 아니면
        checkText.current = text
        dispatch(clear())
        dispatch(getList({value : text, page : 1}))
    }
  };
  
  const onFocus = () => {
    setHistoryToggle(true);
  };

  const onFocusout = () => {
    setHistoryToggle(false);
  };

  return (
    <NavBar>
      <Link to="/"><Logo src={LogoImage}></Logo></Link>
      <InputDiv>
        <form onSubmit={handleSubmit}>
          <InputIcon src={SearchBtn}></InputIcon>
          <Input 
          value={text}
          type="text"
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
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
      </InputDiv>
        <Link to='/clip'><Button type='submit'>Clips</Button></Link>
        <Link to='/'><MainButton>Main</MainButton></Link>
        <Link to='/search'><SearchButton>Search</SearchButton></Link>
    </NavBar>
  );
};


export default Nav