import LogoImage from "../img/Logo.svg";
import SearchBtn from "../img/Search_btn.svg";
import {
  NavBar,
  Logo,
  InputDiv,
  Button,
  InputIcon,
  MainButton,
  SearchButton,
} from "../style/style";
import { Dropdown, List } from "../style/mainStyle.js";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import {
  keywordUpdate,
  cleanUpArticles,
  fetchArticle,
} from "../redux-store/newsSlice";

const Nav = () => {
  const [value, setValue] = useState(
    useSelector((state) => state.news.keyword.at(-1))
  );
  const timerId = useRef(null);
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.news.keyword);
  const page = useSelector((state) => state.news.page);
  const [historyToggle, setHistoryToggle] = useState(false);

  //Change 핸들함수
  //검색어 입력후 0.5초동안 추가입력이 없을 시 fetchArticle 실행
  const handleChange = (e) => {
    setValue(e.target.value);
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      if (e.target.value) {
        dispatch(cleanUpArticles());
        dispatch(fetchArticle({ keyword: e.target.value, page: 1 }));
      }
    }, 500);
  };

  const onFocus = () => {
    setHistoryToggle(true);
    setValue("");
  };

  const onFocusout = () => {
    setHistoryToggle(false);
  };

  // Submit 핸들함수
  // 바로전 키워드와 다르면 Articles를 cleanup하고,
  // 그 후 keywordUpdate, fetchArticle 순차적으로 실행
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword[keyword.length - 1] !== value) {
      dispatch(cleanUpArticles());
      dispatch(fetchArticle({ keyword: value, page: 1 }));
    } else dispatch(fetchArticle({ keyword: value, page: page }));

    dispatch(keywordUpdate({ keyword: value }));
    setValue("");
  };

  return (
    <NavBar>
      <Link to="/">
        <Logo src={LogoImage}></Logo>
      </Link>
      <InputDiv>
        <form onSubmit={handleSubmit}>
          <InputIcon src={SearchBtn}></InputIcon>
          <input
            value={value}
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onFocusout}
          />
        </form>
        {historyToggle && (
          <Dropdown nav>
            {keyword.map((word, i) => (
              <List nav key={i}>
                <InputIcon src={SearchBtn}></InputIcon>
                {word}
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
