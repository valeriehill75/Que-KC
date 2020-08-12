import React from 'react';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';
import {Typography} from '@material-ui/core';


export default function PageNotFound () {
    return (
        <>
        <Navbar/>
        <Typography variant="h1">
            Page Not Found
        </Typography>
        <Footer/>
        </>
    )
}