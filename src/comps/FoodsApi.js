import React, { useEffect, useState } from 'react'

export default function FoodsApi() {
    const [foods_ar, setFoodsAr] = useState([]);
    const[loading,setLoading] = useState(false);

    useEffect(() => {
        doApi();
    },[])

    const doApi = async () => {
        const url = "http://fs1.co.il/bus/foods.php";
        try{
            setLoading(true);
            const resp = await fetch(url);
            const data = await resp.json();
            // console.log(data);
            setFoodsAr(data);
            setLoading(false);
        }
        catch(err){
            console.log(err);
            alert("There probleme come back later")
        }
    }

    return (
        <div>
            <h1>List of foods</h1>
            {loading && <h2>Loading ...</h2>}
            <ul>
                {foods_ar.map((item, i) =>{
                    return(
                        <li key={i}>{item.name} - {item.price}</li>
                    )
                })}
            </ul>
        
        </div>

    )
}
