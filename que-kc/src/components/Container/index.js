import React from 'react';
import './_Container.scss';
import {Container, Typography, CssBaseline } from '@material-ui/core';

export default function SimpleContainer() {
    const theme = {
        spacing: 0
    }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth className="Container" mx={0}>
        <Typography variant="h1" gutterBottom className="jumbotron">
            QUE KC CHALLENGE
        </Typography>
      </Container>
    </React.Fragment>
  );
}
