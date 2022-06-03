import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const reviews = [
        {
            "id": 1,
            "name": "Pritu Reza",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgwDpEX5GDXri-U3TvInMvGod0_kXtlk8_Q&usqp=CAU",
            "comment": "Very much happy to see the photographs of my wedding. Appreciate his dedication for his work."
        },
        {
            "id": 2,
            "name": "Avijit Nandy",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbu5n37Zdh5khrD0h6Kw6y_JCSm1Ws5D2RA&usqp=CAU",
            "comment": "The behaviour of this photographer is too good. He talks really gentelly and politely . Besides his work is extraordinary."
        },
        {
            "id": 3,
            "name": "Israt Amin",
            "image": "https://www.daily-sun.com/assets/archive/images/print-edition/magazine/GROOVE/06-07-2015/Ishrat-Amin3.jpg",
            "comment": "Overall evrything is good.But I like most the way he talk and the way of his work.Truely Love it and highly recommended "
        }
    ]
    return (
        <div id='review' className='container '>
            <h2 className='text-success text-center mt-5'>Clients Reviews</h2>
            <div className='row' >
                {
                    reviews.map(review => <Review
                        review={review}
                        key={review.id}
                    ></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;