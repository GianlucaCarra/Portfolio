import { motion } from "framer-motion";
import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;
  display: grid;
  place-items: center;

  height: 100vh;
`;

export const Introduction = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  > h1 {
    font-size: 2.2rem;
    font-weight: 500;
    text-align: center;
  }

  > h2 {
    font-size: 1rem;
    font-weight: 200;
    text-align: center;
  }

  @media (max-width:${DEVICE_BREAKPOINTS.extraSmall}) {
 
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.small}) { 
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.medium}) {
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.large}) {
  } 
`;

export const ScrollFM = styled.div`
  position: absolute;
  bottom: 18%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-size: 1rem;

  > svg {
    margin-top: 5px;
    font-size: 1.5rem;
  }

  /* @media (max-width:${DEVICE_BREAKPOINTS.extraSmall}) {
    gap: 20px;
    margin-bottom: 40px;   
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.small}) {
    gap: 20px;
    margin-bottom: 40px;   
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    gap: 40px;
    margin-bottom: 80px;   
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.large}) {
  } */
`;