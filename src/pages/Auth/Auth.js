// import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { KAKAO_AUTH_URL, CLIENT_ID } from './OAuth';
// import { API } from '../../config';

function Auth() {
  const params = useParams();
  const navigate = useNavigate();

  const isLogin = params.type === 'login';

  const loginKakao = () => {
    const { Kakao } = window;
    Kakao.Auth.login({
      success: function (authObj) {
        fetch('http://mycodetrip-api.chanjoo.xyz/users/authorize', {
          method: 'POST',
          headers: { Authorization: authObj.access_token },
        })
          .then(res => res.json())
          .then(data => {
            if (data) {
              localStorage.setItem('token', data.jwt_token);
              navigate('/');
            }
          });
      },
    });
  };

  const toggleLogin = () => {
    // setIsLogin(prev => !prev);
    navigate(isLogin ? '/Auth/signup' : '/Auth/login');
  };

  return (
    <Container>
      <AuthContainer>
        <img src="/images/logo.png" alt="로고" />
        <TextBox>
          <Title>{isLogin ? '반갑습니다!' : 'Welcome!'}</Title>
          <SubTitle>여행의 모든 것, 마이코드트립</SubTitle>
        </TextBox>
        <KakaoButton onClick={loginKakao}>
          <BtnText>
            {isLogin ? '카카오로 바로시작' : '카카오로 계속하기'}
          </BtnText>
        </KakaoButton>
        <Social>
          <Socialtext>페이스북</Socialtext>
          <Socialtext>네이버</Socialtext>
          <Socialtext>이메일</Socialtext>
        </Social>

        <YetSignIn>
          {isLogin ? '이미 아이디가 있으신가요?' : '아직 회원이 아니신가요?'}
        </YetSignIn>
        <AuthQuest onClick={toggleLogin}>
          {isLogin ? '로그인' : '회원가입'}
        </AuthQuest>
      </AuthContainer>
    </Container>
  );
}

export default Auth;

const Container = styled.section`
  padding: 150px;
  display: flex;
  justify-content: center;
`;

const AuthContainer = styled.div`
  border: 1px solid #dcdcdc;
  height: 460px;
  width: 450px;
  padding: 60px;
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
  width: 320px;
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
  color: #a9a9a9;
`;

const YetSignIn = styled.p`
  line-height: 2.5;
  display: inline;
  color: #a9a9a9;
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
