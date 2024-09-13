import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-left: -40px;
  width: calc(100% + 40px * 2);
  padding: 20px;
  gap: 15px;

  background-color: ${({ theme }) => theme.COLORS.BLACK_200};

  > h2 {
    font-size: .9rem;
    font-weight: 300;
  }

  > a {
    display: flex;
    font-size: .9rem;
    justify-content: center;                                                          
    align-items: center;
    gap: 10px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .separator {
    height: 1px;
    width: 25px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    margin-left: -50px;
    width: calc(100% + 50px * 2);
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.medium}) {
    flex-direction: row;

    .separator {
      height: 25px;
      width: 1px;
      background-color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.medium}) and (max-width: ${DEVICE_BREAKPOINTS.large}) {
    flex-direction: row;

    margin-left: -100px;
    width: calc(100% + 100px * 2);
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.large}) {
    margin-left: -180px;
    width: calc(100% + 180px * 2);
  }
`;