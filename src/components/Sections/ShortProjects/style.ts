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

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width:${DEVICE_BREAKPOINTS.medium}) {
    gap: 40px;
    margin-bottom: 70px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.medium}) and (max-width:${DEVICE_BREAKPOINTS.large}) {  
    gap: 50px;
    margin-bottom: 70px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.large}) {  
    gap: 50px;
    margin-bottom: 80px;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;

  @media (min-width:${DEVICE_BREAKPOINTS.extraSmall}) and (max-width:${DEVICE_BREAKPOINTS.small}) {
    font-size: 1.6rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width:${DEVICE_BREAKPOINTS.medium}) {
    font-size: 1.8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.medium}) {  
    font-size: 2rem;
  }
`;

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  gap: 20px;

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width:${DEVICE_BREAKPOINTS.small}) {
    gap: 20px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width:${DEVICE_BREAKPOINTS.medium}) {
    gap: 25px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.medium}) {  
    gap: 30px;
  }
`;