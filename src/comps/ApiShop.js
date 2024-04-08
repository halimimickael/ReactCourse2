import { useEffect, useState } from 'react'

export default function ApiShop() {
    const [shop_ar, setShopAr] = useState ([]);

    const doApi = async () => {
        const url = "http://fs1.co.il/bus/shop.php";
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data);
            setShopAr(data);
        }catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        doApi();
    },[])

    return (
        <div className='container'>
            <h2>shop list</h2>
            <div className='row'>
                {shop_ar.map(item => {
                    return (
                        <article key={item.id} className='border p-2 col-md-4'>
                            <h3>Name : {item.name}</h3>
                            <div>Price : {item.price} nis</div>
                        </article>
                    )
                })
                }
            </div>
        </div>
    )
}
