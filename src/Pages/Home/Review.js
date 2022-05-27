import React from 'react';

const Review = ({ review }) => {
    // const { user, review, ratings } = review;
    return (
        <div>
            <div className="p-6 bg-gray-100 rounded-lg">
                <div className="mb-5">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            {/* <img src={review.img} alt='people' /> */}
                        </div>
                    </div>
                </div>
                {/* <h2 className="card-title">{review.user}</h2> */}
                <h3 className="text-lg font-bold mb-2">
                    {review.ratings}
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                    {review.review}
                </p>
            </div>
        </div>
    );
};

export default Review;