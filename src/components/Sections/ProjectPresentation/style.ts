import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 150px;

  gap: 40px;

  > img {
    width: 90%;
    height: 40vw;

    border-radius: 10px;

    object-fit: cover;
    object-position: top;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    /* Estilos para dispositivos pequenos */
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    /* Estilos para tablets e smartphones em orientação paisagem */
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
  /* Estilos para dispositivos pequenos */
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    /* Estilos para tablets e smartphones em orientação paisagem */
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  > h2 {
    font-size: 1.5rem;
    font-weight: 300;
  }

  > p {
    font-size: 1.3rem;
    font-weight: 200;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
  /* Estilos para dispositivos pequenos */
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    /* Estilos para tablets e smartphones em orientação paisagem */
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  
  > h2 {
    font-size: 1.5rem;
    font-weight: 300;
  }

  .links-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
  /* Estilos para dispositivos pequenos */
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    /* Estilos para tablets e smartphones em orientação paisagem */
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    
  }
`;