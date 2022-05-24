import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, description, price, minOrderQty, availableQty, img } = product;
    const navigate = useNavigate();

    const navigateToPurchase = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="">
                <img className='' src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
                <p>Minimum Order Quantity: {minOrderQty}</p>
                <p>Available Quantity: {availableQty}</p>
                <div class="card-actions">
                    <button onClick={() => navigateToPurchase(_id)} class="btn btn-primary text-center">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Product;