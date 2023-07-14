import { useState } from 'react'
import './App.css'
import Home from './Home'
import Login from './Login'
import Signin from './Signin'
import New from './New'
import { Provider } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import store from '../redux/store';
import Search from './Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  console.log(import.meta.env.VITE_BASE_URL)

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Login' element={<Login />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </Provider >

  )
}

export default App
