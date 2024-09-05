import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 75px;

  margin-bottom: 150px;

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    gap: 20px;
    margin-bottom: 40px;   
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    gap: 40px;
    margin-bottom: 80px;   
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    gap: 60px;
    margin-bottom: 120px; 
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    font-size: .9rem;

  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    font-size: 1.2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    font-size: 1.4rem;
  }
`;

export const Introduction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  > img {
    height: 400px;
    width: 400px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid ${({ theme }) => theme.COLORS.HIGHLIGHT};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    flex-direction: column;
    justify-content: none;
    gap: 20px;

    > img {
      height: 200px;
      width: 200px;
      border: 2px solid ${({ theme }) => theme.COLORS.HIGHLIGHT};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    > img {
      height: 220px;
      width: 220px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    > img {
      height: 300px;
      width: 300px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;

  gap: 40px;

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    gap: 15px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    gap: 15px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    gap: 30px;
  }
`;