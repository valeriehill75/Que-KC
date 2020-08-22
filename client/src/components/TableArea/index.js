import React from 'react';
import { Grid } from '@material-ui/core';
import Unrated from '../Unrated/Unrated';
import Rated from '../Rated/Rated.js';
import { Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './TableArea.scss';

const theme = createMuiTheme();
theme.typography.h4 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '2rem',
    },
};

export default function TableArea() {
    return (
        <Grid container spacing={4} className="grid">
            <Grid item xs={12} md={6}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h4" className="gridHeaders">Visit and Rate these BBQ Restaurants!</Typography>
                </ThemeProvider>
                <Unrated />
            </Grid>
            <Grid item xs={12} md={6}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h4" className="gridHeaders" >Restaurants you've been to!</Typography>
                </ThemeProvider>
                <Rated />
            </Grid>
        </Grid>
    )
}