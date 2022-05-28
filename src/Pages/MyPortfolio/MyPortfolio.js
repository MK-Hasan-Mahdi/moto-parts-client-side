import React from 'react';
import hasan from '../../assets/hasan.jpg'
import projectOne from '../../assets/projectOne.png'
import projectTwo from '../../assets/projectTwo.png'
import projectThree from '../../assets/projectThree.png'

const MyPortfolio = () => {
    return (
        <>
            <div className='md:flex justify-between container mx-auto px-4 md:px-0 md:my-14'>
                <div className="auto-type flex-1">

                    <p className='text-gray-500 mt-5'>
                        I am a MERN stack web developer. I have completed Web development course from Programming Hero. Now I am looking an intern and also looking for opportunities to further develop my skills.
                    </p>
                    <p className='text-gray-500 my-3'>Skilled in HTML, CSS, Bootstrap, TailwindCSS, Javascript(ES6), and MERN (Mongo DB, Express, React, Node) stack, I also have sound knowledge of PHP and MYSQL.</p>

                    <p className='text-gray-500'>
                        I can vouch for the fact that I am a sound learner with a penchant to both learn and work; That is learning the latest relevant technologies and skills. I also bring with me some fresh ideas and I am confident you will find many of them to be quite useful and innovative.
                    </p>

                </div>

            </div>
            {/* Skills */}

            <div className="container mx-auto my-28 px-10 md:px-0">
                <div className="">
                    <div class="card  bg-base-100 shadow-xl">
                        <figure><img className='w-40' src={hasan} alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Md. Kamrul Hasan</h2>
                            <h2 class="card-title">Email: mkhasan6891@gmail.com</h2>
                            <p>Course: Complete Web Development Course With Jhankar Mahbub </p>

                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-center md:mb-10 md:my-10 my-10 text-uppercase pb-5 text-black text-4xl md:text-5xl mt-20 font-semibold custom-border-primary w-fit mx-auto uppercase shadow-sm'>Some sample of my projects</h1>
                    <div className="grid grid-cols-3">
                        <div className="mx-3">
                            <a href="https://primefactor-8a8c8.web.app/">
                                <img className='w-full ml-auto object-fill' src={projectOne} alt="" />
                            </a>
                        </div>

                        <div className="mx-3">
                            <a href="https://edu-student-e3824.web.app/">
                                <img className=' w-full ml-auto object-fill' src={projectTwo} alt="" />
                            </a>
                        </div>

                        <div className="mx-3">
                            <a href="https://epic-snyder-0c99f6.netlify.app">
                                <img className=' w-full ml-auto object-fill' src={projectThree} alt="" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
};

export default MyPortfolio;