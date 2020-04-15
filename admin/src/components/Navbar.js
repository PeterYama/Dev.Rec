import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Link, NavL } from 'react-bootstrap';
import React from 'react'

export default function Navigation() {
    return (
            <div className="NavStyle">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Dev-Rec</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/loginForm">Login</Nav.Link>
                            <Nav.Link href="/jobRegistration">Job Registration</Nav.Link>
                            <Nav.Link href="/userList">User List</Nav.Link>
                            <Nav.Link href="/userProfile">User Profile</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container className="ContainerStyle">
                    <Row>
                        <Col>
                            <Form >
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            </Form>
                        </Col>
                        <div className="SearchButton">
                            <Button variant="outline-success">Search</Button>
                        </div>
                    </Row>
                </Container>
            </div>
    )
}
