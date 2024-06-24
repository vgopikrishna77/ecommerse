import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Cart() {
    const userId=localStorage.getItem("userId")
    const [cartItems,setCartItems]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        getCartProducts()
    },[])
    async function getCartProducts(){
        const response=await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/cart?userId=${userId}`)
        setCartItems(response.data.items)
        setLoading(false)
        console.log(response.data.items)
    }
    return (
        <div className='cart-container'>
           {
                loading? 
                    <>Loading...</>
                :(
                    <div className='cart-items'>
                        {
                            cartItems.map((item)=>(
                                <div key={item.product._id}>
                                    <h3>{item.product.name}</h3>
                                    <p>{item.product.description}</p>
                                    <p>{item.product.price}</p>
                                    <p>{item.product.category}</p>
                                    <p>Qunatity:{item.quantity}</p>
                                </div>
                            ))
                        }
                    </div>
                )
           }
        </div>
    )
}