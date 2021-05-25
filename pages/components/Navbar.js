import Head from 'next/head';
import Link from 'next/link';
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Nav className="ml-5">
       <Nav.Link href="#home">Works</Nav.Link>
      <Nav.Link href="#link">Web</Nav.Link>
      <Nav.Link href="#home">App</Nav.Link>
      <Nav.Link href="#link">Branding</Nav.Link>
      <Nav.Link href="#home">Services</Nav.Link>
      <Nav.Link href="#link">Industries</Nav.Link>
      <Button variant="outline-success">GET IN TOUCH</Button>
    </Nav>
      <div  className="menuBar ml-auto" >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
</Navbar>
    </>
  )
}
