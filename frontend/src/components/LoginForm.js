// src/components/LoginForm.js
import React from 'react';

const LoginForm = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      <form>
        <label>Email:</label><br />
        <input type="email" placeholder="Enter your email" /><br /><br />

        <label>Password:</label><br />
        <input type="password" placeholder="Enter your password" /><br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
