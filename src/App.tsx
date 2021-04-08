import { Container, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import RouteGrid from './components/RouteGrid';
import theme from './theme';

export default function App() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
          <Container>
            <RouteGrid/>
          </Container>
      </MuiThemeProvider>
  );
}