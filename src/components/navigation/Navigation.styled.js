import styled from 'styled-components';

export const NavigationStyled = styled.nav`
  & .nav-list {
    display: flex;
  }

  & .nav-item:not(:last-child) {
    margin-right: 20px;
  }

  & .nav-link {
    padding: 20px 0;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.fontColor};
    font-weight: 700;
    font-size: 20px;
    transition: color 250ms linear;

    &:hover,
    &:focus,
    &.active {
      color: ${({ theme }) => theme.colors.mainBrandColor};
    }
  }
`;
