import React from 'react';
import { Grid } from '@material-ui/core';
import Unrated from '../Unrated/Unrated';
import Rated from '../Rated/Rated.js';
import './TableArea.scss';

export default function TableArea() {

    
    return (
        <Grid container spacing={4} className="grid">
            <Grid item xs={12} md={6}>
               <Unrated/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Rated/>
            </Grid>
        </Grid>
    )
}