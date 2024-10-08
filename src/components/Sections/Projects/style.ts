import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  gap: 20px;

  margin-bottom: 60px;

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width:${DEVICE_BREAKPOINTS.medium}) {
    gap: 25px;
    margin-bottom: 70px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.medium}) {  
    gap: 30px;
  }
  
  @media (min-width: ${DEVICE_BREAKPOINTS.medium}) and (max-width:${DEVICE_BREAKPOINTS.large}) {  
    margin-bottom: 70px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.large}) {  
    margin-bottom: 80px;
  }


  
`;