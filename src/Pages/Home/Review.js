import React from 'react';
// import { CgProfile } from "react-icons/cg";
// import { BsStarFill } from "react-icons/bs";
// import { Rating } from "flowbite-react";

const Review = ({ review }) => {
    const { email, userName, title, userReview, ratings, img, reviewDate } = review;
    let ratingArr = [];
    let count = 1;
    for (let i = 1; i <= 5; i++) {
        if (count <= ratings) {
            ratingArr.push(true)
            count = count + 1;
        }
        else {
            ratingArr.push(false);
        }
    }
    return (
        <div>
            <div className="max-w-sm shadow-md dark:bg-gray-800 md:h-80 py-1 px-3 bg-gray-100 rounded-lg ">
                <div className='flex flex-col items-center pb-10'>
                    <img className='mb-3 w-24 rounded-full shadow-lg' src={img} alt="userimage" />
                    <div className="mb-5">
                        <h5 className='mb-1 font-medium text-gray-900 dark:text-white text-xl'>Name: {userName}</h5>
                        <p className='text-sm leading'>Title: {title}</p>
                        <p className='text-sm leading'>Email: {email}</p>
                        <p className='leading text-sm'>Date: {reviewDate}</p>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" checked={ratings == 1 ? 'checked' : ''} className="mask mask-star  bg-orange-400" />
                            <input checked={ratings == 2 ? 'checked' : ''} type="radio" name="rating-2" className="mask mask-star  bg-orange-400" />
                            <input checked={ratings == 3 ? 'checked' : ''} type="radio" name="rating-2" className="mask mask-star  bg-orange-400" />
                            <input checked={ratings == 4 ? 'checked' : ''} type="radio" name="rating-2" className="mask mask-star  bg-orange-400" />
                            <input checked={ratings == 5 ? 'checked' : ''} type="radio" name="rating-2" className="mask mask-star  bg-orange-400" />
                        </div>
                    </div>
                    <h2 className="text-xl text-gray-600">
                        Review: {userReview}
                    </h2>
                    {/* <h3 className="text-lg font-bold mb-2">
                        {ratings}
                    </h3> */}
                    {/* <div className="flex">
                        <h1>Ratings: </h1>
                        <Rating>
                            {
                                ratingArr.map(el => <Rating.Star filled={el} />)
                            }
                            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                {ratings} out of 5
                            </p>
                        </Rating>
                    </div> */}



                </div>
            </div>
        </div>
    );
};

export default Review;