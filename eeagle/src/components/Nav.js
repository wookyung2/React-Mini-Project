import LogoImage from "../img/Logo.svg";
import SearchBtn from "../img/Search_btn.svg";
import {
  Input,
  NavBar,
  Logo,
  InputDiv,
  Button,
  InputIcon,
} from "../style/style";
import { Dropdown, List } from "../style/mainStyle.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  getList,
  clear,
  historyUpdate,
} from "../reduxSlice/newsSlice";

const Nav = ({ showClip }) => {
  const navigate = useNavigate();
  const keywordList = useSelector((state) => state.keywords);
  const [historyToggle, setHistoryToggle] = useState(false);
  const [text, setText] = useState(keywordList.at(-1));
  const dispatch = useDispatch();

  // Submit 핸들함수
  // 바로전 키워드와 다르면 Articles를 cleanup하고,
  // 그 후 keywordUpdate, fetchArticle 순차적으로 실행
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(historyUpdate(text));
    dispatch(clear());
    dispatch(getList({ value: text, page: 1 }));
    navigate(`/search?q=${text}`);
  };

  return (
    <NavBar>
      <Link to="/">
        <Logo src={LogoImage}></Logo>
      </Link>
      <InputDiv>
        <form onSubmit={handleSubmit}>
          {!showClip && (
            <>
              <InputIcon src={SearchBtn}></InputIcon>
              <Input
                value={text}
                type="text"
                placeholder="Search..."
                onChange={(e) => setText(e.target.value)}
                onFocus={() => setHistoryToggle(!historyToggle)}
                onBlur={() => setHistoryToggle(!historyToggle)}
              />
            </>
          )}
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
      <Link to={showClip ? `/search?q=${keywordList.at(-1)}` : "/clip"}>
        <Button type="button">{showClip ? "Show All" : "Show Clip"}</Button>
      </Link>
    </NavBar>
  );
};

export default Nav;
