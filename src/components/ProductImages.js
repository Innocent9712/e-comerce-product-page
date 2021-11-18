import React, {useState} from 'react'
// import { imgArr } from '../data'
import imgProduct1 from "../assets/images/image-product-1.jpg"
import imgProduct2 from '../assets/images/image-product-2.jpg'
import imgProduct3 from '../assets/images/image-product-3.jpg'
import imgProduct4 from '../assets/images/image-product-4.jpg'



function ProductImages() {
    const subs = [imgProduct1, imgProduct2, imgProduct3, imgProduct4]
    const [main, setMain] =useState(subs[0])
    const setMainFunc = (index) => {
        setMain(subs[index])

    }
    console.log(main)

    return (
        <div className= "product-catalog-container">
            <img src={main} alt={main} />
            <ul className="img-catalog">
                {subs.map((sub, index) => (
                    <li key={index} onClick={()=>setMainFunc(index)}>
                        <img  className = {sub === main ? "activated" : null} src={sub} alt={sub} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductImages
