import styled from "styled-components";

export const ListContanier = styled.div`
  width: 800px;
  height: auto;
  margin: 100px 520px 0 120px;
`;

export const ListDiv = styled.div`
  width: 800px;
  padding: 20px 0;
`;

export const Title = styled.div`
  height: 25px;
  font-size: 20px;
  color: #0c2d6d;
  margin-bottom: 12px;
  font-weight: 500;
`;
export const ATag = styled.a`
  text-decoration-line: none;
  color: inherit;
`;
export const ClipIcon = styled.img`
  height: 16px;
  margin: 0 13px;
`;
export const Content = styled.div`
  font-size: 16px;
  color: #3d3d3d;
  margin-bottom: 8px;
`;

export const NavBar = styled.div`
  position: fixed;
  min-width: 900px;
  width: 100%;
  height: 80px;
  left: 0px;
  top: 0px;
  display: flex;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  background-color: white;
`;

export const Logo = styled.img`
  position: absolute;
  width: 80px;
  height: 28px;
  left: 120px;
  top: 26px;
  cursor: pointer;
`;

export const InputDiv = styled.div`
  position: absolute;
  width: 365px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #9e9e9e;

  height: 32px;
  left: 240px;
  right: 835px;
  top: 24px;

  border: 1px solid #9e9e9e;
  border-radius: 20px;

  button {
    visibility: hidden;
  }
`;

export const InputIcon = styled.img`
  position: absolute;
  left: 2.74%;
  right: 91.23%;
  top: 15.62%;
  bottom: 15.62%;
  height: 22px;
  width: 22px;
`;

export const Input = styled.input`
  border: none;
  position: absolute;
  left: 10.96%;
  right: 74.25%;
  top: 21.88%;
  bottom: 25%;
  width: 300px;

  &:focus::placeholder {
    color: transparent;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 70px;
  height: 40px;
  right: 120px;
  top: 20px;

  background: #0c2d6d;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  color: #eeeeee;
`;

export const SearchButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 70px;
  height: 40px;
  right: 200px;
  top: 20px;

  background: #0c2d6d;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  color: #eeeeee;
`;

export const MainButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 70px;
  height: 40px;
  right: 280px;
  top: 20px;

  background: #0c2d6d;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  color: #eeeeee;
`;
