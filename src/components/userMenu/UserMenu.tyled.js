import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: baseline;

  & .name {
    font-size: 20px;
    margin-right: 10px;
    font-weight: 700;
  }

  & .name::first-letter {
    text-transform: uppercase;
  }
`;
