import styled from "styled-components";

export const Container = styled.a`
  display: grid;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  place-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
  z-index: 10;
`;