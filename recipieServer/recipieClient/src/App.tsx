import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Add } from './routes/addrecipe'
import { createBrowserRouter, createHashRouter, RouterProvider, Link, Outlet, HashRouter} from 'react-router-dom';
import { Book } from './routes/book'; 

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
    ],
  },
]);

export const App = () => {
  return (
    <>
      <div className='headerbar'>
        <a href='/'>
          <h1 style={{ marginLeft: '10px'}}>Let's Cook!</h1>
        </a>
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