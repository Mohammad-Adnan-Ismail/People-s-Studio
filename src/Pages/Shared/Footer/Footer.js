import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-black text-white'>
            <p><small>Copyright <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> {year} </small></p>
            <p>All rights reserved by Adnan Ismail</p>
        </footer>
    );
};

export default Footer;