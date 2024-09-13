import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  max-width: 2560px;
  width: 100dvw;
  margin: 0 auto;
  padding: 0 40px;

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    padding: 0 50px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.medium}) and (max-width: ${DEVICE_BREAKPOINTS.large}) {
    padding: 0 100px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.large}) {
    padding: 0 180px;
  }
`;