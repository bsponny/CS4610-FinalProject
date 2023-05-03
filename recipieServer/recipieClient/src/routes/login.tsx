import React, { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e:any) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className='book'>
        <form className='sign-log' onSubmit={handleLogin}>
            <h2>Login</h2>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className='logtosign'>
                <button type="submit">Sign Up</button>
                <a className='logtosign' href="/signup">I don't have an account</a>
            </div>
        </form>
    </div>
  );
}