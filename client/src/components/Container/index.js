import React from "react";
import "./_Container.scss";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container, Typography, CssBaseline, Button } from "@material-ui/core";

const theme = createMuiTheme();
theme.typography.h1 = {
  margin: "20px",
  fontSize: "2.5rem",
  "@media (min-width:600px)": {
    fontSize: "8rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "8rem",
  },
};

const buttonTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#002884",
    },
  },
});

export default function SimpleContainer() {
  // const theme = {
  //   spacing: 0
  // }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="Container">
        <ThemeProvider theme={theme}>
          <Typography variant="h1" gutterBottom className="jumbotron">
            QUE KC CHALLENGE
            <Button href="/signup" variant="contained" className="btn">
              SIGN UP NOW!
            </Button>
          </Typography>
        </ThemeProvider>
      </Container>
    </React.Fragment>
  );
}
