import React from 'react';
import { Form, useNavigate, useActionData } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { register, reset } from '../features/auth/authSlice';

export async function action({ request }) {
	const formData = await request.formData();
	const name = formData.get('name');
	const email = formData.get('email');
	const password = formData.get('password');
	const password2 = formData.get('password2');
	return { name, email, password, password2 };
}

export default function Register() {
	const actionData = useActionData();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	React.useEffect(() => {
		if (actionData) {
			if (actionData?.password != actionData?.password2) {
				toast.error('Passwords do not match');
			} else {
				const userData = {
					name: actionData?.name || '',
					email: actionData?.email || '',
					password: actionData?.password || '',
				};
				dispatch(register(userData));
			}
		}
	}, [actionData]);

	React.useEffect(() => {
		if (isError) {
			toast.error(message);
		}
		dispatch(reset());
	}, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);

	return (
		<div>
			<h1>Register Account</h1>
			<Form method="POST">
				<input id="name" name="name" placeholder="Name" />
				<input id="email" name="email" placeholder="Email" type="email" />
				<input id="password" name="password" placeholder="Password" type="password" />
				<input id="password2" name="password2" placeholder="Confirm Password" type="password" />
				<button>Submit</button>
			</Form>
		</div>
	);
}
