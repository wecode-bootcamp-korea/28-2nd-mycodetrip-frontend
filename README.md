# MyCodeTrip Team Project

## :: 팀원

- Frontend - 강희원, 김선주, 박준영, 성윤경
- Backend - 이민석, 이찬주
- Backend Link: https://github.com/wecode-bootcamp-korea/28-2nd-mycodetrip-backend.git

## :: Project 소개

### Languages and Tools

**_Front-end_**
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

**_Back-end_**
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

## 구현사항

1. Authorization
2. Main
3. FlightsList
4. 항공권 확인 및 금액 확인 페이지
5. 예약 페이지

## styled components 사용법

```
import styled from 'styled-components';
const MainWrapper = styled.div`
  ${props => props.theme.flex};
  background-color: red;
  color: ${props => props.theme.color.green};
`;
```

- 일반적인 태그 대신에 styled.Tag명`으로`내부에 sass 로직으로 스타일 작성
- sass 문법 이기에 Nesting이 가능하다.
- Components이기에 props를 받을 수 있으며 ${props => props.color} 또는 ${({color} => color)}와 같이 props를 스타일에 적용시킬 수 있다.

### Theme 객체

- props에는 ThemeProvider로 부터 전달받은 theme객체가 들어있고 내부의 값들은 아래와 같다.

- ${props => props.theme.색상명 또는 flex}로 적용시킬 수 있다.
- theme.flex의 경우 <Wrapper justify='center' />와 같이 props로 넘겨 주면 justify props가 theme.flex의 props로 들어가 적용이 된다.

```
export const theme = {
  flex: css`
    display: flex;
    justify-content: ${({ justify }) =>
      justify ? `${justify}` : 'flex-start'};
    align-items: ${({ align }) => (align ? `${align}` : 'center')};
  `,
  color: {
    white: '#ffffff',
    black: '#222222',
    primary_300: '#e6f4fd',
    primary_400: '#2b96ec',
    primary_500: '#2a94e9',
    green: '#147b5e',
    gray_50: '#f0f3f5',
    gray_100: '#f0f3f5',
    gray_300: '#dfe3e6',
    gray_500: '#acb5bd',
    gray_800: '#656d75',
  },
};
```
