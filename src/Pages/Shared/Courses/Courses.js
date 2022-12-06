import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)
  const  {title, details, image_url, category_id} = courses
    return (
        <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>

      <Card ref={ref} >
        <Card.Img variant="top" className='p-5'   src={image_url}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>

          <Link to={`/category/${category_id}`}> <Button variant="primary">All Courses in category</Button></Link>
         
        </Card.Body>
      </Card>
        </div>
       
    );
};

export default Courses;