import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

// functions for every packages

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate()

    const handleNavigateToService = id =>{
        navigate(`/checkout/${name}`)
    }
    // individual package
    return (
        <div className='service p-5'>
            <img className='w-100' src={img} alt="" />
            <h2 className='text-danger'>{name}</h2>
            <p>Price: ৳{price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>handleNavigateToService(id)} className='btn btn-success'>Book: {name}</button>
        </div>
    );
};

export default Service;