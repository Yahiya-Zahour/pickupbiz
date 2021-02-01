import React from 'react';
import { Jumbotron,Navbar,Nav,Form,FormControl,Button,Image } from 'react-bootstrap';

import "./MainHeader.css"

export const  MainHeader = () => {
    return (
        <div>
            <Jumbotron>
             <marquee behavior="alternate" direction=""scrollamount="800000%"><h1>PickupBiz</h1></marquee>   
            <Navbar bg="dark" variant="dark" className="main-header--position">
    <Navbar.Brand href="#home"><Image src="Assets/PickupBiz.jpg"className="main-header--image"/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button className="button" variant="outline-info">Search</Button>
    </Form>
  </Navbar>
            </Jumbotron>
            
        </div>
    );
}