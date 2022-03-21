import styled from 'styled-components';
import { BsCheckLg } from 'react-icons/bs';
import { Input, Label, Typography } from '../_atom';

function FilterItem({ content, optionKey, id, toggleOption, searchParams }) {
  // check조건: optionKey: optionKey가 params에 없거나 key=id 쌍이 존재하는 경우
  const checked =
    !searchParams?.has(optionKey) ||
    searchParams?.getAll(optionKey).includes(`${id}`);

  return (
    <Container>
      <Input
        type="checkbox"
        checked={checked}
        id={`${optionKey}${id}`}
        onChange={() => toggleOption(`${id}`)}
      />
      <Label htmlFor={`${optionKey}${id}`}>
        <BsCheckLg />
        <Typography level={2}>{content}</Typography>
      </Label>
    </Container>
  );
}
export default FilterItem;

const Container = styled.li`
  position: relative;
  width: fit-content;
  margin-block: 1em;
  cursor: pointer;
`;
