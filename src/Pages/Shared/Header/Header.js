import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Logo/logo.jpg'
import { FaUser } from 'react-icons/fa';


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
         <Link to='/'><img src={logo} width={200} className="rounded" alt="" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className='text-decoration-none text-white me-3 ' >Courses</Link>
            <Link className='text-decoration-none text-white me-3 ' >FAQ</Link>
            <Link to='/blogs' className='text-decoration-none text-white me-3 ' >Blogs</Link>
           
          </Nav>
          <Nav>
          <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? 
              <Image style={{height: '40px'}} roundedCircle src={user?.photoURL}></Image> 
              : <FaUser></FaUser>  }
            </Nav.Link>
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