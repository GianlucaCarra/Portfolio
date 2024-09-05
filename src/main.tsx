import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import AppRoutes from './router/app.routes';
import { ApolloProvider } from '@apollo/client';
import client from './services/graphql-request';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <AppRoutes />
      </ApolloProvider>
    </ThemeProvider>
  </StrictMode>
);