import React from 'react'
import ProductDetails from './ProductDetails'
import ProductImages from './ProductImages'


function ProductContainer() {
    return (
        <div className="product-container">
            {
                window.innerWidth > 767 ? (
                    <ProductImages />
                ): (
                    null
                )
            }
            <ProductDetails />
        </div>
    )
}

export default ProductContainer
