import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Product from '../Home/Product';

const AllProducts = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate();
    const handlePurchase = id => {
        navigate(`/product/${id}`)
    }
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 mb-20'>
            {
                products.map(product =>
                    <Product
                        key={product._id}
                        handlePurchase={handlePurchase}
                        product={product}
                    ></Product>)
            }
        </div>
    );
};

export default AllProducts;