import React, { useState, useEffect } from "react";
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {

    const [popularProducts, setPopularproducts] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:4000/popularinwomen`)
        .then((response)=>response.json())
        .then((data)=>setPopularproducts(data))
    },[])

    return(
        <div className="popular">
            <div className="head-part">
            <h1>POPULAR IN WOMEN</h1> 
            <div className="hr-line">
            <hr />
            </div>
            </div>
            <div className="popular-item">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id}  image={item.image} name={item.name}
                    new_price={item.new_price} old_price={item.old_price} />
                    
                })}
                
            </div>


        </div>
    )
}

export default Popular;