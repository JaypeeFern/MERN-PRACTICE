import React from 'react';
import { Form } from 'react-router-dom';

export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const password2 = formData.get('password');

  console.log(name, email, password, password2);
  return null;
}

export default function Register() {
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
