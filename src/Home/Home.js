import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
export default function Home() {
    const [products,setProducts]=useState("")
    const [loading,setLoading]=useState(true)
    const navigate=useNavigate()
    useEffect(()=>{
        getProducts()
    },[])
    async function getProducts(){
        const response=await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products`)
        setProducts(response.data)
        setLoading(false)
    }
     async function handleAddCart(productId){
        const userId=localStorage.getItem("userId")
        if(!userId){
            alert("login first to add to cart")
            return ;
        }
        console.log(productId,userId)
        try{
        const response=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/cart/add`,{productId,Quantity:1},{params:{userId}})
        console.log(response)
        if(response.status===200){}
        alert("product added successfully");
        navigate('/cart')
    }
catch(err){
    console.log(err);
    alert("something went wrong")

}}
    return (
        <div className='home-container'>
            {
                loading?(
                    <p>Loading...</p>
                ):
                (
                    <div className='product-list '>
                        {
                            products.map((product)=>(
                                <div className='product-item' key={product._id}>
                                    <h2>{product.name}</h2>
                                    <p><b>Price:</b> {product.price}</p>
                                    <p>{product.description}</p>
                                    <p>{product.category}</p>
                                    <p><b>Stock:</b>{product.stock}</p>
                                    <button onClick={()=>handleAddCart(product._id)}>Add to cart</button>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}