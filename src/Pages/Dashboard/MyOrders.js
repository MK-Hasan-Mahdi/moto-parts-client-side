import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import swal from 'sweetalert';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        // const email = user.email;
        if (user) {
            fetch(`https://peaceful-dusk-44249.herokuapp.com/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('response', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate("/");
                    }
                    return res.json()
                })
                .then(data => setOrders(data));
        }
    }, [user]);

    // handle delete user purchase order
    const handleDeleteOrder = (id) => {
        // const proceedDelete = window.confirm('Confirm delete');
        const proceedDelete = swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((id) => {
                if (id) {
                    swal("Your order has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your order not cancelled!");
                }
            });

        // swal("Are you sure?", { dangerMode: true, buttons: true, });


        if (proceedDelete) {
            const url = `https://peaceful-dusk-44249.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingOrder = orders.filter(order => order._id !== id)
                    setOrders(remainingOrder);
                })
        }
    }

    // payment for order
    const handlePaymentOrder = () => {
        console.log('give payment');
    }

    return (
        <div>
            <h2 className='text-center text-3xl p-2'>My Purchase Order: {orders.length} </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order) =>
                                <tr className='hover' key={order._id}>
                                    {/* <th>{index + 1}</th> */}
                                    <th>{order.name}</th>
                                    <td>{order.email}</td>
                                    <td>{order.product}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>


                                    <td><button onClick={() => handleDeleteOrder(order._id)} class="btn btn-sm btn-outline btn-error"><span>Cancel Order</span></button></td>

                                    <td>
                                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm btn-success'>Pay</button></Link>}
                                        {(order.price && order.paid) && <span className='btn btn-sm btn-success'>Paid</span>}
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;