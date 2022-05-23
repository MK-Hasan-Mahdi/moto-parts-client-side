import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h2 className='text-2xl text-yellow-500 font-bold text-center'>Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    {/* {admin &&
                        <>
                            <li><Link to='/dashboard/users'>All Users</Link></li>
                            <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li>
                            <li><Link to='/dashboard/manageDoctor'>Manage Doctor</Link></li>
                        </>
                    } */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;