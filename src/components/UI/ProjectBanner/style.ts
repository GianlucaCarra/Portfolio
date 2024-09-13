import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  padding: 15px;
  gap: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BLACK_200};

  transition: .4s;

  > img {
    max-height: 330px;
    height: 150px;
    width: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 5px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.COLORS.HIGHLIGHT};
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none; 
    border-radius: 10px;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    border-color: transparent;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.extraSmall}) and (max-width:${DEVICE_BREAKPOINTS.small}) {
    > img {
      height: 200px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width:${DEVICE_BREAKPOINTS.medium}) {
    > img {
      height: 300px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.medium}) {
    flex-direction: row;

    > img {
      height: 300px;
      width: 50%;
      max-width: 50%;
    }
  }
`;

export const Information = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  .name {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }
  
  .short {
    height: 110px;
    font-size: .9rem;
    font-weight: 300;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.medium}) {
    gap: 20px;
    justify-content: start;

    .name {
      text-align: left;
      font-size: 1.3rem;
    }

    .short {
      height: 160px;
      max-height: 160px;
      font-size: 1rem;
      -webkit-line-clamp: 8;
    }
  }
`;

export const RMButton = styled.a`
  width: 100%;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
  transition: .4s;
  text-decoration: none;
  font-size: .9rem;
  color: ${({ theme }) => theme.COLORS.WHITE};

  &:hover {
    filter: brightness(.8);
    transition: .4s;
    cursor: pointer;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.small}) and (max-width: ${DEVICE_BREAKPOINTS.medium}) {
    font-size: .9rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.medium}) {
    bottom: 0;
    position: absolute;

    font-size: 1rem;
  }
`;