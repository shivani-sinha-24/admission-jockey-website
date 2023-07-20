import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes  , Route} from 'react-router-dom'
import Home from './pages/homepage/Home'
import Login from './pages/loginpage/Login'
import Signin from './pages/signinpage/Signin'
import Search from './pages/searchpage/Search'

import New from './components/New'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Search' element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
