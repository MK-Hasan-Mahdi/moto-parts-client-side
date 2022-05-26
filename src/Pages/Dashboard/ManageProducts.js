import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();

    const handleDeleteItem = (id) => {
        const proceedDelete = window.confirm('confirm delete?');
        if (proceedDelete) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingProduct = products.filter(product => product._id !== id);
                    setProducts(remainingProduct);
                })
        }
    }


    return (
        <div className='container'>
            <h2 className='text-center mt-2'>All Products</h2>
            <div className='d-flex justify-content-center align-items-center my-5'>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Item ID</th>
                                <th>Item Name</th>
                                <th>Availablt Qty</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product =>
                                    <tr className='hover' key={product._id}>
                                        <th>{product._id}</th>
                                        <td>{product.name}</td>
                                        <td>{product.availableQty}</td>
                                        <td><img className='' style={{ height: '100px', width: '100px' }} src={product.img} alt="" /></td>
                                        <td><button onClick={() => handleDeleteItem(product._id)} className='btn btn-error'>Delete</button></td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>


            </div>
            {/* <div className='text-center mb-3'>
                <button onClick={handleAddNewItem} className='btn btn-primary btn-lg'>Add New Item</button>
            </div> */}
        </div>
    );
};

export default ManageProducts;