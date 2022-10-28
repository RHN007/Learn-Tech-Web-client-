import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseSummaryCard = ({ course }) => {
    const { _id, image_url, rating, title } = course
    return (

        <Card style={{ width: '18rem' }} className="mt-3  ">
            <Card.Img variant="top" src={image_url} className="p-4"/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                 Rating:   {rating.number} 
                 <br /> <small>Content:  {rating.badge}</small> 
                </Card.Text>
                <Button variant="primary">Buy This Course</Button>
            </Card.Body>
        </Card>

    );
};

export default CourseSummaryCard;