import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: end;
  
  padding: 15px;
  border-radius: 10px;
  max-width: 250px;
  max-height: 250px;
  height: 350px;
  width: 350px;
  margin-bottom: 40px;

  background-color: ${({ theme }) => theme.COLORS.BLACK_200};

  transition: transform 0.4s ease;

  > img {
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    height: 80px;
    width: 80px;
    object-fit: cover;
    object-position: center;
  }

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 3px solid ${({ theme }) => theme.COLORS.HIGHLIGHT};
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none; 
    border-radius: 10px;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-10px) !important;
    cursor: pointer;
  }

  /* @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    max-width: 200px;
    max-height: 200px;
    margin-bottom: 15px;

    > img {
      height: 50px;
      width: 50px;
    }  

    &:hover {
      transform: translateY(-5px) !important;
    } 
  }

  /* @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    max-width: 160px;
    max-height: 160px;
    margin-bottom: 20px;

    > img {
      height: 50px;
      width: 50px;
    }  

    &:hover {
      transform: translateY(-5px) !important;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    max-width: 230px;
    max-height: 230px;
    margin-bottom: 25px;

    > img {
      height: 60px;
      width: 60px;
    }
  } */
`;

export const Information = styled.div`
  max-width: 100%;
  width: 100%;
  height: 75%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  .name {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }
  
  .short {
    max-height: 200px;
    font-size: .9rem;
    font-weight: 300;
    word-wrap: break-word;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* @media (max-width: ${DEVICE_BREAKPOINTS.extraSmall}) {
    gap: 5px;
    height: 80%;

    .name {
      font-size: .8rem;
    }

    .short {
      font-size: .7rem;
    }
  } */

  /* @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width: ${DEVICE_BREAKPOINTS.small}) {
    gap: 5px;

    .name {
      font-size: .8rem;
    }
    
    .short {
      font-size: .7rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    gap: 10px;

    .name {
      font-size: 1.1rem;
    }
    
    .short {
      font-size: .9rem;
    }
  } */
`;