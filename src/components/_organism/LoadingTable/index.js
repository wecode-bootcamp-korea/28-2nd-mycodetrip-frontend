import styled from 'styled-components';
import { Title, Typography, Flex } from '../../_atom';
import { TableInfo } from '../../_molecules';

// constant
import * as Q from '../../../constant/baseKeys';
import { DEPARTURE, ARRIVAL } from '../../../constant/baseQuery';

export const LoadingTable = ({ getFilteredParams }) => {
  const departure = getFilteredParams(DEPARTURE);
  const arrival = getFilteredParams(ARRIVAL);

  return (
    <Container>
      <Title>제주에서 여수까지</Title>
      <Title>왕복 항공권을 찾고 있습니다.</Title>
      <TableWrapper justify="space-around" marginBlock={2}>
        <TableInfo
          cityCode={departure[Q.DEPARTURE_CITY_CODE]}
          cityName={departure[Q.DEPARTURE_CITY]}
          date={departure[Q.DEPARTURE_DATE]}
        />
        <TableInfo
          cityCode={arrival[Q.ARRIVAL_CITY_CODE]}
          cityName={arrival[Q.ARRIVAL_CITY]}
          date={arrival[Q.ARRIVAL_DATE]}
        />
      </TableWrapper>
      <Typography level={3}>마이코드트립 항공권 구매자를 위한</Typography>
      <br />
      <Typography level={3}>
        렌터가 특별 혜택! 진짜 최저가로 예약하세요!{' '}
      </Typography>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  inset: 10% 30%;
  z-index: 10;

  animation: ${({ theme }) => theme.animation.fadeOut} forwards 10ms ease-out;
  animation-delay: var(--loading-cell-fadeout);
`;

const TableWrapper = styled(Flex)`
  margin: 0.75em;
  padding-block: 1.25em;
  border-block: 1px solid ${({ theme }) => theme.color.gray_500};
`;
