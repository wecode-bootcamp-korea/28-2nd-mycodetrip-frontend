import React from 'react';
import styled from 'styled-components';

function Auth() {
  return (
    <SignInWrapper>
      <SignInContainer>
        <TextBox>
          <Title>Welcome!</Title>
          <SubTitle>여행의 모든 것, 마이코드트립</SubTitle>
        </TextBox>
        <kakaoSignIn />
        <YetSignUp>아직 회원이 아니신가요?</YetSignUp>
        <SignUpBtn href="/signUp">회원가입 </SignUpBtn>
      </SignInContainer>
    </SignInWrapper>
  );
}

const SignInWrapper = styled.section`
  padding: 0px 0px 0px 0px;
  margin: 100px 0px 100px 448px;
`;

const SignInContainer = styled.div`
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

const YetSignUp = styled.p`
  display: inline;
`;

const SignUpBtn = styled.a`
  margin-left: 10px;
`;

export default Auth;
