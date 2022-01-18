import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MYPAGE_BTN_DATA = [
  { url: '/', text: '위시리스트' },
  { url: '/', text: '내여행' },
  { url: '/', text: '메세지' },
  { url: '/', text: '알림' },
];

const LOGIN_BTN_DATA = [
  { url: '/', text: '파트너 등록하기' },
  { url: '/Auth', text: '로그인' },
];

function Navbar(props) {
  const navigate = useNavigate();
  const TOKEN = localStorage.getItem('token');
  const logoutBtn = () => {
    localStorage.clear();
    props.navigate.push('/');
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
            {MYPAGE_BTN_DATA.map((btn, idx) => (
              <Btn key={idx} to={btn.url}>
                {btn.text}
              </Btn>
            ))}
            <Logout onClick={logoutBtn}>로그아웃😇</Logout>
          </RSide>
        ) : (
          <RSide>
            {LOGIN_BTN_DATA.map((btn, idx) => (
              <Btn key={idx} to={btn.url}>
                {btn.text}
              </Btn>
            ))}
            <BtnIn to="/">회원가입</BtnIn>
          </RSide>
        )}
      </Input>
      <Navi />
      <NavLine />
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
`;

const Logo = styled.img`
  width: 130px;
  margin-right: 20px;
`;

const Input = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  height: 50px;
  margin-top: 10px;
`;

const LSide = styled.header`
  display: flex;
  align-items: center;
`;

const Search = styled.input.attrs({
  placeholder: '  도시나 상품을 검색해보세요',
})`
  width: 290px;
  height: 48px;
  padding-left: 5px;
  background-color: rgba(0, 0, 0, 0.06);
  border-style: none;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const RSide = styled.header`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 10px;
`;

const BtnIn = styled(Link)`
  padding: 10px 30px;
  color: rgba(0, 143, 255, 0.86);
  border: 1px solid rgba(0, 127, 255, 0.54);
  border-radius: 3px;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    background-color: rgba(0, 127, 255, 0.04);
  }
`;

const Btn = styled(Link)`
  margin-right: 17px;
  padding: 13px 10px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  font-weight: 600;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
    border-radius: 3px;
  }
`;

const Navi = styled.ul`
  display: flex;
  width: 65%;
  margin-bottom: 1px;
  margin-top: 20px;
`;

const List = styled.li`
  margin-right: 1.5rem;
  padding-bottom: 12px;
  text-align: center;
  border-bottom: 3px solid rgba(0, 0, 0, 0);
  &:hover {
    border-bottom: 3px solid rgba(0, 127, 255, 0.54);
  }
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  font-weight: 500;
  justify-content: center;
  text-decoration: none;
`;

const NavLine = styled.div`
  top: 120px;
  width: 100%;
  border-top: 0.3px solid rgba(0, 0, 0, 0.1);
`;

const Logout = styled.div`
  cursor: pointer;
`;
