import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from 'react-icons/fa'
import ListGroup from 'react-bootstrap/ListGroup';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';


const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext); 
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user; 
            navigate(from , {replace: true})
        })
        .catch(error => console.error('error', error))
    }

    const handleGitHubProvider = () => {
        providerLogin(gitHubProvider)
        .then(result => {
            const user = result.user; 
            console.log(user)
            navigate(from , {replace: true})
        })
        .catch(error => console.error('error', error))
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle>  Login with Google</Button>
                <Button onClick={handleGitHubProvider} variant="outline-dark"> <FaGithub></FaGithub> Login with GitHub</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on </h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitter></FaTwitter>  Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                   
                </ListGroup>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default RightSideNav;