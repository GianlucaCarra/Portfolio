import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  
  padding: 20px;
  border-radius: 5px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BLACK_200};

  transition: .4s;

  > img {
    height: 330px;
    max-height: 330px;
    width: 48%;
    object-fit: cover;
    object-position: top;
    border-radius: 5px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.COLORS.HIGHLIGHT};
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none; 
    border-radius: 10px;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    border-color: transparent;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    justify-content: none;
    flex-direction: column;

    padding: 10px;
    border-radius: 5px;
    width: 100%;
    gap: 10px;

    background-color: ${({ theme }) => theme.COLORS.BLACK_200};

    transition: .4s;

    > img {
      height: 150px;
      max-height: 150px;
      width: 100%;
      object-fit: cover;
      object-position: top;
      border-radius: 5px;
    }

    &::before {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      width: 100%;
      height: 100%;
      border: 1px solid ${({ theme }) => theme.COLORS.HIGHLIGHT};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    padding: 10px;
    
    > img {
      height: 190px;
      max-height: 190px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    > img {
      height: 240px;
      max-height: 240px;
    }
  }
`;

export const Information = styled.div`
  max-width: 48%;
  width: 48%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;

  .name {
    font-size: 1.6rem;
    font-weight: 500;
  }
  
  .short {
    height: 180px;
    font-size: 1rem;
    font-weight: 300;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    gap: 15px;
    width: 100%;
    max-width: 100%;

    .name {
      font-size: .9rem;
    }

    .short {
      font-size: .6rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    gap: 15px;

    .name {
      font-size: 1.1rem;
    }
    
    .short {
      font-size: .8rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    .name {
      font-size: 1.2rem;
    }
    
    .short {
      font-size: .9rem;
    }
  }
`;

export const RMButton = styled.a`
  width: 100%;
  text-align: center;
  padding: 15px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
  transition: .4s;
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  &:hover {
    filter: brightness(.8);
    transition: .4s;
    cursor: pointer;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    padding: 10px;
    font-size: .8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    padding: 10px;
    font-size: .8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    font-size: .9rem;
  }
`;