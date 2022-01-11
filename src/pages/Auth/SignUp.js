import React from 'react';
import styled from 'styled-components';

function Auth() {
  return (
    <SignUpWrapper>
      <SignUpContainer>
        <TextBox>
          <Title>반갑습니다!</Title>
          <SubTitle>여행의 모든 것, 마이코드트립</SubTitle>
        </TextBox>
        <kakaoButton />
        <YetSignIn> 아직 회원이 아니신가요?</YetSignIn>
        <SignInBtn href="/signIn">로그인</SignInBtn>
      </SignUpContainer>
    </SignUpWrapper>
  );
}

const SignUpWrapper = styled.section`
  padding: 0px 0px 0px 0px;
  margin: 100px 0px 100px 448px;
`;

const SignUpContainer = styled.div`
  border: 1px solid black;
  height: 410px;
  width: 450px;
  padding: 100px;
`;

const TextBox = styled.div`
  line-height: 2;
`;

const Title = styled.h1`
  padding: 20px;
  font-size: 26px;
  font-weight: 500;
  text-align: center;
`;

const SubTitle = styled.p`
  line-height: 1.6;
  text-align: center;
`;

const YetSignIn = styled.p`
  display: inline;
  margin-left: 20px;
`;

const SignInBtn = styled.a`
  margin-left: 10px;
`;

export default Auth;
