import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import unknownAvatar from '../../assets/unknown.jpg';
import Loading from '../Shared/Loading';

const MyProfileCard = ({ singleUser }) => {
    const { displayName, email, photoURL, role, number, address, institute } = singleUser;
    const navigate = useNavigate()

    if (!singleUser) {
        return <Loading></Loading>
    }
    // console.log(singleUser)
    return (
        <>


            <div className="card profile-card">
                {
                    photoURL ? <img src={photoURL} alt="John" style={{ width: "50px" }} /> : <img src={unknownAvatar} alt="John" style={{ width: "100px" }} />
                }
                <h1>Name: {displayName}</h1>
                <h1>Email: {email}</h1>
                <h1>Institute: {
                    institute ? institute : "N/A"
                }</h1>
                <h1>Number: {
                    number ? number : "N/A"
                }</h1>
                <h1>Address: {
                    address ? address : "N/A"
                }</h1>
                <p className="title">Role: {
                    role === 'admin' ? 'Admin' : 'General User'
                }</p>

                <p>
                    <button onClick={() => navigate(`/dashboard/my-profile/edit-profile`)}>Update Profile</button>
                </p>
            </div>
        </>
    );
};

export default MyProfileCard;