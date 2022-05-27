import React from 'react';

const Review = ({ review }) => {
    // const { user, review, ratings } = review;
    return (
        <div>
            <div className="p-6 bg-gray-100 rounded-lg">
                <div className="mb-5">


                    <h2 className='text-2xl'>{review.title}</h2>


                </div>
                {/* <h2 className="card-title">{review.user}</h2> */}
                <h3 className="text-lg font-bold mb-2">
                    {review.star}
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                    {review.review}
                </p>
            </div>
        </div>
    );
};

export default Review;