import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.a`
  color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
  text-decoration: none;
  font-weight: 200;
  width: fit-content;
  font-size: .9rem;

  /* @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    font-size: .8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    font-size: .9rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {

  } */
`;