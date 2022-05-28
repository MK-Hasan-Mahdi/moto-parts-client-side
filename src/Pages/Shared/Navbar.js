import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    const navigate = useNavigate();

    const menuItems = <>
        <li className=''><Link to='/'>Home</Link></li>
        <li className=''><Link to='/allproducts'>Products</Link></li>
        <li className=''><Link to='/blogs'>Blogs</Link></li>
        <li className=''><Link to='/myportfolio'>My Portfolio</Link></li>

        {
            user && <li className=''><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li className=''>
            {
                user ? <button className='btn-ghost' onClick={logout}>Sign Out</button>
                    :
                    <Link to='/login'>Login</Link>
            }
        </li>
    </>

    return (
        <div class="navbar  sticky top-0 z-50 shadow-lg bg-gray-900 text-white">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 text-white rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>

                <div className="flex-shrink-0 w-fit lg:mx-40">
                    <h1 onClick={() => navigate('/')}
                        className="cursor-pointer uppercase  text-xl font-bold logo">
                        Moto-Parts
                    </h1>
                </div>
                {/* <a class="btn btn-ghost normal-case text-xl">Moto-Parts</a> */}
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label for="dashboard-sidebar" tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;