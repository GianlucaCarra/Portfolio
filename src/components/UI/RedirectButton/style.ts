import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.a`
  display: flex;
  justify-content: start;
  align-items: center;

  gap: 15px;
  padding: 25px;
  border-radius: 10px;
  width: 100%;

  font-size: 1.2rem;
  font-weight: 300;

  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  background-color: ${({ theme }) => theme.COLORS.BLACK_200};

  svg {
    font-size: 2rem;
  } 
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 5px solid ${({ theme }) => theme.COLORS.HIGHLIGHT};
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none; 
    border-radius: 10px;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-5px) !important;
    cursor: pointer;
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