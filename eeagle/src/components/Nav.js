import LogoImage from "../img/Logo.svg";
import SearchBtn from "../img/Search_btn.svg";
import { NavBar, Logo, InputDiv, Button, Input, InputIcon ,MainButton, SearchButton} from "../style";
import { Link } from "react-router-dom";
import useSelector from "react-redux";


const Nav = () => {
  return (
    <NavBar>
      <Link to="/"><Logo src={LogoImage}></Logo></Link>
      <InputDiv>
        <InputIcon src={SearchBtn}></InputIcon>
        <Input 
        value=''
        type='type'
        placeholder="Search..."
        />
      </InputDiv>
      <Link to='/clip'><Button type='submit'>Clips</Button></Link>
      <Link to='/Main'><MainButton>Main</MainButton></Link>
      <p>..</p>
      <Link to='/search'><SearchButton>Search</SearchButton></Link>
    </NavBar>
  );
};


export default Nav