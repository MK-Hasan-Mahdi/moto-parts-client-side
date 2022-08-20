import React, { useEffect, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfileUpdate = () => {
    const [authUser] = useAuthState(auth);
    // console.log(authUser);
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const [user, setUser] = useState({});
    // console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5000/user/${authUser?.email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                email: `${authUser?.email}`,
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setUser(json);
            });
    }, [authUser?.email]);

    const { register, formState: { errors }, handleSubmit, reset, } = useForm();
    // error or update but not so urgent code
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (updating) {
        return <Loading></Loading>;
    }

    const onSubmit = async (data) => {
        console.log(data);
        const image = data?.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=b87c3c71cee6f1929847f8608981e477`;
        // console.log(url);
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const userInfo = {
                        displayName: data.displayName || authUser.displayName,
                        mobile: data.mobile || user?.mobile,
                        address: data.address || user?.address,
                        education: data.education || user?.education,
                        institute: data.institute || user?.institute,
                        linkedin: data.linkedin || user?.linkedin,
                        facebook: data.facebook || user?.facebook,
                        photoUrl: img || "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                    }
                    // console.log(userInfo);
                    fetch(`http://localhost:5000/updateuser/${authUser.email}`, {
                        method: "PUT",
                        headers: {
                            'content-type': 'application/json',
                            // email: `${authUser?.email}`,
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(json => console.log(json));
                    toast.success("Profile Updated");
                    updateProfile({
                        displayName: data?.displayName || authUser?.displayName || "N/A",
                        photoUrl: img || "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                    });
                    reset();
                }
                else {
                    const userInfo = {
                        displayName: data.displayName || authUser.displayName,
                        mobile: data.mobile || user?.mobile || "N/A",
                        address: data.address || user?.address || "N/A",
                        education: data.education || user?.education,
                        institute: data.institute || user?.institute || "N/A",
                        linkedin: data.linkedin || user?.linkedin,
                        facebook: data.facebook || user?.facebook,
                        photoURL: user?.photoURL || authUser?.photoURL || "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                    };
                    // console.log(userInfo);
                    fetch(`http://localhost:5000/updateuser/${authUser.email}`, {
                        method: "PUT",
                        headers: {
                            'content-type': 'application/json',
                            email: `${authUser?.email}`,
                            // authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                        body: JSON.stringify(userInfo),
                    })
                        .then(res => res.json())
                        .then(json => {
                            console.log(json);
                            toast.success("Profile Updated Successfully");
                            updateProfile({
                                displayName: data?.displayName || authUser?.displayName || "N/A",
                                photoURL: user?.photoURL || authUser?.photoURL || "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                            });
                            reset();
                        });
                }
            })

    };
    return (
        <div>
            <h1 className='mt-10 text-3xl text-center sp-style '>Update Your Profile</h1>
            <div className='md:w-1/2 w-3/4 mx-auto'>

                <form className='w-full mx-auto' onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Update Name"
                            className="input input-bordered w-full"
                            {...register("displayName", {

                            })}
                        />
                        <label className="label">
                            {errors.displayName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.displayName.message}</span>}
                        </label>

                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Update Email"
                            className="input input-bordered w-full"
                            value={authUser?.email}
                            disabled
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Number</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Update Number"
                            className="input input-bordered w-full"
                            {...register("mobile", {

                            })}
                        />
                        <label className="label">
                            {errors.mobile?.type === 'required' && <span className="label-text-alt text-red-500">{errors.mobile.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Update Address"
                            className="input input-bordered w-full"
                            {...register("address", {

                            })}
                        />
                        <label className="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Update Education"
                            className="input input-bordered w-full "
                            {...register("education", {

                            })}
                        />
                        <label className="label">
                            {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Institute</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Update institute"
                            className="input input-bordered w-full "
                            {...register("institute", {

                            })}
                        />
                        <label className="label">
                            {errors.institute?.type === 'required' && <span className="label-text-alt text-red-500">{errors.institute.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Linkedin</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Update Linkedin"
                            className="input input-bordered w-full "
                            {...register("linkedin", {

                            })}
                        />
                        <label className="label">
                            {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Facebook</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Update Facebook"
                            className="input input-bordered w-full "
                            {...register("facebook", {

                            })}
                        />
                        <label className="label">
                            {errors.facebook?.type === 'required' && <span className="label-text-alt text-red-500">{errors.facebook.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Update Image</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full cursor-pointer"
                            {...register("image", {

                            })}
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>


                    <div className="card-actions justify-center py-10">
                        <button className="btn btn-secondary text-center" type="submit" value="Update">Update Profile</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfileUpdate;