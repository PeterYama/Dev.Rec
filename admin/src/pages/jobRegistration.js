import React, { Component } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

export default class jobRegistration extends Component {
    render() {
        return (
            <Container className="jobRegistrationProfile">
                <form>
                    <Form.Group controlId="">
                        <Form.Label>I am looking for</Form.Label>
                        <Form.Control placeholder="example: Web Developer / JavaScript Developer" />
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Type of Developer</Form.Label>
                        <Form.Control as="select">
                            <option>Frontend</option>
                            <option>Backend</option>
                            <option>Full-Stack</option>
                        </Form.Control>
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </form>
            </Container>
        )
    }
}
