import React from 'react';
import { Form } from 'react-router-dom';

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  console.log(email, password);
  return null;
}

export default function Login() {
  return (
    <div>
      <h1>Login Account</h1>
      <Form method="POST">
        <input id="email" name="email" placeholder="Email" type="email" />
        <input id="password" name="password" placeholder="Password" type="password" />
        <button>Submit</button>
      </Form>
    </div>
  );
}
