import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 16px;

  backdrop-filter: blur(10px);
  display: none;


  @media (min-width:${DEVICE_BREAKPOINTS.medium}) {
    display: flex;
  }
`;

export const Navigation = styled.nav`
  display: flex;

  gap: 25px;
`;