import {Form, Button, Row, Col} from 'react-bootstrap';
import React, { useState } from 'react';

const LoginUser = (props) => {
	
	const [username, setUsername]  = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState();

	const submitForm = (evt) => {
		evt.preventDefault();
		props.onSubmit({
			username,
			password
		}).catch(err => {
			setError(err)
		})
	}

	return (
		<Row>
      		<Col className="mx-auto" xs={6}>
        		<Form onSubmit={submitForm}>
	      			<Form.Group className="mb-3">
	        			<Form.Label>USERNAME</Form.Label>
	        			<Form.Control type="text" onChange={e => setUsername(e.target.value)}/>
	      			</Form.Group>
	      			<Form.Group className="mb-3">
	        			<Form.Label>PASSWORD</Form.Label>
	        			<Form.Control type="PASSWORD" onChange={e => setPassword(e.target.value)}/>
	      			</Form.Group>
	      			<Button variant="primary" type="submit">
	        			Submit
	      			</Button>
    			</Form>
				{error && (
					<h6 style={{ color: 'red' }}>Error: {JSON.stringify(error)}</h6>
				)}
      		</Col>
   	 	</Row>
		);
}
export default LoginUser;