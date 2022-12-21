import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../CourseSummaryCard/CourseSummaryCard';

const Home = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div className='course-design'>
            {
                courses.map(n => <CourseSummaryCard key={n._id} course={n}></CourseSummaryCard>)
            }
        </div>
    );
};

export default Home;