import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.a`
  display: flex;
  align-items: center;

  gap: 15px;

  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  .text {
    display: flex;
    flex-direction: column;
    gap: 5px;

    transition: .2s;
  }

  .dot {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
  }

  &:hover {
    .text {
      cursor: pointer;
      filter: brightness(.8);
      transition: .2s;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    font-size: .8rem;
    padding: 10px;
    gap: 10px;

    > svg {
      font-size: 1.3rem;
    }  
    
    &:hover {
      transform: translateY(-2px) !important;
    }

    &::before {
      top: -2px;
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.HIGHLIGHT};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    font-size: .9rem;
    padding: 15px;

    > svg {
      font-size: 1rem;
    }  
    
    &:hover {
      transform: translateY(-2px) !important;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    font-size: 1.1rem;
    padding: 20px;

    > svg {
      font-size: 1rem;
    }
  }
`;