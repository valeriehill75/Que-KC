import React from 'react';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';
import Name from '../components/Name/index';
import ProfileInfo from '../components/ProfileInfo/index';
import TableArea from '../components/TableArea/index';

export default function Profile () {
    return (
        <>
        <Navbar/>
        <Name/>
        <ProfileInfo/>
        <TableArea/>
        <Footer/>
        </>
    )
 }