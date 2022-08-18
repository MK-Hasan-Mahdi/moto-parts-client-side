import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user, loading, errorHook] = useAuthState(auth);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const formData = new FormData();
        const Review = {
            email: user.email,
            title: data.title,
            review: data.review,
            star: data.star,
        };
        const url = "https://peaceful-dusk-44249.herokuapp.com/reviews";
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(Review),
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    // const handleReview = (event) => {
    //     event.preventDefault();
    //     const Review = {
    //         email: user.email,
    //         title: event.target.title.value,
    //         review: event.target.review.value,
    //         star: event.target.star.value,
    //     };
    //     const url = "https://peaceful-dusk-44249.herokuapp.com/reviews";
    //     fetch(url, {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify(Review),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             // console.log(data);
    //             toast.success("Review Added succsessfully");
    //             navigate("/dashboard");
    //         })
    //         .catch((error) => {
    //             toast.error(error);
    //         });
    // };
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input
                                    {...register("title", {
                                        required: {
                                            value: true,
                                            message: "Title is Required"
                                        },
                                    })
                                    }
                                    type="text"
                                    placeholder="Enter Title"
                                    className="input input-bordered" />
                                <label className="label">
                                    {errors.title?.type === 'required' && <span className="label-text-alt text-warning">{errors.title?.message}</span>}

                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Review</span>
                                </label>
                                <textarea
                                    {...register('review', {
                                        required: {
                                            value: true,
                                            message: "Review is required"
                                        },
                                    })}
                                    type="text"
                                    placeholder="Your Review"
                                    className="textarea textarea-bordered"
                                    name="review"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ratings</span>
                                </label>
                                <select
                                    {...register("star", {
                                        required: {
                                            value: true,
                                            message: "Ratings is required"
                                        },
                                    })}
                                    type="text"
                                    name="star"
                                    className="select select-bordered w-full max-w-xs">
                                    <option value="" selected>1 Star</option>
                                    <option value="2">2 Star</option>
                                    <option value="3">3 Star</option>
                                    <option value="4">4 Star</option>
                                    <option value="5">5 Star</option>
                                </select>
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-secondary font-bold" value="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;