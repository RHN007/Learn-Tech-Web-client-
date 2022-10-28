import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData()
  const  {title, details, image_url, category_id} = courses
    return (
        <Card >
        <Card.Img variant="top" className='p-5'   src={image_url}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>

          <Link to={`/category/${category_id}`}> <Button variant="primary">All Courses in category</Button></Link>
         
        </Card.Body>
      </Card>
    );
};

export default Courses;