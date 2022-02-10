import styled from 'styled-components';

export const LoaderContainer = styled.div`
  margin: 0 auto;

  ${({ global }) =>
    global &&
    `
  position: fixed;
  bottom: 10px;
  right: 10px;
  `}
`;
