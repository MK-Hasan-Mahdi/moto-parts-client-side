import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    // console.log(orders);


    // useEffect(() => {
    //     fetch('https://peaceful-dusk-44249.herokuapp.com/product')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    // }, []);

    useEffect(() => {
        const url = `https://peaceful-dusk-44249.herokuapp.com/orders`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);


    const handleDeleteOrder = (id) => {
        const proceedDelete = window.confirm('Confirm delete');
        if (proceedDelete) {
            const url = `https://peaceful-dusk-44249.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remainingOrder = orders.filter(order => order._id !== id)
                    setOrders(remainingOrder);
                })
        }
    }


    return (
        <div className='container'>
            <h2 className='text-center mt-2'>Manage All Orders</h2>
            <div className='d-flex justify-content-center align-items-center my-5'>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Item ID</th>
                                <th>User</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order =>
                                    <tr className='hover' key={order._id}>
                                        <th>{order._id}</th>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td><button onClick={() => handleDeleteOrder(order._id)} className='btn btn-error'>Delete</button></td>
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

export default ManageOrders;