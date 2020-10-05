import React, { useContext } from 'react';
import { Button, Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/Group 1329.png'
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <>
            <Container>
                <Navbar className="navbar-light" style={{paddingTop:'44px'}}>
                    <Link to="/">
                    <img 
                        src={logo}
                        width="202"
                        height="60"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"/>
                    </Link>
                    <Nav className="ml-auto nav">
                        <Link to="/">Home</Link>
                        <Link to="/donation">Donation</Link>
                        <Link to="/event">Event</Link>
                        <Link to="/blog">Blog</Link>
                         
                        
                        {
                        loggedInUser.email
                            ?<DropdownButton variant="dark" title={loggedInUser.name}>
                                <Dropdown.Item variant="light" onClick={()=> setLoggedInUser({})} style={{height:'40px'}}> Log out</Dropdown.Item>
                            </DropdownButton>
                            :<>
                            <Link to="/login">
                                <Button variant="primary">Register</Button></Link>
                            <Link to="/registerList">
                                <Button variant="dark">Admin</Button></Link>
                            </>
                        }
                    </Nav>
                </Navbar>
            </Container>
        </>
    );
};

export default Header;