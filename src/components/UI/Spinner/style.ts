import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.a`
  display: grid;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  place-items: center;
  background-color: black;
  z-index: 10;

  .spinner {
    width: 60px;
    height: 60px;
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db; 
    border-radius: 50%; 
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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