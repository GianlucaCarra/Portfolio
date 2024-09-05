import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  max-width: 2560px;
  width: 100dvw;
  max-height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 170px;

  @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    padding: 0 20px;  
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    padding: 0 80px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    padding: 0 110px;
  }
`;