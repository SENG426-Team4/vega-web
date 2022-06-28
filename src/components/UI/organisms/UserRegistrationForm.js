import {Form, Button, Row, Col} from 'react-bootstrap';
import React from 'react';

const UserRegistrationForm = (props) => {
	const [firstname, setFirstname] = React.useState('');
	const [password, setPass] = React.useState('');
	const [username, setUsername] = React.useState('');
	const [lastname, setLastname] = React.useState('');
	const [successful, setSuccessful] = React.useState(false);
	
	const handleSubmit = (event) => {
		event.preventDefault();
		props.onSubmit({
			username,
			firstname,
			password,
			lastname
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
        			<Form.Label>EMAIL</Form.Label>
        			<Form.Control type="email" value={username} onChange={(event) => setUsername(event.target.value)} />
      			</Form.Group>
      			<Form.Group className="mb-3">
        			<Form.Label>FIRSTNAME</Form.Label>
        			<Form.Control type="text" value={firstname} onChange={(event) => setFirstname(event.target.value)} />
      			</Form.Group>
				  <Form.Group className="mb-3">
        			<Form.Label>LASTNAME</Form.Label>
        			<Form.Control type="text" value={lastname} onChange={(event) => setLastname(event.target.value)} />
      			</Form.Group>
				  <Form.Group className="mb-3">
        			<Form.Label>PASSWORD</Form.Label>
        			<Form.Control type="password" value={password} onChange={(event) => setPass(event.target.value)} />
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