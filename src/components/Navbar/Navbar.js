import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const TOKEN = localStorage.getItem('token');
  const logoutBtn = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <Wrapper>
      <Input>
        <LSide>
          <Link to="/">
            <Logo src="/images/Logo_main.png" />
          </Link>
        </LSide>
        {TOKEN ? (
          <RSide>
            <MyList to="/">위시리스트</MyList>
            <MyList to="/mypage">내여행</MyList>
            <MyList to="/">메세지</MyList>
            <MyList to="/">알림</MyList>
            <Logout onClick={logoutBtn}>로그아웃</Logout>
          </RSide>
        ) : (
          <RSide>
            <AuthBtn to="/Auth/login">로그인</AuthBtn>
            <BtnIn to="/Auth/signup">회원가입</BtnIn>
          </RSide>
        )}
      </Input>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0px;
  background: rgba(0, 0, 0, 0.55);
  padding: 10px 0;
`;

const Logo = styled.img`
  width: 130px;
  margin-right: 20px;
`;

const Input = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 74%;
`;

const LSide = styled.header`
  display: flex;
  align-items: center;
`;

const RSide = styled.header`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const MyList = styled(Link)`
  margin: 5px 23px;
  color: white;
`;

const AuthBtn = styled(Link)`
  margin: 5px 23px;
  color: white;
`;

const BtnIn = styled(Link)`
  padding: 10px 30px;
  color: white;
  border: 1px solid white;
  border-radius: 3px;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    background-color: rgba(0, 127, 255, 0.04);
  }
`;

// const Btn = styled(Link)`
//   margin-right: 17px;
//   padding: 13px 10px;
//   color: rgba(0, 0, 0, 0.5);
//   text-decoration: none;
//   font-weight: 600;
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.06);
//     border-radius: 3px;
//   }
// `;
const Logout = styled.div`
  cursor: pointer;
  color: white;
  border: 1px solid white;
  padding: 10px 30px;
  border-radius: 3px;
  text-decoration: none;
  font-weight: 700;
`;
