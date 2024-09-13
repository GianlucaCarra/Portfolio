import styled from "styled-components";

export const Container = styled.a`
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-decoration: none;
  transition: .4s;

  font-size: 1rem;
  font-weight: 200;

  &:hover {
    filter: brightness(.8);
    transform: scale(1.1);
    transition: .4s;
  }
`;