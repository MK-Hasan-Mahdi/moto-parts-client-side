import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ProfileModal = ({ setOpenModal, refetch }) => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const handleSubmit = (event) => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const study = event.target.study.value;
        const facebook = event.target.facebook.value;
        const instagram = event.target.instagram.value;
        const twitter = event.target.twitter.value;
        const data = { phone, address, study, facebook, instagram, twitter };
        if (phone && address && study && facebook && instagram && twitter) {
            fetch(
                `http://localhost:5000/currentUser/${email}`,
                {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                    body: JSON.stringify(data),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data) {
                        refetch();
                        toast.success("Profile Updated Successfuly");
                        setOpenModal(false);
                        event.target.reset();
                    }
                });
        }
        else {
            toast.error('Please Fill Up Full Form')
        }
    };
    return (
        <div>
            <input type="checkbox" id="update-profile" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box md:w-3/4 mt-10 w-10/12 mx-auto relative">
                    <label htmlFor="update-profile" className="btn btn-sm btn-circle absolute right-2 top-2">✕ </label>
                    <h3 className="text-xl text-center text-neutral font-bold mb-4">
                        Update Profile
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-2">
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                className="input input-bordered w-full "
                            />
                            <input
                                name="study"
                                type="text"
                                placeholder="Study Information"
                                className="input input-bordered w-full"
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                className="input input-bordered w-full"
                            />
                            <input
                                name="facebook"
                                type="text"
                                placeholder="Facebook Link"
                                className="input input-bordered w-full"
                            />

                            <input
                                name="instagram"
                                type="text"
                                placeholder="Instagram Link"
                                className="input input-bordered w-full"
                            />

                            <input
                                name="twitter"
                                type="text"
                                placeholder="Twitter Link"
                                className="input input-bordered w-full"
                            />

                            <input
                                type="submit"
                                className="btn btn-neutral "
                                value="Submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;