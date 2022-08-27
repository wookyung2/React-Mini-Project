import LogoImage from "../img/Logo.svg";
import SearchBtn from "../img/Search_btn.svg";
import { NavBar, Logo, InputDiv, Button, Input, InputIcon ,MainButton, SearchButton} from "../style";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { useState } from "react";
import { keywordUpdate, cleanUpArticles,fetchArticle } from "../redux-store/newsSlice";

const Nav = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { keyword, page } = useSelector((state) => state.news );

  // Submit 핸들함수 
  // 바로전 키워드와 다르면 Articles를 cleanup하고,
  // 그 후 keywordUpdate, fetchArticle 순차적으로 실행
  const handleSubmit = (e) => {
    e.preventDefault();
    if(keyword[keyword.length-1] !== value){
      dispatch(cleanUpArticles());
      dispatch(fetchArticle({keyword:value, page:1}));
    }else
    dispatch(fetchArticle({keyword:value, page:page}));
      
      dispatch(keywordUpdate({ keyword: value }));
      setValue("");
  };

  return (
    <NavBar>
      <Link to="/"><Logo src={LogoImage}></Logo></Link>
      <InputDiv>
        <form onSubmit={handleSubmit}>
          <InputIcon src={SearchBtn}></InputIcon>
          <Input 
          value={value}
          type="text"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </InputDiv>
        <Link to='/clip'><Button type='submit'>Clips</Button></Link>
        <Link to='/'><MainButton>Main</MainButton></Link>
        <Link to='/search'><SearchButton>Search</SearchButton></Link>
    </NavBar>
  );
};


export default Nav