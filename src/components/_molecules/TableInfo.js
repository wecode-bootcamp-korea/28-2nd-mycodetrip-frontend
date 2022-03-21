import { VStack, Typography } from '../_atom';

export const TableInfo = ({ cityCode, cityName, date }) => {
  return (
    <VStack gutter={2} align="center">
      <Typography level={8} bold>
        {cityCode}
      </Typography>
      <Typography bold>{cityName}</Typography>
      <Typography level={4}>{date}</Typography>
    </VStack>
  );
};
