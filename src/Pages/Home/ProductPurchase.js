import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPurchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const { _id, name, description, price, minOrderQty, availableQty, img } = product;
    useEffect(() => {
        const url = `data.json/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h2>Product Purchase: {_id} </h2>
        </div>
    );
};

export default ProductPurchase;