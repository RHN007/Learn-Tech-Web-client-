import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Categories from '../Pages/Categories/Categories';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import TermsAndCondition from '../Pages/TermsAndCondition/TermsAndCondition';

export const routes =  createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        children: [
            {
                path: '/', 
                element: <Home></Home>
            }, 
            {
                path: '/category/:id', 
                element: <Categories></Categories>, 
                // loader: ({params}) => fetch(`http://localhost:5001/category/${params.id}`)
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
        ]
    }
])
