import React from 'react';
import { CgProfile } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
// import { BsStarFill } from "react-icons/bs";
// import { Rating } from "flowbite-react";
import dividerimg from '../../assets/quote.svg';

const Review = ({ review }) => {
    const { email, userName, title, userReview, ratings, img, reviewDate } = review;
    // let ratingArr = [];
    // let count = 1;
    // for (let i = 1; i <= 5; i++) {
    //     if (count <= ratings) {
    //         ratingArr.push(true)
    //         count = count + 1;
    //     }
    //     else {
    //         ratingArr.push(false);
    //     }
    // }
    return (
        <div>
            <div class="card card-compact overflow-visible h-auto bg-base-100 shadow-xl  mt-32">
                <div class="avatar mx-auto mt-[-50px]">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                        <img src={img} />
                    </div>
                </div>
                <div class="card-body items-center">
                    <h2 class="card-title">{userName}</h2>
                    <p>Email:{email}</p>
                    <div className="divider h-auto text-green">
                        <img className=" h-20 " src={dividerimg} alt="" />
                    </div>
                    <p>{userReview?.slice(0, 200)}</p>
                    {/* <p>Title:{title}</p> */}
                    <p>{reviewDate}</p>
                    <div class="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" checked={ratings == 1 ? 'checked' : ''} className="mask mask-star  bg-orange-400" />
                            <input checked={ratings == 2 ? 'checked' : ''} type="radio" name="rating-2" className="mask mask-star  bg-orange-400" />
                            <input checked={ratings == 3 ? 'checked' : ''} type="radio" name="rating-2" className="mask mask-star  bg-orange-400" />
                            <input checked={ratings == 4 ? 'checked' : ''} type="radio" name="rating-2" className="mask mask-star  bg-orange-400" />
                            <input checked={ratings == 5 ? 'checked' : ''} type="radio" name="rating-2" className="mask mask-star  bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Review;