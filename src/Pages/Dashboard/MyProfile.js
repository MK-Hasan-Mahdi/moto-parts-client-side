import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState({})

    useEffect(() => {

        if (user) {
            fetch(`http://localhost:5000/profile?email=${user.email}`)
                .then(res => res.json())
                .then(data => setProfile(data))

        }
    }, [user])

    const handleProfileForm = event => {
        // const name = user?.displayName;

        event.preventDefault();

        const name = user?.displayName;
        const email = user?.email;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const link = event.target.link.value;
        // console.log(name, email, phone, address, link);


        const userInput = {
            name,
            email,
            address: address,
            phone: phone,
            link: link,
        }

        //post profile to database
        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInput)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }



    return (
        <div className='w-full mx-auto custom-shadow bg-base-100 pt-10 pb-10 px-10 rounded-lg'>
            <h1 className='text-2xl md:text-3xl font-medium text-slate-500 text-center mb-10'>My Profile</h1>
            <form onSubmit={handleProfileForm} className='grid grid-cols-1 gap-3 justify-items-center mt-3 '>

                <input type="text" name='name' value={user?.displayName || ""} className="input input-bordered w-full max-w-xs" />
                <input type="email" name='email' disabled value={user?.email || ""} className="input input-bordered w-full max-w-xs" />
                <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='link' placeholder="Link" className="input input-bordered w-full max-w-xs" />
                <input type="submit" placeholder="Submit" className="btn btn-primary w-full max-w-xs" />
            </form>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            profile.map((p) =>
                                <tr className='hover' key={p._id}>

                                    <th>{p.name}</th>
                                    <th>{p.email}</th>
                                    <th>{p.address}</th>
                                    <th>{p.phone}</th>
                                    <th>{p.link}</th>

                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyProfile;