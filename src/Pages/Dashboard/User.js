import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, refetch }) => {
    const { email, role } = user;

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
                    // console.log(data)
                }
            })
    }

    return (
        <tr className='hover'>
            <th>{email}</th>
            <td></td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button> : <butoon onClick={alreadyAdmin} className='btn btn-xs  btn-success'>Admin</butoon>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default User;