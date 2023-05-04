import { useState } from 'react';
import { auth, db } from '../lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

export function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (email === "" || password === "" || username === "" || confirmPassword == "") {
        setError("Fields are required");
        return;
    }
    if (password === confirmPassword){
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            const userRef = collection(db, "users");
            await addDoc(userRef, {
                username, 
                email,
                uid: user.uid,
                following:[]
            });
        }
        catch(error: any){
            setError(error.message);
        }
    }
    else {
        setError("Passwords Don't Match")
    }
  };

  const handleBackButton = () => {
    window.location.replace("#/login");
  };

  return (
    <div className='book'>
        <form className='sign-log' onSubmit={handleSubmit}>
            <h2>Create an account</h2>
            <div>
                <label htmlFor="email">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
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
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            {error && <p className="error">{error}</p>}
            <div className='logtosign'>
                <button type="submit">Sign Up</button>
                <button onClick={handleBackButton}>Back</button>
            </div>
        </form>
    </div>
  );
}