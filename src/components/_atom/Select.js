import styled from 'styled-components';

const OPTIONS = [
  '가격 낮은순',
  '가격 높은순',
  '출발 시간 느린 순',
  '출발 시간 빠른 순',
];

export const Select = ({ updateParams }) => {
  return (
    <SelectStyle onChange={e => updateParams({ sort: e.target.value })}>
      {OPTIONS.map((option, idx) => (
        <option value={option} key={idx}>
          {option}
        </option>
      ))}
    </SelectStyle>
  );
};

const SelectStyle = styled.select`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.white};
`;
