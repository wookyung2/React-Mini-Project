import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SearchForm = styled.div`
  position: relative;
  width: 57.2rem;
  top: 5rem;

  .SearchIcon {
    position: absolute;
    top: 4.8rem;
    top: 50%;
    left: 1.6rem;
    font-size: 1.7rem;
    z-index: 1;
    color: #9e9e9e;
    transform: translateY(-50%);
  }
`;

export const Input = styled.input`
   font-size: 1.8rem;
   padding-left: 3.8rem;
   width: 100%;
   height: 4rem;
   box-sizing: border-box;
   border-radius: 2rem;
   border: 0.1rem solid #9e9e9e;
   &:focus {
     outline: #9e9e9e;
     border-radius: 2rem 2rem 0 0;
   }
 `;

export const Logo = styled.h1`
  position: absolute;
  font-size: 7rem;
  color: #3d3d3d;
  bottom: 2rem;
  left: 17rem;
`;

export const Dropdown = styled.ul`
  ${(props) =>
     props.nav
       ? `font-size: 1rem;
         font-weight: 400;
         top: 2rem`
       : `font-size: 1.8rem;
         font-weight: null;
         top: null`};
  position: absolute;

  width: 100%;
  padding: 0;
  padding-bottom: 1rem;
  margin: 0;

  border-radius: 0 0 2rem 2rem;
  border: 0.1rem solid #9e9e9e;
  border-top: none;
  box-sizing: border-box;
  background-color: white;
  color: #9e9e9e;

  .ListIcon {
    position: absolute;
    top: 0.5rem;
    left: 1.6rem;
    font-size: 1.7rem;
    z-index: 1;
    color: #9e9e9e;
  }
`;

export const InputIcon = styled.img`
  position: absolute;
  left: 2.74%;
  right: 91.23%;
  top: 14%;
  bottom: 15.62%;
  height: 22px;
  width: 22px;
`;

export const List = styled.li`
 ${(props) =>
     props.nav
       ? `padding-left: 2.6rem;
         margin-top: 0.6rem`
       : `padding-left: 3.8rem;
         margin-top: 1.5rem`};
  position: relative;
  list-style: none;
`;
