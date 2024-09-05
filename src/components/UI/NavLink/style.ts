import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

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

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
  /* Estilos para dispositivos pequenos */
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    font-size: .8rem;
  }
`;