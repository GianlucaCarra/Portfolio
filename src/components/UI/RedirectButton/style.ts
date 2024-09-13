import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  justify-content: start;
  align-items: center;

  gap: 15px;
  padding: 20px;
  border-radius: 10px;
  width: 100%;

  font-size: 1.1rem;
  font-weight: 300;

  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  background-color: ${({ theme }) => theme.COLORS.BLACK_200};

  svg {
    font-size: 1.4rem;
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
    transform: translateY(-3px) !important;
    cursor: pointer;
  }
`;