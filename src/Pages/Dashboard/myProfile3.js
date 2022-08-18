import React, { useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import primaryAxios from "../../../Api/primaryAxios";
import Loading from "../../../Components/Loading/Loading";
import auth from "../../../firebase.init";
import useRole from "../../../Hooks/useRole";
import "./Profile.css";

const Profile = () => {
    const [{ email }] = useAuthState(auth);
    const [isEdit, setIsEdit] = useState(null);
    const [role, roleLoading] = useRole();
    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {
        data: user,
        isLoading,
        refetch,
    } = useQuery(["userProfile", email], () =>
        primaryAxios.get(`/user-role?email=${email}`)
    );
    if (roleLoading || isLoading || updating) {
        return <Loading />;
    }
    const onSubmit = async (updatedInfo) => {
        await updateProfile({
            displayName: updatedInfo?.name,
            photoURL: updatedInfo?.image,
        });
        (async () => {
            const { data } = await primaryAxios.put(
                `/update-user?qEmail=${email}`,
                updatedInfo
            );
            if (data) {
                toast.success("User Updated Successfully");
                refetch();
            }
        })();
    };

    return (
        <div className="container w-full mx-auto p-5 lg:p-10 mb-40 mt-5">
            <div className="md:flex w-full no-wrap md:-mx-2 ">
                <div className="w-full lg:w-1/3 md:mx-2 lg:mt-1 p-3">
                    <div className="bg-white p-5 rounded-br-lg rounded-bl-lg border-t-4 border-[#125f82]">
                        <div className="image overflow-hidden">
                            <img
                                className="h-auto w-full mx-auto"
                                src={`${user?.data?.image
                                        ? user?.data?.image
                                        : "https://i.ibb.co/T1D3tqN/images.png"
                                    }`}
                                alt=""
                            />
                        </div>
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                            {user?.data?.name ? user?.data?.name : "- - -"}
                        </h1>
                        <h3 className="text-gray-600 font-lg text-semibold leading-6">
                            {user?.data?.email ? user?.data?.email : "- - -"}
                        </h3>
                        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li className="flex items-center py-3">
                                <span>Role</span>
                                <span className="ml-auto">
                                    <span className="bg-primary py-1 px-2 rounded text-white text-sm">
                                        {role ? "Admin" : "User"}
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-1 w-full">
                    <div className="w-full my-4 h-64  border-t-4 border-[#125f82]">
                        <div className="bg-white p-5 rounded-br-lg rounded-bl-lg shadow-sm rounded-sm">
                            <div className="text-gray-700">
                                <div className="text-xs lg:text-md">
                                    <div className="grid grid-cols-2">
                                        <div className="py-2 font-semibold">Name</div>
                                        <div className="py-2">
                                            {user?.data?.name ? user?.data?.name : "- - -"}{" "}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <div className="py-2 font-semibold">Email.</div>
                                        <div className="py-2 w-[20ch]">
                                            {user?.data?.email ? user?.data?.email : "- - -"}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="py-2 font-semibold">Gender</div>
                                        <div className="py-2">
                                            {" "}
                                            {user?.data?.gender ? user?.data?.gender : "- - -"}{" "}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="py-2 font-semibold">Contact No.</div>
                                        <div className="py-2">
                                            {" "}
                                            {user?.data?.phone ? user?.data?.phone : "- - -"}{" "}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="py-2 font-semibold">Address</div>
                                        <div className="py-2">
                                            {" "}
                                            {user?.data?.address ? user?.data?.address : "- - -"}{" "}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="py-2 font-semibold">Education</div>
                                        <div className="py-2">
                                            {" "}
                                            {user?.data?.education
                                                ? user?.data?.education
                                                : "- - -"}{" "}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="py-2 font-semibold">
                                            LinkedIn profile link
                                        </div>
                                        <div className="py-2">
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-blue-500 underline"
                                                href={
                                                    user?.data?.linkedInLink
                                                        ? user?.data?.linkedInLink
                                                        : "#"
                                                }
                                            >
                                                Click Here
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label
                                htmlFor="my-modal-6"
                                onClick={() => setIsEdit(true)}
                                className="text-center block w-full text-primary text-md shadow font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                            >
                                Edit Profile
                            </label>
                        </div>
                    </div>
                    <div className="my-4"></div>
                    <div
                        className={`${isEdit ? "block" : "hidden"
                            } bg-white w-full border-t-4 border-[#125f82] mx-auto p-5 my-5 mt-16 rounded-br-lg rounded-bl-lg shadow-sm rounded-sm relative`}
                    >
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span class="text-green-500">
                                <svg
                                    className="h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </span>
                            <span className="tracking-wide">Edit</span>
                            <button
                                onClick={() => setIsEdit(false)}
                                className="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="text-gray-700 w-full">
                            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                                <div className="flex gap-5 -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            {...register("name", {
                                                minLength: {
                                                    value: 4,
                                                    message: "Minimum Four Characters",
                                                },
                                            })}
                                            defaultValue={user?.data?.name && user?.data?.name}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            placeholder="Your Name"
                                        />
                                        {errors?.name && (
                                            <p className="error">{errors.name.message}</p>
                                        )}
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Gender
                                        </label>
                                        <select
                                            {...register("gender")}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="text"
                                            defaultValue={
                                                user?.data?.gender ? user?.data?.gender : "Male"
                                            }
                                            placeholder="Gender"
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-5 -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Education
                                        </label>
                                        <input
                                            {...register("education")}
                                            defaultValue={
                                                user?.data?.education && user?.data?.education
                                            }
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="text"
                                            placeholder="Education"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Contact No.
                                        </label>
                                        <input
                                            {...register("phone")}
                                            defaultValue={user?.data?.phone && user?.data?.phone}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="number"
                                            placeholder="Contact No."
                                        />
                                    </div>
                                </div>
                                <div className="flex  gap-5 -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Address
                                        </label>
                                        <input
                                            {...register("address")}
                                            defaultValue={user?.data?.address && user?.data?.address}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="text"
                                            placeholder="Address"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            LinkedIn profile link
                                        </label>
                                        <input
                                            {...register("linkedInLink")}
                                            defaultValue={
                                                user?.data?.linkedInLink && user?.data?.linkedInLink
                                            }
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="text"
                                            placeholder="LinkedIn profile link"
                                        />
                                    </div>
                                </div>
                                <div className="flex  gap-5 -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Image
                                        </label>
                                        <input
                                            {...register("image")}
                                            defaultValue={user?.data?.image && user?.data?.image}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="text"
                                            placeholder="Your Image Link"
                                        />
                                    </div>
                                </div>
                                {error && <p className="error">{error?.message}</p>}
                                <button
                                    type="submit"
                                    className="text-center block w-full text-primary text-md shadow font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                                >
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;