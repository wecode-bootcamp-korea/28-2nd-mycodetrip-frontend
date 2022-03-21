import styled from 'styled-components';

function Title({ level = 2, children, ...rest }) {
  const Component = getComponent(`h${level}`);

  return <Component {...rest}>{children}</Component>;
}
export default Title;

const getComponent = Tag => styled(Tag)`
  font-size: ${({ size }) => 0.875 + size * 0.125}rem;
  font-weight: ${({ weight }) => weight};
  text-align: ${({ align }) => align ?? 'center'};
  color: ${({ color, theme }) => (color ? theme.color[color] : '333')};
  margin-bottom: ${({ mb }) => mb}rem;
`;
