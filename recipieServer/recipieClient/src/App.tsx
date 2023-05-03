import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Add } from './routes/addrecipe'
import { createHashRouter, RouterProvider, Outlet} from 'react-router-dom';
import { Book } from './routes/book'; 
import { Signup } from './routes/signup';
import { Login } from './routes/login';
const Root = () => {
  return(
    <div className='book' style={{justifyContent: 'center'}}><h1>Sign up or Log in to get to your recipes</h1></div>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element:<Outlet/>,
    children: [
      {
        path:'/',
        element: <Root />,
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
  return (
    <>
      <div className='headerbar'>
        <h1 style={{ marginLeft: '10px'}}>Let's Cook!</h1>
        <div className='headerbar'>
          <a href="#/cookbook">Cookbook</a>
          <a href='#/add'>add recipe</a>
        </div>
        <div className = 'headerbar'>
          <a href='#/login'>Login</a>
          <a href='#/signup'>Sign Up</a>
        </div>
      </div>
      <div className='container'>
        <RouterProvider router = {router} />
        <div className="sidebar">
            Sidebar sad
        </div>
      </div>
    </>
  )
};