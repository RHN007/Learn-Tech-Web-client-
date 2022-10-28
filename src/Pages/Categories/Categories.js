import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../CourseSummaryCard/CourseSummaryCard';

const Categories = () => {
    const categoryCourses = useLoaderData()
    console.log(categoryCourses)
    return (
        <div className='d-lg-flex justify-content-center'>
           
           {
            categoryCourses.map(course => <CourseSummaryCard key={course._id} 
                                                            course = {course}
            ></CourseSummaryCard>)
           }
        </div>
    );
};

export default Categories;