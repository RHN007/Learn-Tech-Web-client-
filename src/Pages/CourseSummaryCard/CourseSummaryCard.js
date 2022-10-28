import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseSummaryCard = ({ course }) => {
    const { _id, image_url, rating, title, details } = course
    return (
<div>
    

      <Card style={{ width: '18rem' }} className="mt-3" >
            <Card.Img variant="top" src={image_url} className="p-4"/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                 Rating:   {rating.number} 
                 <br /> <small>Content:  {rating.badge}
                 </small> 
                 {details.length > 200 ? <p>{details.slice(0, 250) + '......'} <Link to={`/course/${_id}`}>Read More</Link> </p> :
                        <p>{details}</p>}
                </Card.Text>
              
            </Card.Body>
        </Card>
</div>
      

    );
};

export default CourseSummaryCard;