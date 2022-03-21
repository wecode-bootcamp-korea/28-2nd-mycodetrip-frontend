import styled from 'styled-components';

export const Typography = styled.span`
  display: inline-block;
  width: max-content;
  color: ${({ theme, color }) => (color ? theme.color[color] : 'inherit')};
  font-size: ${({ level }) => `${0.875 + level * 0.125}rem`};
  font-weight: ${({ bold }) => bold && 700};
`;
