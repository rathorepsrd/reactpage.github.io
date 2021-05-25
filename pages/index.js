import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  {/* <Navbar.Collapse id="basic-navbar-nav"> */}
    <Nav className="ml-10">
      <Nav.Link href="#home">Works</Nav.Link>
      <Nav.Link href="#link">Web</Nav.Link>
      <Nav.Link href="#home">App</Nav.Link>
      <Nav.Link href="#link">Branding</Nav.Link>
      <Nav.Link href="#home">Services</Nav.Link>
      <Nav.Link href="#link">Industries</Nav.Link>
      <Button variant="outline-success">GET IN TOUCH</Button>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    {/* <Form inline className="ml-auto">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
      <div inline class="container ml-0" >
        <div class="bar1">h</div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
  {/* </Navbar.Collapse> */}
</Navbar>
    </>
  )
}
