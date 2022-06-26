import {Form, Button, Row, Col} from 'react-bootstrap';
import React from 'react';

const UserRegistrationForm = (props) => {
	const [name, setName] = React.useState('');
	const [password, setPass] = React.useState('');
	const [username, setEmail] = React.useState('');
	const [message, setMessage] = React.useState('');
	const [successful, setSuccessful] = React.useState(false);
	
	const handleSubmit = (event) => {
		event.preventDefault();
		props.onSubmit({
			username,
			name,
			password,
			message
		}).then(() => {
			setSuccessful(true)
		})
	}

	return (
		<Row>
      <Col className="mx-auto" xs={6}>
		{successful && (
			<h6 style={{ color: '#00FF00' }}>User created successfully!</h6>
		)}
        <Form onSubmit={handleSubmit}>
      			<Form.Group className="mb-3">
        			<Form.Label>NAME</Form.Label>
        			<Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} />
      			</Form.Group>
				  <Form.Group className="mb-3">
        			<Form.Label>PASSWORD</Form.Label>
        			<Form.Control type="password" value={password} onChange={(event) => setPass(event.target.value)} />
      			</Form.Group>
      			<Form.Group className="mb-3">
        			<Form.Label>EMAIL</Form.Label>
        			<Form.Control type="email" value={username} onChange={(event) => setEmail(event.target.value)} />
      			</Form.Group>
      			<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        			<Form.Label>MESSAGE</Form.Label>
        			<Form.Control as="textarea" rows={3} value={message} onChange={(event) => setMessage(event.target.value)}/>
      			</Form.Group>
      			<Button variant="primary" type="submit">
        			Submit
      			</Button>
    		</Form>
      </Col>
    </Row>
		);
}
export default UserRegistrationForm;