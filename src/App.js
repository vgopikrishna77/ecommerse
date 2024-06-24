import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './Signup/Signup';
import Navigation from './Navigation/Navigation';
import Login from './Login/Login';
import AddProduct from './AddProduct/AddProduct';
import Home from './Home/Home'
import Cart from './Cart/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/add-product'  element={<AddProduct/>}/>  
        <Route path='/cart' element={<Cart/>}  />  
        </Routes>
        </BrowserRouter>
    </div>
    
  )
}

export default App;
