import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 1.1rem;
  font-weight: 300;

  div.line {
    background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
    height: 2px;
    width: 8px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    font-size: .7rem;
    gap: 5px;

    div.line {
      height: 1px;
      width: 5px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    font-size: .9rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    font-size: 1rem;
  }
`;