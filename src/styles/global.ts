import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  html {
    scroll-behavior: smooth;
    width: 100%;
    scroll-padding-top: 52px;
  }

  :root {
    font-size: 16px;
  }

  [data-aos="fade-up"] {
    transform: translateY(30px);
  }

  [data-aos="fade-left"] {
    transform: translateX(30px);
  }

  [data-aos="fade-right"] {
    transform: translateX(-30px);
  }

  [data-aos="fade-up"].aos-animate {
    transform: translateY(0);
  }

  [data-aos="fade-left"].aos-animate {
    transform: translateX(0);
  }

  [data-aos="fade-right"].aos-animate {
    transform: translateX(0);
  }

  body {
    height: 150dvh;
    background: linear-gradient(
      to bottom,
      #323D88 0%,
      #323D88 20%,
      
      #111111 100%
    ) no-repeat;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};

    font-family: "Lexend", sans-serif;
    color:  ${({ theme }) => theme.COLORS.WHITE};

    overflow: scroll;
    scrollbar-width: thin; 
    scrollbar-color: #888 transparent;

    #not-found {
      height: 100dvh;
      background: linear-gradient(
        to bottom,
        #323D88 0%,
        #323D88 20%,
        
        #111111 100%
      ) no-repeat;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
      position: fixed;
      top: 0;
      overflow: hidden;
    }

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent; 
    }

    &::-webkit-scrollbar-thumb {
      background-color: #888; 
      border-radius: 4px; 
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #555; 
    }
  }
`;