import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: .9rem;
  font-weight: 300;

  div.line {
    background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
    height: 1px;
    width: 5px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) {
    font-size: 1rem;

    div.line {
      height: 2px;
      width: 8px;
    }
  }
`;