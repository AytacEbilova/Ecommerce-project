import React from 'react'
import { useGetOneProductsQuery } from '../../service/productApi'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'antd'

const Detail = () => {
    const {id}=useParams()
    const{data:product}=useGetOneProductsQuery(id);
    const navigate=useNavigate();
  return (
    <div style={{width:"40%",margin:"30px auto",padding:"100px 0"}}>
        <img src={product?.data.img} alt="" />
        <h3>{product?.data.title}</h3>
        <p>{product?.data.bio}</p>
        <p>{product?.data.price}</p>
        <Button onClick={()=>navigate(-1)}>Go Back</Button>
    </div>
  )
}

export default Detail