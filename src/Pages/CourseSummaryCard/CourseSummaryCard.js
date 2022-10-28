import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

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
                <Link variant="primary" to={`/course/${_id}`}>Details of Course</Link>
            </Card.Body>
        </Card>

    );
};

export default CourseSummaryCard;