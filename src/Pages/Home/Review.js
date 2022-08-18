import React from 'react';

const Review = ({ review }) => {
    const { email, title, userReview, ratings, img, } = review;
    return (
        <div>
            <div className="p-6 bg-gray-100 rounded-lg ">
                <div className='flex flex-col items-center pb-10'>
                    <img className='mb-3 w-24 rounded-full shadow-lg' src={img} alt="userimage" />
                    <div className="mb-5">
                        <h2 className='text-2xl'>{title}</h2>
                        <p className='text-sm'>{email}</p>
                    </div>
                    {/* <h2 className="card-title">{review.user}</h2> */}
                    <p className="text-sm leading-6 text-gray-600">
                        {userReview}
                    </p>
                    <h3 className="text-lg font-bold mb-2">
                        {ratings}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Review;