import styled from "styled-components";

const LightGrey = "#9e9e9e";

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
  input {
    font-size: 1.8rem;
    padding-left: 3.8rem;
    width: 100%;
    height: 4rem;

    box-sizing: border-box;
    border-radius: 2rem;
    border: 0.1rem solid ${LightGrey};

    &:focus {
      outline: ${LightGrey};
      border-radius: 2rem 2rem 0 0;
    }
  }

  .SearchIcon {
    position: absolute;
    top: 4.8rem;
    top: 50%;
    left: 1.6rem;
    font-size: 1.7rem;
    z-index: 1;
    color: ${LightGrey};
    transform: translateY(-50%);
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
  position: absolute;

  font-size: ${(props) => (props.nav ? "1rem" : "1.8rem")};
  font-weight: ${(props) => (props.nav ? "400" : null)};
  top: ${(props) => (props.nav ? "2rem" : null)};

  width: 100%;
  padding: 0;
  padding-bottom: 1rem;
  margin: 0;

  border-radius: 0 0 2rem 2rem;
  border: 0.1rem solid ${LightGrey};
  border-top: none;
  box-sizing: border-box;
  background-color: white;
  color: ${LightGrey};

  .ListIcon {
    position: absolute;
    top: 0.5rem;
    left: 1.6rem;
    font-size: 1.7rem;
    z-index: 1;
    color: ${LightGrey};
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
  position: relative;
  padding-left: ${(props) => (props.nav ? "2.6rem" : "3.8rem")};
  margin-top: ${(props) => (props.nav ? "0.6rem" : "1.5rem")};
  list-style: none;
`;
