import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
// import insta from '../../Assets/icons/instagramIcon.png'
// import facebook from '../../Assets/icons/facebookIcon.png'
// import twitter from '../../Assets/icons/twitterIcon.png'
// import { BookOpenIcon, MailIcon, MapIcon, PhoneIcon, UserIcon, } from "@heroicons/react/solid";


const MyProfile = () => {
    const [signedUser, loading, error] = useAuthState(auth);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const email = signedUser?.email;
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);
    if (loading) {
        return <Loading></Loading>
    }
    // const getItems = async () => {
    //     const email = signedUser?.email
    //     const url = `http://localhost:5000/user/${email}`
    //     // console.log(url);
    //     try {
    //         const { data } = await axios.get(url, {
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem('token')}`
    //             }
    //         })
    //         // console.log(data, "data");
    //         setUser(data)

    //     } catch (error) {
    //         // console.log(error);
    //         if (error.response.status === 403 || error.response.status === 401) {
    //             signOut(auth)
    //             navigate('/login')
    //         }
    //         // alert(error.message)
    //     }
    // }
    // getItems()


    return (
        <div className="card overflow-visible sm:w-96 lg:w-full bg-red-900 shadow-xl my-20">
            <div className="avatar mx-auto mt-[-50px]">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                    <img src={user?.user?.photoUrl || user?.user?.photoURL} alt="userImage" />
                </div>
            </div>
            <div className="card-body mx-auto">
                <h2 className="card-title text-white">Name: {user?.user?.displayName}</h2>
                <p className="text-xl text-white">Email: {user?.email} </p>
                <p className='text-xl text-white'>Education: </p>
                <p className='text-xl text-white'>Institution: {user?.user?.institute} </p>
                <p className='text-xl text-white'>Mobile: {user?.user?.mobile} </p>
                <p className='text-xl text-white'>Address: {user?.user?.address} </p>
                <p className='text-xl text-white'>Linkedin: </p>
                <p className='text-xl text-white'>Facebook: </p>
                <div className="card-actions justify-center py-10">
                    <button onClick={() => navigate(`/dashboard/myprofile/updateprofile`)} className="btn btn-secondary text-center">Update Profile</button>
                </div>
                <p>
                </p>
            </div>
        </div>
    );
};


export default MyProfile;