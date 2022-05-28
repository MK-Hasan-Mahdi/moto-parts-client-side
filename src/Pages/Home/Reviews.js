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
            <div className="container mx-auto sm:px-10 lg:px-20  mt-10">

                <div className=''>
                    <h2 className='text-4xl mt-20  py-4 text-center font-bold'>Happy Client Reviews</h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-10 pb-10 lg:pt-20 lg:pb-20">
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