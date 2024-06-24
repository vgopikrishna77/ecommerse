import React, { useState } from 'react'
import './AddProduct.css'
import axios from 'axios'
function AddProduct() {
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [description,setDescription]=useState('')
    const [category,setCategory]=useState('')
    const [stock,setStock]=useState('')
    const userRole=localStorage.getItem("userRole")
    async function handleProduct(){
        const user={name,price,description,category,stock,role:userRole}
        const response=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/products/add`,user)
        console.log(response)
    }
    return (
        <div className='add-produt-container'>
             <div className='form-group'>
                <label>Name</label>
                <input value={name}
                 onChange={(e)=>setName(e.target.value)}/>

            </div>
            <div className='form-group'>
                <label>price</label>
                <input value={price}
                 onChange={(e)=>setPrice(e.target.value)}/>

            </div>
            <div className='form-group'>
                <label>description</label>
                <input value={description}
                 onChange={(e)=>setDescription(e.target.value)}/>

            </div>
            <div className='form-group'>
                <label>category</label>
                <input value={category}
                 onChange={(e)=>setCategory(e.target.value)}/>

            </div>
            <div className='form-group'>
                <label>Stock</label>
                <input value={stock}
                 onChange={(e)=>setStock(e.target.value)}/>

            </div>
            <button onClick={handleProduct}>AddProduct</button>  

        </div>
    )
}

export default AddProduct;
