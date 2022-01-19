import styled from 'styled-components';

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';

const Footer = () => {
  return (
    <FooterWrap>
      <FooterContent>
        <ServiceWrap>
          <ServiceInfo>
            <h4>고객센터 운영안내</h4>
            <TimeInfo>
              <strong>평일(채팅/유선) :</strong> 09:00-18:00 (12시~13시 제외){' '}
              <br />
              <strong>주말/공휴일 :</strong> 채팅 상담만 가능 <br />
              <strong>※ 항공권 환불/변경 :</strong> 09:00-17:00까지 접수 가능{' '}
              <br />
              <strong>유선상담 :</strong> 1670-8208
            </TimeInfo>
            <button>1:1 채팅상담</button>
          </ServiceInfo>
          <ServiceLink>
            <LinkWrap>
              <h5>소개</h5>
              <Link>
                <li>회사소개</li>
                <li>채용</li>
                <li>공고</li>
              </Link>
            </LinkWrap>
            <LinkWrap>
              <h5>파트너</h5>
              <Link>
                <li>파트너 등록하기</li>
                <li>Affiliate 프로그램</li>
                <li>리얼파트너</li>
                <li>파트너 블로그</li>
              </Link>
            </LinkWrap>
            <LinkWrap>
              <h5>지원</h5>
              <Link>
                <li>자주 묻는 질문</li>
                <li>최저가 보장제</li>
              </Link>
            </LinkWrap>
          </ServiceLink>
        </ServiceWrap>
        <CompanyInfoWrap>
          <CompanyAbout>
            <li>이용 약관</li>
            <li>개인정보 처리방침</li>
            <li>취소 및 환불 정책</li>
          </CompanyAbout>
          <CompanyAbout>
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <SiNaver />
            </li>
            <li>
              <FaInstagram />
            </li>
          </CompanyAbout>
          <CompanyInfo>
            상호명 (주)마이리얼트립 | 대표 이동건 | 개인정보보호책임자 정재훈 |
            사업자등록번호 209-81-55339 사업자정보확인 | 통신판매업신고번호
            2019-서울서초-0260
            <br /> 주소 서울특별시 서초구 강남대로 327, 대륭서초타워
            18층(서초동) | 이메일 help@myrealtrip.com | 마케팅/제휴 문의
            marketing@myrealtrip.com
            <br />{' '}
            <span>
              자사는 서울특별시관광협회 공제영업보증보험에 가입되어 있습니다.
              마이리얼트립은 통신판매중개자이며 통신판매의 당사자가 아닙니다.
              따라서 상품·거래정보 및 거래에 대하여 책임을 지지않습니다.
            </span>
          </CompanyInfo>
        </CompanyInfoWrap>
      </FooterContent>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.footer`
  border-top: 1px solid #e9ecef;
`;

const FooterContent = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1060px;
  margin: 0 auto;
  background-color: #fff;
  padding: 40px 0;
`;

const ServiceWrap = styled.section`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
  position: relative;
  width: 50%;
  color: #666d75;

  h4 {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
  }

  button {
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 4px;
    color: #495056;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    margin: 16px 0 0;
    padding: 9px 8px;
    width: 110px;
  }
`;

const TimeInfo = styled.p`
  color: #848c94;
  font-size: 14px;
  margin: 10px 0 0;
  letter-spacing: -0.2px;
  line-height: 1.5;
  word-break: break-all;

  strong {
    font-weight: 400;
    color: #495056;
  }
`;

const ServiceLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 50%;
`;

const LinkWrap = styled.div`
  width: 33.3333%;

  h5 {
    color: #666d75;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.6;
  }
`;

const Link = styled.ul`
  margin-top: 10px;

  li {
    font-size: 14px;
    line-height: 2.29;
    color: #666d75;
    font-size: 15px;
    line-height: 1.6;
    font-size: 14px;
    height: auto;
    font-weight: 400;
    padding: 6px 6px 6px 0px;
  }
`;

const CompanyInfoWrap = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid #e9ecef;
`;

const CompanyAbout = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 50%;

  li {
    margin-right: 20px;
    color: #666d75;
    line-height: 2.29;
    font-size: 14px;
    font-weight: 400;
    height: auto;
    padding: 6px;

    &:last-of-type {
      margin-right: 0;
    }
  }

  &:last-of-type {
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;

    li {
      padding: 0;

      svg {
        width: 20px;
        height: 20px;
        color: #848c94;
      }
    }
  }
`;

const CompanyInfo = styled.p`
  color: #848c94;
  font-size: 12px;
  letter-spacing: -0.2px;
  line-height: 1.67;
  margin: 16px 0 0;
  text-align: left;

  span {
    display: block;
    padding-top: 20px;
  }
`;
