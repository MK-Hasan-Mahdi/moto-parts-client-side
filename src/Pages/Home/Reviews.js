import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviewes, setReviewes] = useState([]);

    useEffect(() => {
        fetch("https://peaceful-dusk-44249.herokuapp.com/reviews")
            .then(res => res.json())
            .then(res => {
                setReviewes(res);
            });
    }, [])
    // console.log(reviewes);

    return (
        <div>
            <div className=" bg-black py-10">

                <div className='mid-container mx-auto'>
                    <h2 className='text-4xl text-center font-bold'>Happy Client Reviews</h2>
                    <div className="grid mx-5 lg:mx-auto lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-7xl">
                        {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center  mx-auto gap-10 my-10 px-3 py-3 rounded"> */}
                        {
                            reviewes.map(review => <Review
                                key={review._id}
                                review={review}
                            ></Review>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;