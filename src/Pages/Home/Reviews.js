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
    console.log(reviewes);

    return (
        <div>
            <div className="bg-[#161E35] ">

                <div className='container mx-auto'>
                    <h2 className='text-4xl mt-20  py-10 text-white text-center font-bold'>Happy Client Reviews</h2>
                    <div className="grid md:grid-cols-3 md:w-[70%] justify-center items-center mx-auto gap-6 my-10 px-3 py-3 rounded">
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