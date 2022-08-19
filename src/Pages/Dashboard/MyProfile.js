import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
// import insta from '../../Assets/icons/instagramIcon.png'
// import facebook from '../../Assets/icons/facebookIcon.png'
// import twitter from '../../Assets/icons/twitterIcon.png'
// import { BookOpenIcon, MailIcon, MapIcon, PhoneIcon, UserIcon, } from "@heroicons/react/solid";


const MyProfile = () => {
    const [user] = useAuthState(auth);
    // const { isLoading, data: currentUser, refetch, } = useQuery("oneUser", () =>
    //     fetch(
    //         `http://localhost:5000/currentUser?email=${user?.email}`,
    //         {
    //             method: "GET",
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //             },
    //         }
    //     ).then((res) => res.json())
    // );
    // console.log(currentUser)
    // if (isLoading) {
    //     return <Loading></Loading>;
    // }


    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">Name: {user?.displayName}</h2>
                <p>Email: {user?.email} </p>
                <p>Education: </p>
                <p>Institution: </p>
                <p>Mobile: </p>
                <p>Address: </p>
                <p>Linkedin: </p>
                <p>Facebook: </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Update Profile</button>
                </div>
            </div>
        </div>
    );
};


export default MyProfile;