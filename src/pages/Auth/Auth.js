import React from 'react';
import styled from 'styled-components';
// import { Link, useHistory } from 'react-router-dom';
// import { KAKAO_AUTH_URL } from './OAuth';
// import { API } from '../../config';

// const { Kakao } = window;

function Auth() {
  const isLogin = localStorage.getItem('token');

  return (
    <Container>
      <AuthContainer>
        <img src="/images/logo.png" alt="로고" />
        <TextBox>
          <Title>{isLogin ? 'Welcome!' : '반갑습니다!'}</Title>
          <SubTitle>여행의 모든 것, 마이코드트립</SubTitle>
        </TextBox>
        <KakaoButton
        // onClick={KakaoLogin}
        >
          <BtnText>
            {isLogin ? '카카오로 계속하기' : '카카오로 바로시작'}
          </BtnText>
        </KakaoButton>
        <Social>
          <Socialtext>페이스북</Socialtext>
          <Socialtext>네이버</Socialtext>
          <Socialtext>이메일</Socialtext>
        </Social>

        <YetSignIn>
          {isLogin ? '아직 회원이 아니신가요? ' : '이미 아이디가 있으신가요?'}
        </YetSignIn>
        <AuthQuest>{isLogin ? '회원가입' : '로그인'}</AuthQuest>
      </AuthContainer>
    </Container>
  );
}

export default Auth;

const Container = styled.section`
  padding: 0px;
  margin: 100px 0px 100px 448px;
`;

const AuthContainer = styled.div`
  border: 1px solid #b9bbb6;
  height: 450px;
  width: 420px;
  padding: 50px;
`;

const TextBox = styled.div`
  line-height: 1.5;
`;

const Title = styled.h1`
  padding-top: 40px;
  padding-bottom: 5px;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
`;

const SubTitle = styled.p`
  line-height: 1;
  text-align: center;
  color: gray;
  font-size: 19px;
  display: block;
  padding-bottom: 20px;
`;

const KakaoButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 60px;
  background-color: rgb(255, 228, 54);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.05);
  }
`;
const Social = styled.div`
  display: flex;
  margin: 20px;
  font-size: 15px;
  font-weight: 500;
  color: #b9bbb6;
`;

const Socialtext = styled.div`
  margin: 5px 23px;
  color: #b9bbb6;
`;

const YetSignIn = styled.p`
  line-height: 2.5;
  display: inline;
  color: #b9bbb6;
  padding-left: 42px;
`;

const BtnText = styled.span`
  margin-top: 4px;
  font-weight: 500;
`;

const AuthQuest = styled.a`
  color: gray;
  text-decoration: underline;
  display: inline;
  margin-left: 10px;
`;
