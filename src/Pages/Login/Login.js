import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    
    const [error, setError] = useState('')
    const {signIn} = useContext(AuthContext); 
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleSubmit = event => {
        event.preventDefault(); 
        const form = event.target; 
        const email = form.email.value; 
        const password = form.password.value ; 
        signIn(email, password)
        .then(result => {
            const user = result.user; 
            console.log(user)
            form.reset()
            setError('')
            navigate(from , {replace: true})
            
        })
        .catch(error => {
            console.log(error); 
            setError(error.message)
        } )
    
    }
    
    return (
        <Form onSubmit= {handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" >
            Login
        </Button>
        <ToastContainer/>
        <Form.Text className="text-danger">
           {error}
          </Form.Text>
          
        
      </Form>
      
    );
};

export default Login;