import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import PageNotFound from '../Pages/404/PageNotFound';
import Categories from '../Pages/Categories/Categories';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Blogs from '../Pages/Shared/Blogs/Blogs';
import Courses from '../Pages/Shared/Courses/Courses';
import FAQ from '../Pages/Shared/FAQ/FAQ';
import TermsAndCondition from '../Pages/TermsAndCondition/TermsAndCondition';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';

export const routes =  createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        children: [
            {
                path: '/', 
                element: <Home></Home>, 
                loader : () => fetch(`https://server-sooty-five.vercel.app/courses`)
            }, 
            {
                path: '/category/:id', 
                element: <Categories></Categories>, 
                loader: ({params}) => fetch(`https://server-sooty-five.vercel.app/category/${params.id}`)
            }, 
            {
                path: '/course/:id', 
                element:<Courses></Courses>, 
                loader: ({params}) => fetch(`https://server-sooty-five.vercel.app/courses/${params.id}`)
            },
            {
                path: '/login', 
                element: <Login></Login>
            }, 
            {
                path: '/register', 
                element: <Register></Register>
            }, 
            {
                path:'/terms',
                element: <TermsAndCondition></TermsAndCondition>
            }
            , 
           {
            path: '/blogs', 
            element: <Blogs></Blogs>
           },
           {
            path: '/faq', 
            element: <FAQ></FAQ>
           },
           
        ], 
        

    },
    {
        path: '*', 
        element: <PageNotFound></PageNotFound>
       }

])
