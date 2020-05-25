import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css';
import { Button, Navbar, Container, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import NewPostModal from './modalNewPost';
import { useState } from 'react';



function NavigationBar(props) {


    const [showModal, updateModal] = useState(false);


    let openModal = () => {
        updateModal(true);
    }

    let closeModal = () => {
        updateModal(false);
    }

    const handleChange = (event) => {
        console.log(event.target.value);
    }
    
    return (
        
<div>
        <Navbar collapseOnSelect fixed='top' expand='md'  className='navigationPanel'>
            <Container className='navContainer'>
                <Navbar.Brand href="/home">
                    <h1 className='logo'>Bloom</h1>
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls='responsive-navbar-nav' onChange={handleChange} /> */}
                <Navbar.Collapse id='responsive-navbar-nav' > 
                    <Nav className='mr-bloom'>
                        <div className='buttonsBar'>
                            <NavLink to='/home'>  
                                <p>
                                    Home
                                </p> 
                            </NavLink>
                        </div>

                        <div className='buttonsBar'>
                            <NavLink to='/profile'>
                                <p>
                                    Profile
                                </p> 
                            </NavLink>
                        </div>
                        <div className='buttonsBar'> 
                            <NavLink to='/saved'>
                                <p>
                                    Saved
                                </p> 
                               </NavLink>
                        </div>
                        <div className='buttonsBar'> 
                            <NavLink to='/chats'>
                                <p>
                                    Chats
                                </p> 
                            </NavLink>
                        </div>
                    </Nav>
                      <Button
                       variant="outline-success"
                       onClick={  openModal }
                       >New Post</Button>
                        <NewPostModal showModal={showModal} closeModal={closeModal} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
</div>
    );
}

export default NavigationBar;