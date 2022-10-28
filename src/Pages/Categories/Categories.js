import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Categories = () => {
    const categoryCourses = useLoaderData()
    // console.log(categoryCourses)
    return (
        <div>
            <h2> This is category </h2>
        </div>
    );
};

export default Categories;