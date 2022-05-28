import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
    const [user, loading, errorHook] = useAuthState(auth);
    const navigate = useNavigate();

    const handleReview = (event) => {
        event.preventDefault();
        const Review = {
            email: user.email,
            title: event.target.title.value,
            review: event.target.review.value,
            star: event.target.star.value,
        };
        const url = "https://peaceful-dusk-44249.herokuapp.com/reviews";
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(Review),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                toast.success("Review Added succsessfully");
                navigate("/dashboard");
            })
            .catch((error) => {
                toast.error(error);
            });
    };
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form action="" onSubmit={handleReview}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="title"
                                    className="input input-bordered"
                                    name="title"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Review</span>
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Your Review"
                                    className="textarea textarea-bordered"
                                    name="review"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Stars</span>
                                </label>
                                <select
                                    name="star"
                                    className="select select-bordered w-full max-w-xs"
                                >
                                    <option selected>1 Star</option>
                                    <option>2 Star</option>
                                    <option>3 Star</option>
                                    <option>4 Star</option>
                                    <option>5 Star</option>
                                </select>
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className="btn" value="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;