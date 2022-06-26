import { Form, Button, Row, Col } from 'react-bootstrap';
const ContactUsForm = (props) => {
    return (
        <Row>
            <Col className="ml-auto" xs={6} sm={7} md={8} lg={8}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>NAME</Form.Label>
                        <Form.Control required type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control required type="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>MESSAGE</Form.Label>
                        <Form.Control required as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}
export default ContactUsForm;