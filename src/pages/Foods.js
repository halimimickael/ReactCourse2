import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"

export default function Foods() {
  const [foods_ar,setFoodAr] = useState([]);
  const params = useParams();

  useEffect(() => {
    doApi();
    // [params] = כל פעם שהוא ישתנה כאשר האיו אר אל משתנה
    // יזמן מחדש את הדו איי פי איי
  },[params])

  const doApi = async() => {
    const url = "http://fs1.co.il/bus/foods.php";
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      const filter_ar = data.filter(item => {
        return item.category_id == params["id_category"];
      })
      console.log(filter_ar);
      setFoodAr(filter_ar);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container'>
      <h2>Foods: {params["id_category"]}</h2>
      <Link to="/food/cakes">Cakes</Link> | 
      <Link to="/food/Italy">Italy</Link>
      <ul>
        {foods_ar.map(item => {
          return (
            <li key={item._id.$oid}>{item.name} - {item.price} NIS</li>
          )
        })}
      </ul>
    </div>
  )
}
