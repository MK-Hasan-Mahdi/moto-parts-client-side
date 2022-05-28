import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, description, price, minOrderQty, availableQty, img } = product;
    const navigate = useNavigate();

    const navigateToPurchase = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <div className="card card-compact lg:w-96 w-full bg-base-100 shadow-xl mx-auto shadow-gray-300">
            <figure className="px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img className='w-48 rounded-xl' src={img} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-lg font-semibold'>Price: ${price}</p>
                <p className='font-medium'>Minimum Order Quantity: {minOrderQty}</p>
                <p className='font-medium'>Available Quantity: {availableQty}</p>
                <div className="card-actions">
                    <button onClick={() => navigateToPurchase(_id)} className="btn w-full btn-secondary text-center ">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Product;