import { useState } from 'react'
import Login from './pages/login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex w-full h-screen bg-gray-800">
      <div className="w-full flex items-center justify-center lg:w-1/2">
      <Login />
      </div>
      <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-700'>
        <div className="w-40 h-40 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"/>
        <div className='w-full h-1/2 absolute bottom-0 bg-gray/10 backdrop-blur-lg'/>
      </div>

    </div>
  )
}

export default App
