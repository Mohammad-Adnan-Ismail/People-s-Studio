import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceId} = useParams ()
    return (
        <div className='container text-center'>
            <h1>Thank You for Booking</h1>
            <h2 className='text-danger'>{serviceId}</h2>
            <h3>Have a Nice Day</h3>
        </div>
    );
};

export default Checkout;