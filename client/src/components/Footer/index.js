import React from 'react';
import {Container, Typography} from '@material-ui/core';
import './_Footer.scss';

function Icons() {
    return (
        <div className="socialMedia">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-instagram-square"></i>
        </div>
    )
}

export default function Footer() {
    return (
       <footer className="footer">
           <Container className="footerContainer">
               <Typography variant="h5">
                   <Icons/>
                   Copyright &copy;2020
               </Typography>
           </Container>
       </footer>
    )
}