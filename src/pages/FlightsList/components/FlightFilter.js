import { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { BsCheckLg } from 'react-icons/bs';

const FlightFilter = props => {
  const { searchParams, filters, toggleQueryString } = props;
  const { type, title, data } = filters;
  const [isFilterShown, setIsFilterShown] = useState(true);

  const checkCurrIDIncluded = id => {
    const filter = searchParams.toString();
    return filter.includes(`${type}=&`) || filter.includes(`${type}=${id}`);
  };

  return (
    <Container>
      <Header isFilterShown={isFilterShown}>
        <h2>{title}</h2>
        <IoIosArrowDown
          size={20}
          onClick={() => setIsFilterShown(prevShown => !prevShown)}
        />
      </Header>
      <List>
        {isFilterShown &&
          data?.map(({ id, name }) => (
            <ListItem key={id}>
              <Input
                id={`title${name}`}
                type="checkbox"
                name={name}
                checked={checkCurrIDIncluded(`${id}`)}
                onChange={e => toggleQueryString(data, type, `${id}`)}
              />
              <BsCheckLg />
              <Label htmlFor={`title${name}`}>{name}</Label>
            </ListItem>
          ))}
      </List>
    </Container>
  );
};

export default FlightFilter;

const Container = styled.section`
  ${({ theme }) => theme.columnFlex};
  gap: 1.25em;
  height: fit-content;
  border-top: 1px solid ${({ theme }) => theme.color.gray_300};

  & + & {
    margin-top: 1.75rem;
  }
`;

const Header = styled.header`
  ${({ theme }) => theme.flex};
  justify-content: space-between;
  padding-top: 1em;

  h2 {
    font-size: 1rem;
    font-weight: 500;
  }

  svg {
    cursor: pointer;
    transform: rotate(${({ isFilterShown }) => isFilterShown && '.5turn'});
    transition: all 0.5 ease-in;
  }
`;

const List = styled.ul`
  ${({ theme }) => theme.columnFlex};
  gap: 1.25em;
`;

const ListItem = styled.li`
  position: relative;
  ${({ theme }) => theme.flex};
  justify-content: space-around;
  cursor: pointer;

  svg {
    position: absolute;
    left: 0.125em;
    color: ${({ theme }) => theme.color.white};
    z-index: 1;
  }
`;

const Input = styled.input`
  display: none;

  &:not(:checked) ~ svg {
    opacity: 0;
  }

  &:not(:checked) ~ label::before {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.color.gray_800};
  }
`;

const Label = styled.label`
  position: relative;
  width: 100%;
  padding-left: 2em;
  text-align: left;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 20px;
    aspect-ratio: 1;
    border-radius: 0.25em;
    background-color: ${({ theme }) => theme.color.primary_400};
  }
`;
