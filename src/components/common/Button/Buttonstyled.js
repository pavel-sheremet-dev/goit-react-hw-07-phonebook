import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 10px;
  margin-right: ${({ mr }) => (mr ? `${mr}px` : 0)};
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.mainBrandColor};
  color: ${({ theme }) => theme.colors.btnFontColor};
`;
