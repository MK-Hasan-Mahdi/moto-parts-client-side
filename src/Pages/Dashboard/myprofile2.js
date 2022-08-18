import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import insta from '../../Assets/icons/instagramIcon.png'
import facebook from '../../Assets/icons/facebookIcon.png'
import twitter from '../../Assets/icons/twitterIcon.png'
import ProfileModal from './ProfileModal';
import { BookOpenIcon, MailIcon, MapIcon, PhoneIcon, UserIcon, } from "@heroicons/react/solid";
import { current } from 'daisyui/src/colors';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [openModal, setOpenModal] = useState(false);
    const { isLoading, data: currentUser, refetch, } = useQuery("oneUser", () =>
        fetch(
            `https://calm-bayou-08500.herokuapp.com/currentUser?email=${user?.email}`,
            {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }
        ).then((res) => res.json())
    );
    console.log(currentUser)
    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className="bg-secondary h-full">
            <div className="px-5 bg-white text-primary">
                {/* <h1 className="text-4xl  pt-5 pb-10 uppercase text-center">
          {" "}
          My Profile
        </h1> */}
                <div className="lg:px-24 px-2 bg-neutral bg-opacity-90 h-full w-full mx-auto">
                    <div className=" pt-10 flex-col md:flex-row ">
                        <div className="avatar online">
                            <div className="w-32 rounded-full">
                                <img
                                    src={
                                        user?.photoURL ? user?.photoURL : "https://i.ibb.co/30DwmWG/Image-Placeholder.png"
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold text-white  mt-5 ">
                                {user?.displayName}
                            </h1>
                            <p className="flex text-teal-200">
                                {" "}
                                <MailIcon className="text-white w-6 h-6 mr-3"></MailIcon>
                                <span>{user?.email}</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col  justify-between  mx-auto mt-10">
                            <div className="  ">
                                <h2 className="text-2xl font-semibold text-white ">
                                    Information
                                </h2>
                                <p className="mt-3 flex text-[15px] text-teal-200 items-center">
                                    <UserIcon className="w-6 h-6 mr-3  text-white"></UserIcon>{" "}
                                    {user?.displayName}
                                </p>
                                <p className="mt-2 flex text-[15px] text-teal-200 items-center">
                                    <MailIcon className="w-6 h-6 mr-3  text-white"></MailIcon>{" "}
                                    {user?.email}
                                </p>
                                <p className="mt-2 flex text-[15px] text-teal-200 items-center">
                                    <PhoneIcon className="w-6 h-6 mr-3  text-white"></PhoneIcon>{" "}
                                    +88-{currentUser?.phone ? currentUser?.phone : 12345678}
                                </p>
                                <p className="mt-2 flex text-[15px] text-teal-200 items-center">
                                    <MapIcon className="w-6 h-6 mr-3  text-white"></MapIcon>{" "}
                                    {currentUser?.address
                                        ? currentUser.address
                                        : "No address given"}
                                </p>

                                <p className="mt-2 flex text-[15px] text-teal-200 items-center">
                                    <BookOpenIcon className="w-6 h-6 mr-3 text-white"></BookOpenIcon>{" "}
                                    {currentUser?.study
                                        ? currentUser.study
                                        : "Study info not given"}
                                </p>
                            </div>
                            <div className=" mt-12 ">
                                <h2 className="text-2xl font-semibold text-white ">
                                    Social Media
                                </h2>
                                <p className="mt-3 flex items-center text-teal-200">
                                    <img src={facebook} className="w-6 mr-4 rounded-full" alt="" />
                                    <span className="text-sm italic">
                                        {currentUser?.facebook ? currentUser.facebook
                                            : "Facebook info not given"}

                                    </span>
                                </p>
                                <p className="mt-2 flex items-center text-teal-200">
                                    <img src={insta} className="w-6 mr-4 rounded-full" alt="" />
                                    <span className="text-sm italic">
                                        {currentUser?.instagram
                                            ? currentUser.instagram
                                            : "Instagram info not given"}
                                    </span>
                                </p>
                                <p className="mt-2 flex items-center text-teal-200">
                                    <img src={twitter} className="w-6 mr-4 rounded-full" alt="" />
                                    <span className="text-sm italic">
                                        {currentUser?.twitter
                                            ? currentUser.twitter
                                            : "Twitter info not given"}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className=" mt-10 mb-10">
                            <label
                                onClick={() => setOpenModal(true)}
                                htmlFor="update-profile"
                                className="mb-11 btn modal-button"
                            >
                                Update profile
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            {openModal && (
                <ProfileModal refetch={refetch} setOpenModal={setOpenModal} />
            )}
        </div>
    );
};


export default MyProfile;