import React from 'react';
import Navbar from '../components/Navbar/index';
import About from '../components/About/index';
import Container from '../components/Container/index';
import Footer from '../components/Footer/index';

export default function Homepage() {
    return (
            <>
            <Navbar/>
            <Container/>
            <About/>
            <Footer/>
            </>
        )
}