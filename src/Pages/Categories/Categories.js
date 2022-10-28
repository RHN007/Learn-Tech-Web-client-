import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../CourseSummaryCard/CourseSummaryCard';
import './Categories.css'

const Categories = () => {
    const categoryCourses = useLoaderData()
   
    return (
        <div className='course-design'>
           
           {
            categoryCourses.map(course => <CourseSummaryCard key={course._id} 
                                                            course = {course}
            ></CourseSummaryCard>)
           }
        </div>
    );
};

export default Categories;