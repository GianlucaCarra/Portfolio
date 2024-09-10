import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  gap: 30px;

  margin-bottom: 60px;

  /* @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    gap: 20px;
    margin-bottom: 40px;   
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    margin-bottom: 60px;   
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    margin-bottom: 80px;
  } */
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;

  /* @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    font-size: .9rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    font-size: 1.2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    font-size: 1.4rem;
  } */
`;

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  gap: 20px;

  /* @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    gap: 15px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    gap: 15px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    gap: 30px;
  } */
`;