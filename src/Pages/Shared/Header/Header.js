import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Logo/logo.jpg'


const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleSignOut = () => {
      logOut()
      .then(()=> {})
      .catch(error => {})
  }

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >
         <Link to='/'><img src={logo} width={256} className="rounded" alt="" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >Courses</Nav.Link>
            <Nav.Link>FAQ</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Blog</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {
                user?.uid? 
                <>
                  <span>{user?.displayName}</span>
                  <Button variant="light" onClick={handleSignOut}>Log Out</Button>
                
                </>: 
                <>
                  <Link to='/login' className='text-white text-decoration-none '>Login</Link> /
                  <Link to='/register' className='text-white text-decoration-none '>Register</Link>
                </>
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;