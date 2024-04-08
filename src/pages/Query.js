import React from 'react'
import {useSearchParams, useNavigate} from "react-router-dom"
export default function Query() {
  const [query] = useSearchParams();

  const nav =useNavigate();

  const onShopClick = () => {
    nav("/shop")
  }

  return (
    <div className='container'>
      <h2>Query: {query.get("search")}</h2>
      <button onClick={onShopClick} className ="btn btn-danger">Go to shop</button>
    </div>
  )
}