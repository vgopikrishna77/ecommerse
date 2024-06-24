import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Navigation.css'
export default function Navigation() {
  const userRole = localStorage.getItem("userRole")
  const userId = localStorage.getItem("userId")
  console.log(userId)
  const navigate=useNavigate()
  function handleLogout(){
    localStorage.removeItem("userId")
    localStorage.removeItem("userRole")
    navigate("/")
  }
  return (
    <nav>
      <Link to="/">Home</Link>
      {
        userId ? (
          <>
             {userRole==="admin" && <Link to="/add-product">Add Product</Link>}
            <Link to="/cart">Cart</Link>
            <Link onClick={handleLogout}>Logout</Link>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )
      }
    </nav>
  )
}
