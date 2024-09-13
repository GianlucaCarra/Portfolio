import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;

  gap: 30px;

  > img {
    width: 90%;
    height: 40vw;

    border-radius: 10px;

    object-fit: cover;
    object-position: top;
  }

  @media (min-width:${DEVICE_BREAKPOINTS.medium}) {
    margin: 65px 0;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;

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

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  > h2 {
    font-size: 1.1rem;
    font-weight: 400;
  }

  > p {
    font-size: 1rem;
    font-weight: 200;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  
  > h2 {
    font-size: 1.1rem;
    font-weight: 400;
  }

  .links-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;