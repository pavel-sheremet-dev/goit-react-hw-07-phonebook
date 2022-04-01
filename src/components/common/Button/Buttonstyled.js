import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.mainBrandColor};
  color: ${({ theme }) => theme.colors.btnFontColor};
  transition: background-color 200ms linear;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.btnHoverBackground};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
  }
`;
