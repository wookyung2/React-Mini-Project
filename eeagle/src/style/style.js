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
  position: relative;
  width: 365px;
  top: 28px;
  left: 220px;
  &:focus {
    outline: #9e9e9e;
     border-radius: 20px 20px 0 0;
  }
`;

export const Input = styled.input`
   padding-left: 38px;
   font-size: 14px;
   width: 100%;
   height: 32px;
   color: #9e9e9e;
   box-sizing: border-box;
   border-radius: 20px;
   border: 0.1rem solid #9e9e9e;
   &:focus {
     outline: #9e9e9e;
     border-radius: 20px 20px 0 0;
   }
 `;

export const InputIcon = styled.img`
  position: absolute;
  left: 2.74%;
  right: 91.23%;
  top: 8%;
  bottom: 15.62%;
  height: 22px;
  width: 22px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
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
