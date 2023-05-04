import { useEffect, useState } from 'react'
import './App.css'
import { Add } from './routes/addrecipe'
import { createHashRouter, RouterProvider, Outlet} from 'react-router-dom';
import { Book } from './routes/book'; 
import { Signup } from './routes/signup';
import { Login } from './routes/login';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { auth } from './lib/firebase';

const router = createHashRouter([
  {
    path: "/",
    element:<Outlet/>,
    children: [
      {
        path:'/',
        element: <Login />,
      },
      {
        path: "/cookbook",
        element: <Book />
      },
      {
        path: "/add",
        element: <Add/>
      },
      {
        path: "/signup",
        element: <Signup/>
      },
      {
        path: "/login",
        element: <Login/>
      },
    ],
  },
]);

export const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loggedIn = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    if(user === null){
      window.location.replace("#/login");
    }
    else {
      window.location.replace("#/cookbook");
    }
    return loggedIn;
  }, [auth, user]);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  }

  return (
    <>
      <div className='headerbar'>
        <h1 style={{ marginLeft: '10px'}}>Let's Cook!</h1>
        <div className='headerbar'>
          {user ? (
            <a href="#/cookbook">Cookbook</a>
            ) : (
            <p></p>
          )}
          {user ? (
            <a href='#/add'>Add Recipe</a>
            ) : (
            <p></p>
          )}
          
        </div>
        <div className = 'headerbar'>
          {user ? (
            <a onClick={handleLogout}>Logout</a>
          ) : (
            <a href='#/login'>Login</a>
          )}
        </div>
      </div>
      <div className='container'>
        <RouterProvider router = {router} />
        {user ? (
          <div className="sidebar">
              Sidebar sad
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  )
};