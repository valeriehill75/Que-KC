import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const theme = createMuiTheme();
theme.typography.h1 = {
    margin: "20px",
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
};
theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};




export default function ProfileInfo() {
    return (

        <ThemeProvider theme={theme}>
            <Typography variant="h1" align="center" >User's Name</Typography>
            {/* pass in right table length into number of restaurants visited */}
            <Typography variant="h3" align="center" >Number of restaurants visited: </Typography>
        </ThemeProvider>

    )
}