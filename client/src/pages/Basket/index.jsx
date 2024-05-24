import React, { useContext } from 'react'
import { BasketContext } from '../../context/basketContext'

const Basket = () => {
  const{basket,setBasket}=useContext(BasketContext)
  return (
    <div style={{width:"40%",margin:"30px auto ",padding:"200px 0",border:"1px solid black"}}>
      <ul style={{display:"flex",flexDirection:'column',gap:"15px"}}>
        {basket && basket.map((basketItem)=>(
          <li>
            <span>{basketItem.title} | { basketItem.count}</span>
            <button onClick={()=>{
               let currentItem=basket.find((x)=>x._id==basketItem._id);
               if (currentItem.count>1) {
                currentItem.count-=1;
                setBasket([...basket]);
                localStorage.setItem("basket",JSON.stringify([...basket]))
               } else {
                let uptadeBasket=basket.filter((x)=>x._id!=basketItem._id);
              setBasket(uptadeBasket);
              localStorage.setItem("basket",JSON.stringify(uptadeBasket))
               }
            }}>-</button>
            <button onClick={()=>{
              let currentItem=basket.find((x)=>x._id==basketItem._id);
              currentItem.count+=1;
              setBasket([...basket]);
              localStorage.setItem("basket",JSON.stringify([...basket]))
            }}>+</button>
            <button onClick={()=>{
              let uptadeBasket=basket.filter((x)=>x._id!=basketItem._id);
              setBasket(uptadeBasket);
              localStorage.setItem("basket",JSON.stringify(uptadeBasket))
            }}>remove</button>
          </li>
        ))}
      </ul>
      <button onClick={()=>{
        setBasket([]);
        localStorage.setItem("basket",JSON.stringify([]))
      }}>order</button>
    </div>
  )
}

export default Basket