import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Book} from './components/book'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='headerbar'>
        <h1 style={{marginTop: '0' , marginLeft: '10px'}}>Let's Cook!</h1>
        <div className='headerbar'>
          <button>recipe book</button>
          <button>add recipe</button>
        </div>
        <div className = 'headerbar'>
          <button>login</button>
          <button>sign out</button>
        </div>
      </div>
      <Book />
    </>
  )
}

export default App
