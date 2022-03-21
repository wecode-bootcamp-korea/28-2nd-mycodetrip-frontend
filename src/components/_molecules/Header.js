import { Flex, VStack, Select, Title } from '../_atom';

export const FlightHeader = ({ count }) => {
  return (
    <Flex justify="space-between" mb={1}>
      <VStack>
        <Title align="left" mb={0.25} size={2} weight="500">
          검색 결과 총 {count} 개
        </Title>
        <Title level={4} color="gray_800" size={1} weight="400">
          성인 1인 기준 편도 요금입니다. (세금 및 수수료 포함)
        </Title>
      </VStack>
      <Select />
    </Flex>
  );
};
