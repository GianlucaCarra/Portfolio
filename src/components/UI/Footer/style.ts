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

  /* @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    padding: 10px;
    margin-left: -20px;
    width: calc(100% + 40px);

    flex-direction: column;

    > h2 {
      font-size: .6rem;
    }

    > a {
      font-size: .6rem;

      > svg {
        font-size: 1rem;
      }
    }  

    .separator {
      height: 1px;
      width: 10%;
      background-color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    padding: 10px;
    margin-left: -80px;
    width: calc(100% + 160px);

    > h2 {
      font-size: .9rem;
    }

    > a {
      font-size: .9rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    padding: 10px;
    margin-left: -110px;
    width: calc(100% + 220px);

    > h2 {
      font-size: 1.1rem;
    }
  } */
`;