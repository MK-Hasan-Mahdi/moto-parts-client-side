import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPurchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    console.log(product);
    const { _id, name, description, price, minOrderQty, availableQty, img } = product;
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='container mx-auto text-center'>

            <div className='grid place-items-center'>
                <div class="card w-1/3 bg-base-100 shadow-xl ">
                    <figure class="px-10 pt-10">
                        <img src={img} alt="" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{name}</h2>
                        <p>Product ID: {productId} </p>
                        <p>Description: {description} </p>
                        <p>Price: {price} </p>
                        <p>Minimum Order Qty: {minOrderQty} </p>
                        <p>Available Qty: {availableQty} </p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPurchase;