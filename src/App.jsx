import { useState } from 'react'
import Login from './Login/index'
import Sidebar from './Sidebar/sidebar'
import Dasborad from './pages/Dassboard/dasboard'
import Inventario from './pages/Inventario/inventario'
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from './context/AuthContex'
import { PublicRoutes } from './Component/Route/PublicRoute'
import { PrivateRoutes } from './Component/Route/PrivateRoute'
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
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<PublicRoutes />}>
              <Route index element={<Login />} />
            </Route>
          </Routes>
          <Sidebar>
            <Routes>
              <Route path="/" element={<PrivateRoutes />}>
                <Route index element={<Dasborad />} />
                <Route path="/Inventario" element={<Inventario />} />
              </Route>
            </Routes>
          </Sidebar>
        </BrowserRouter>
      </AuthContextProvider>

    </>
  )
}

export default App
