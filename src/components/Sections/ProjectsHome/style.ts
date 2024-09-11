import { motion } from "framer-motion";
import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;
  display: grid;
  place-items: center;

  height: 100vh;

  /* @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    
  } */
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

  /* @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    gap: 10px;

    > h1 {
      font-size: 1.5rem;
    }

    > h2 {
      font-size: .8rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    > h1 {
      font-size: 2.7rem;
    }

    > h2 {
      font-size: 1.1rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    > h1 {
      font-size: 3rem;
    }

    > h2 {
      font-size: 1.2rem;
    }
  } */
`;

export const ScrollFM = styled.div`
  position: absolute;
  bottom: 16%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-size: 1rem;

  > svg {
    margin-top: 5px;
    font-size: 1.5rem;
  }

  /* @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    font-size: .8rem;
    bottom: 20%;

    > svg {
      margin-top: 1px;
      font-size: 1.2rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    font-size: 1rem;
    bottom: 15%;
  } */
`;