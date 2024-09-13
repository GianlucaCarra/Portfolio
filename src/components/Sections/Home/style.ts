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

  @media (min-width:${DEVICE_BREAKPOINTS.extraSmall}) and (max-width:${DEVICE_BREAKPOINTS.medium}) {
    > h1 {
      font-size: 2.7rem;
    }

    > h2 {
      font-size: 1.2rem;
    }
  }

  @media (min-width:${DEVICE_BREAKPOINTS.medium}) and (max-width:${DEVICE_BREAKPOINTS.large}) { 
    > h1 {
      font-size: 3rem;
    }

    > h2 {
      font-size: 1.5rem;
    }
  }

  @media (min-width:${DEVICE_BREAKPOINTS.large}) and (max-width:${DEVICE_BREAKPOINTS.extraLarge}) {
    > h1 {
      font-size: 3.8rem;
    }

    > h2 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraLarge}) {
    > h1 {
      font-size: 4rem;
    }

    > h2 {
      font-size: 1.5rem;
    }
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

  @media (min-width:${DEVICE_BREAKPOINTS.extraSmall}) and (max-width:${DEVICE_BREAKPOINTS.small}) {
    font-size: 1.2rem;

    > svg {
      margin-top: 7px;
      font-size: 1.6rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width:${DEVICE_BREAKPOINTS.medium}) {
    font-size: 1.2rem;

    > svg {
      margin-top: 7px;
      font-size: 1.7rem;
    } 
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.medium}) and (max-width:${DEVICE_BREAKPOINTS.large}) {
    font-size: 1.2rem;

    > svg {
      margin-top: 7px;
      font-size: 1.9rem;
    }   
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.large}) {
    bottom: 10%;
    font-size: 1.3rem;

    > svg {
      margin-top: 7px;
      font-size: 1.9rem;
    }   
  }
`;