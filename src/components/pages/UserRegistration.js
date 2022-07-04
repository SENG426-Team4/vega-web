import React, { useState, useContext } from 'react';


import {UserContext} from '../../auth/UserProvider.js';
import UserRegistrationPageLayout from '../templates/UserRegistrationPageLayout.js';
import UserRegistrationForm from '../UI/organisms/UserRegistrationForm.js';
import {signup} from '../../service/auth/AuthenticationManager.js';

const UserRegistration = (props) => {
	const {user, setUserInfo,logout} = useContext(UserContext);
	const [auth, setAuth] = useState(false);

	function onSubmit(userInfo){
		return signup(userInfo)
	}
	return (
		<UserRegistrationPageLayout>
			<UserRegistrationForm onSubmit={onSubmit} />
		</UserRegistrationPageLayout>
		);
}
export default UserRegistration;