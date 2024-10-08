import { motion } from "framer-motion";
import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;

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

    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.WHITE};
      transition: .4s;

      &:hover {
        filter: brightness(.8);
        transition: .4s;
      }
    }
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