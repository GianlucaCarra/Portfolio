import { motion } from "framer-motion";
import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;
  display: grid;
  place-items: center;

  height: 100vh;

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
  /* Estilos para dispositivos pequenos */
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    /* Estilos para tablets e smartphones em orientação paisagem */
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    
  }
`;

export const Introduction = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 25px;

  > h1 {
    font-size: 4rem;
    font-weight: 500;
    text-align: center;
  }

  > h2 {
    font-size: 1.3rem;
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

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
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
  }
`;