import React from 'react';
import styled from 'styled-components';
import Input from './components/Input';
import InputWrapper from './components/InputWrapper';

export default function PassengerInfo({
  passengerInfo,
  setPassengerInfo,
  index,
}) {
  const validatefamily_name =
    passengerInfo.family_name.length >= 1 || passengerInfo.family_name === '';
  const validategiven_name =
    passengerInfo.given_name.length >= 1 || passengerInfo.given_name === '';
  const validatebirthday =
    passengerInfo.birthday.toString().length === 10 ||
    passengerInfo.birthday === '';

  const handleInput = e => {
    const { name, value } = e.target;
    setPassengerInfo({ ...passengerInfo, [name]: value });
  };

  const getOnlyDate = e => {
    const { name, value } = e.target;
    const reg = /[^0-9]/g;
    const toNumber = value.replace(reg, '');
    let toDate = '';
    if (toNumber.length < 4) {
      toDate = toNumber;
    } else if (toNumber.length < 7) {
      toDate = toNumber.substr(0, 4) + '.' + toNumber.substr(4);
    } else {
      toDate =
        toNumber.substr(0, 4) +
        '.' +
        toNumber.substr(5, 2) +
        '.' +
        toNumber.substr(6);
    }
    setPassengerInfo({ ...passengerInfo, [name]: toDate });
  };

  return (
    <Container>
      <P>탑승객 {index + 1}</P>
      <InputWrapper>
        <label htmlFor="nationality">국적</label>
        <Select name="nationality" id="nationality">
          <option value="KOR">대한민국</option>
          <option value="GHA">가나</option>
          <option value="GAB">가봉</option>
          <option value="GUA">가이아나</option>
          <option value="GMB">감비아</option>
          <option value="GLP">과들루프</option>
          <option value="GTM">과테말라</option>
          <option value="GRD">그레나다</option>
          <option value="GRC">그리스</option>
          <option value="GRL">그린란드</option>
          <option value="GIN">기니</option>
          <option value="NAM">나미비아</option>
          <option value="NRU">나우루</option>
          <option value="NGA">나이지리아</option>
          <option value="SSD">남수단</option>
          <option value="ZAF">남아프리카공화국</option>
          <option value="NLD">네덜란드</option>
          <option value="NPL">네팔</option>
          <option value="NOR">노르웨이</option>
          <option value="NFK">노퍽섬</option>
          <option value="NZL">뉴질랜드</option>
          <option value="NCL">뉴칼레도니아</option>
          <option value="NIU">니우에</option>
          <option value="NER">니제르</option>
          <option value="NIC">니키라과</option>
          <option value="TWN">대만</option>
          <option value="DNK">덴마크</option>
          <option value="DMA">도미니카</option>
          <option value="DOM">도미니카공화국</option>
          <option value="DEU">독일</option>
          <option value="TLS">동티모르</option>
          <option value="LAO">라오스</option>
          <option value="LBR">라이베리아</option>
          <option value="LVA">라트비아</option>
          <option value="RUS">러시아</option>
          <option value="LBN">레바논</option>
          <option value="LSO">레소토</option>
          <option value="LOU">루마니아</option>
          <option value="LUX">룩셈부르크</option>
          <option value="RWD">르완다</option>
          <option value="REU">리유니온</option>
          <option value="LTU">리투아니아</option>
          <option value="LIE">리히텐슈타인</option>
          <option value="MDG">마다가스카르</option>
          <option value="MTQ">마르티니크</option>
          <option value="MHL">마샬 군도</option>
          <option value="MYT">마요트</option>
          <option value="FSM">마이크로네시아 연방</option>
          <option value="MKD">마케도니아</option>
          <option value="MWI">말라위</option>
          <option value="MYS">말레이시아</option>
          <option value="MLI">말리</option>
          <option value="MEX">멕시코</option>
          <option value="MCO">모나코</option>
          <option value="MAR">모로코</option>
          <option value="MUS">모리셔스</option>
          <option value="MRT">모리타니아</option>
          <option value="MOZ">모잠바크</option>
          <option value="MSR">몬세라트</option>
          <option value="MNE">몬테네그로</option>
          <option value="MDA">몰도바</option>
          <option value="MDV">몰디브</option>
          <option value="MLT">몰타</option>
          <option value="MNG">몽골</option>
          <option value="USA">미국</option>
          <option value="MMR">미얀마</option>
          <option value="BHR">바레인</option>
          <option value="BRB">바베이도스</option>
          <option value="BHS">바하마</option>
          <option value="BGD">방글라데시</option>
          <option value="BMD">버뮤다</option>
          <option value="BEN">베넹</option>
          <option value="VEN">베네수엘라</option>
          <option value="VNM">베트남</option>
          <option value="BEL"> 벨기에</option>
          <option value="BLR">벨로루시</option>
          <option value="BLZ">벨리즈</option>
          <option value="BIH">보스니아 헤르체고비나</option>
          <option value="BWA">보츠와나</option>
          <option value="BOL">볼리비아</option>
          <option value="BDI">부룬디</option>
          <option value="BFA">부르키나파소</option>
          <option value="BTN">부탄</option>
          <option value="MNP">북마리아나 제도</option>
          <option value="PRK">북한</option>
          <option value="BGR">불가리아</option>
          <option value="BRA">브라질</option>
          <option value="BRN">브루나이</option>
          <option value="VUT">비누아르</option>
          <option value="WSM">사모아</option>
          <option value="SAU">사우디아라비아</option>
          <option value="SMR">산마리노</option>
          <option value="STP">상투메프린시페</option>
          <option value="SPM">생피에르앤드미클롱</option>
          <option value="ESH">서사하라</option>
          <option value="SEN">세네갈</option>
          <option value="SRB">세르비아</option>
          <option value="SYC">세이셀</option>
          <option value="LCA">세인트 루시아</option>
          <option value="SHN">세인트 헬레나</option>
          <option value="SOM">소말리아</option>
          <option value="SDN">수단</option>
          <option value="SUR">수리남</option>
          <option value="LKA">스리랑카</option>
          <option value="SWZ">스와질란드</option>
          <option value="SWE">스웨덴</option>
          <option value="SWZ">스위스</option>
          <option value="ESP">스페인</option>
          <option value="SVK">슬로바키아</option>
          <option value="SVN">슬로베니아</option>
          <option value="SLE">시리아</option>
          <option value="SLE">시에라리온</option>
          <option value="SGP">싱가포르</option>
          <option value="ARE">아랍에미레이트</option>
          <option value="ABW">아루바</option>
          <option value="ARG">아르헨티나</option>
          <option value="ASM">아메리칸사모아</option>
          <option value="ISL">아이슬란드</option>
          <option value="HTI">아이티</option>
          <option value="IRL">아일랜드</option>
          <option value="AZE">아제르바이잔</option>
          <option value="AFG">아프가니스탄</option>
          <option value="AND">안도라</option>
          <option value="ALB">알바니아</option>
          <option value="DZA">알제리</option>
          <option value="AGO">앙골라</option>
          <option value="ETH">에티오피아</option>
          <option value="ERI">에리트레아</option>
          <option value="EST">에스토니아</option>
          <option value="ECU">에콰도르</option>
          <option value="SLV">엘살바도르</option>
          <option value="GBR">영국</option>
          <option value="YEM">예멘</option>
          <option value="OMN">오만</option>
          <option value="AUT">오스트리아</option>
          <option value="HND">온두라스</option>
          <option value="JOR">요르단</option>
          <option value="UGA">우간다</option>
          <option value="URY">우르과이</option>
          <option value="UZB">우즈베키스탄</option>
          <option value="UKR">우크라이나</option>
          <option value="IRQ">이라크</option>
          <option value="IRN">이란</option>
          <option value="ISR">이스라엘</option>
          <option value="EGY">이집트</option>
          <option value="ITA">이탈리아</option>
          <option value="IND">인도</option>
          <option value="IDN">인도네시아</option>
          <option value="JPN">일본</option>
          <option value="JAM">자메이카</option>
          <option value="JWE">잠바브웨</option>
          <option value="ZMB">잠비아</option>
          <option value="GEO">조지아</option>
          <option value="CHN">중국</option>
          <option value="CAF">중앙아프리카공화국</option>
          <option value="GIB">지브롤터</option>
          <option value="TCD">차드</option>
          <option value="CZE">체코</option>
          <option value="CHL">칠레</option>
          <option value="CMR">카메룬</option>
          <option value="CPV">카보베르데</option>
          <option value="KAZ">카자흐스탄</option>
          <option value="QAT">카타르</option>
          <option value="KHM">캄보디아</option>
          <option value="CAN">캐나다</option>
          <option value="KEN">케냐</option>
          <option value="COM">코모로</option>
          <option value="CRI">코스타리카</option>
          <option value="CIV">코트디부아르</option>
          <option value="COL">콜롬비아</option>
          <option value="COG">콩고</option>
          <option value="CUB">쿠바</option>
          <option value="KWT">쿠웨이트</option>
          <option value="COK">쿡 군도</option>
          <option value="HRV">크로아티아</option>
          <option value="CXR">크리스마스섬</option>
          <option value="KGZ">키르기스스탄</option>
          <option value="CYP">키프로스</option>
          <option value="TJK">타지키스탄</option>
          <option value="TZA">탄자니아</option>
          <option value="THA">태국</option>
          <option value="TUR">터키</option>
          <option value="TGO">토고 공화국</option>
          <option value="TKL">토켈라우</option>
          <option value="TON">통가</option>
          <option value="TKM">투르크메니스탄</option>
          <option value="TUV">투발루</option>
          <option value="TUN">튀니지</option>
          <option value="TTO">트리니다드토바고</option>
          <option value="PAN">파나마</option>
          <option value="PRY">파라과이</option>
          <option value="PAK">파키스탄</option>
          <option value="PNG">파푸아뉴기니</option>
          <option value="PSE">팔레스타인</option>
          <option value="FRO">페로제도</option>
          <option value="PER">페루</option>
          <option value="PRT">포르투갈</option>
          <option value="POL">폴란드</option>
          <option value="PRI">푸에르토리코</option>
          <option value="FRA">프랑스</option>
          <option value="FJI">피지</option>
          <option value="FIN">핀란드</option>
          <option value="PHL">필리핀</option>
          <option value="AUS">호주</option>
        </Select>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="family_name">승객 성</label>
        <Input
          type="text"
          name="family_name"
          id="family_name"
          vlaue={passengerInfo.family_name}
          placeholder="홍"
          focus={validatefamily_name}
          onChange={handleInput}
        />
        <span className="noticeAboutInput" hidden={!validatefamily_name}>
          공항에서 제시할 신분증 상 성과 일치해야 합니다.
        </span>
        <span className="validationHint" hidden={validatefamily_name}>
          한 글자 이상 입력해 주세요.
        </span>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="given_name">승객 이름</label>
        <Input
          type="text"
          name="given_name"
          id="given_name"
          value={passengerInfo.given_name}
          placeholder="길동"
          focus={validategiven_name}
          onChange={handleInput}
        />
        <span className="noticeAboutInput" hidden={!validategiven_name}>
          공항에서 제시할 신분증 상 이름과 일치해야 합니다.
        </span>
        <span className="validationHint" hidden={validategiven_name}>
          한 글자 이상 입력해 주세요.
        </span>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="birthday">생년월일</label>
        <Input
          type="text"
          name="birthday"
          id="birthday"
          value={passengerInfo.birthday}
          maxLength={10}
          placeholder="YYYYMMDD"
          focus={validatebirthday}
          onChange={getOnlyDate}
        />
        <span className="noticeAboutInput" hidden={!validatebirthday}>
          8자리의 숫자를 입력해 주세요.
        </span>
        <span className="validationHint" hidden={validatebirthday}>
          생년월일의 형식이 유효하지 않습니다.
        </span>
      </InputWrapper>
      <RadioWrapper>
        <RadioDiv>
          <Radio
            type="radio"
            name="sex"
            id="male"
            value="male"
            onClick={handleInput}
          />
          <Label htmlFor="male">남성</Label>
          <Radio
            type="radio"
            name="sex"
            id="female"
            value="female"
            onClick={handleInput}
          />
          <Label htmlFor="female">여성</Label>
        </RadioDiv>
      </RadioWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 30px;
  font-size: 11.5px;
`;
const P = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Select = styled.select`
  width: 250px;
  height: 40px;
  border: 1px solid ${props => props.theme.color.gray_300};
  border-radius: 4px;
  padding: 10px 12px;
  font-size: 14px;

  :hover {
    border: 1px solid #848c94;
  }

  :focus {
    border: 1px solid ${props => props.theme.color.primary_400};
    box-shadow: inset 0 0 0 1px ${props => props.theme.color.primary_400};
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: 25px 5px 5px 5px;

  span {
    padding: 5px 0px;
    font-size: 12px;
  }

  .noticeAboutInput {
    color: ${props => props.theme.color.gray_500};
  }

  .validationHint {
    color: #f77f01;
  }
`;

const RadioDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 250px;
  height: 40px;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  border: 1px solid ${props => props.theme.color.gray_300};
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;

const Radio = styled.input`
  display: none;
  &:checked + label {
    background-color: ${({ theme }) => theme.color.primary_300};
  }
`;
