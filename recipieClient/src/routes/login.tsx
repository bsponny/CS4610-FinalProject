import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, User } from 'firebase/auth';
import { auth } from "../lib/firebase";
import { redirect } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e:any) => {
    e.preventDefault();
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        redirect("#/cookbook");
    }
    catch (error: any){
        setError(error.message);
    }
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
            {error && <p className="error">{error}</p>}
            <div className='logtosign'>
                <button type="submit">Login</button>
                <a className='logtosign' href="#/signup">I don't have an account</a>
            </div>
        </form>
    </div>
  );
}