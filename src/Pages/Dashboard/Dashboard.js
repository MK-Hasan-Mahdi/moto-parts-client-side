import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className='container mx-auto'>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-3xl font-bold text-yellow-500 my-5 text-center'>Welcome {user?.displayName}</h2>                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label for="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                        {/* <li><Link to='/dashboard/addreview'>Add Review</Link></li> */}
                        {/* <li><Link to='/dashboard/myorder'>My Orders</Link></li> */}

                        {admin ?
                            <>
                                <li><Link to='/dashboard/users'>All Users</Link></li>
                                <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                                <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
                                <li><Link to='/dashboard/manageorders'>Manage All Orders</Link></li>

                            </>
                            :
                            <>
                                <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                                <li><Link to='/dashboard/myorder'>My Orders</Link></li>

                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;