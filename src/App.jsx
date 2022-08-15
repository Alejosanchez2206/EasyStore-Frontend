import { useState } from 'react'
import Login from './Login/index'
import Sidebar from './Sidebar/sidebar'
import Dasborad from './pages/Dassboard/dasboard'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      {/*  {userAuth ?
        <Sidebar />
        : <Login />
      } */}
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dasborad />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  )
}

export default App
