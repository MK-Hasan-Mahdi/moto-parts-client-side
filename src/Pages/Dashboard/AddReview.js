import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmitReview = data => {
        const userReview = {
            review: data.review,
            ratings: data.ratings,
            user,
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(res => {
                toast.success('Thanks for Review')
                reset()
            }
            );

    }

    return (
        <div className='text-center mt-10 md:mt-0'>
            <h2>Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmitReview)}>
                <textarea className="textarea textarea-bordered w-4/5 md:w-1/2" placeholder="Your Review"
                    {...register("review", { required: true })}
                ></textarea>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <input type="text" placeholder="rating marks" className="input input-bordered w-full max-w-xs"
                        {...register("ratings",)}
                    />
                </div>

                <div className='text-center'>
                    <input type="submit" className='btn btn-primary mx-auto w-32 ' />
                </div>
            </form>
        </div>
    );
};

export default AddReview;