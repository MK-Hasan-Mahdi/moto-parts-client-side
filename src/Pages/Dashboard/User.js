import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const User = ({ user, refetch }) => {
    const { email, role } = user;
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const url = `https://peaceful-dusk-44249.herokuapp.com/user`;
        // console.log(url);
        fetch(url, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const alreadyAdmin = () => {
        toast.error('I am already Admin')
    }

    const makeAdmin = () => {
        fetch(`https://peaceful-dusk-44249.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Ineligible to make Admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`You are now Admin`)
                    // // console.log(data)
                }
            })
    }

    const handleDeleteUser = (id) => {
        const proceedDelete = window.confirm('Confirm delete');
        if (proceedDelete) {
            const url = `https://peaceful-dusk-44249.herokuapp.com/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remainingUser = users.filter(user => user._id !== id)
                    setUsers(remainingUser);
                    refetch();
                    toast.success(`User Deleted`)
                })
        }
    }

    return (
        <tr className='hover'>
            <th>{email}</th>
            <td></td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button> : <butoon onClick={alreadyAdmin} className='btn btn-xs  btn-success'>Admin</butoon>}</td>
            <td><button onClick={() => handleDeleteUser(user._id)} class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default User;