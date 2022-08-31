import LogoImage from "../img/Logo.svg";
import SearchBtn from "../img/Search_btn.svg";
import {
  Input,
  NavBar,
  Logo,
  InputDiv,
  Button,
  InputIcon,
  MainButton,
  SearchButton,
  Buttons,
  Div,
} from "../style/style";
import { Dropdown, List } from "../style/mainStyle.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  getList,
  clear,
  history,
  historyUpdate,
} from "../redux-store/newsSlice";

const Nav = () => {
  const keywordList = useSelector((state) => state.searchReducer.keywords);
  const [historyToggle, setHistoryToggle] = useState(false);
  const [text, setText] = useState(keywordList.at(-1));
  const dispatch = useDispatch();

  // Submit 핸들함수
  // 바로전 키워드와 다르면 Articles를 cleanup하고,
  // 그 후 keywordUpdate, fetchArticle 순차적으로 실행
  const handleSubmit = (e) => {
    e.preventDefault();

    // keywordList에 text가 존재하면
    if (keywordList.some((keywordList) => keywordList === text))
      dispatch(historyUpdate(text));
    else {
      dispatch(history(text));
    }
    dispatch(clear());
    dispatch(getList({ value: text, page: 1 }));
  };

  const onFocus = () => {
    setHistoryToggle(true);
  };

  const onFocusout = () => {
    setHistoryToggle(false);
  };

  return (
    <NavBar>
      <Link to="/">
        <Logo src={LogoImage}></Logo>
      </Link>
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
          <Dropdown nav>
            {[...keywordList].reverse().map((history, i) => (
              <List nav key={i}>
                <InputIcon src={SearchBtn}></InputIcon>
                {history}
              </List>
            ))}
          </Dropdown>
        )}
      </InputDiv>

      <Link to="/clip">
        <Button type="submit">Clips</Button>
      </Link>

      <Link to="/">
        <MainButton>Main</MainButton>
      </Link>

      <Link to="/search">
        <SearchButton>Search</SearchButton>
      </Link>
    </NavBar>
  );
};

export default Nav;
