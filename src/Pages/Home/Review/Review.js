import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css'

const Review = ({ review }) => {
    const { name, image, comment } = review
    return (
        <div className='container g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className='review'>
                <Card className='w-100 rounded'>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {comment}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        </div>

    );
};

export default Review;