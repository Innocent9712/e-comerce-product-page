import React, {useContext, useState} from 'react'
import { GlobalContext } from '../App'
import plus from "../assets/images/icon-plus.svg"
import minus from "../assets/images/icon-minus.svg"

function ProductDetails() {
    const [count, setCount] = useState(1)
    const globalContext = useContext(GlobalContext)
    const {globalState, globalDispatch} = globalContext
    const {product} = globalState

    const handleCalc = (sign) => {
        sign === "add" ?
        setCount(prevCount => prevCount + 1) :
        setCount(prevCount=> prevCount - 1)
    }
    return (
        <div>
            <h4 className= "company">{product.company}</h4>
            <h2 className="edition">{product.edition}</h2>
            <p className="text-content">{product.textContent}</p>
            <section className="product-pricing">
                <div>
                    <h3>${product.discountPrice}</h3>
                    <h3>{product.discount}%</h3>
                </div>
                <p>${product.price}</p>
            </section>
            <section className="adding-to-cart">
                <div >
                    <button onClick={()=>handleCalc("minus")}>
                        <img src={minus} alt={minus} />
                    </button>
                    <p>{count}</p>
                    <button onClick={()=>handleCalc("add")}>
                        <img src={plus} alt={plus} />
                    </button>
                </div>
                <button className="add-to-cart-btn">
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero"/></svg>
                <p>Add to cart</p>
                </button>
            </section>
        </div>
    )
}

export default ProductDetails
