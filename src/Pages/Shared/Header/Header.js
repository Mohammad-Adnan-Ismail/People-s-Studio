import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
    }
    const useNavigation = () =>{
        navigate('/about')
    }
    // navber components
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="success" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                       <h1>People's Studio</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Packages</Nav.Link>
                            <Nav.Link href="home#review">Reviews</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                            {
                                user && <button onClick={useNavigation} className='btn text-white'>{user.displayName}</button>
                            }
                            {
                               user ?
                               <button className='btn text-white' onClick={handleSignOut}>Sign out</button>
                               : 
                                <Nav.Link eventKey={2} as={Link} to="/login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;