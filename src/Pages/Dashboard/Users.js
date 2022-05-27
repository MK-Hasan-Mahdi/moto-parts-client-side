import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const Users = () => {

    const { data: users, isLoading, refetch } = useQuery(['users'], () =>
        fetch('https://peaceful-dusk-44249.herokuapp.com/user', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>All Users: {users.length}  </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <User
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;