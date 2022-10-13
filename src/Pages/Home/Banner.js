import React from 'react';
import bg from '../../assets/bg.png';
import rightImage from '../../assets/rightI.jpg';
import { FaTools } from 'react-icons/fa';
import { FaToolbox } from 'react-icons/fa';
import { SiProgress } from 'react-icons/si';
import { FaInstalod } from 'react-icons/fa';
import { GiAutoRepair } from 'react-icons/gi';

const Banner = () => {
    return (
        <div className='relative'>
            {/* <div className='hero h-screen lg:h-[60vh] bg-neutral-content relative z-10 '> */}
            <div className='hero h-screen lg:h-[60vh] relative z-10 ' style={{ backgroundImage: `url(${bg})` }}>
                <div class='hero-content flex-col lg:flex-row text-white'>
                    <div>
                        <p
                            data-aos='fade-right'
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            className='text-xl'
                        >
                            Best Quality
                        </p>
                        <h1
                            data-aos='fade-right'
                            data-aos-delay='400'
                            data-aos-duration='900'
                            class='text-5xl font-bold'
                        >
                            Professional Motor Parts Service
                        </h1>
                        <p
                            data-aos='fade-right'
                            data-aos-delay='600'
                            data-aos-duration='800'
                            class='py-6 max-w-xl'
                        >
                            We carry over 250 of the world's highest quality automotive parts and accessories.
                        </p>
                        <button
                            data-aos='zoom-in'
                            data-aos-delay='1300'
                            class='btn btn-secondary '
                        >
                            Get Started
                        </button>

                    </div>
                    <div className='h-[60vh] shrink-0'>
                        {/* <img src={rightImage} class='h-full' alt='' /> */}
                    </div>
                </div>
            </div>
            <div className='rounded-2xl mx-auto mt-[-50px] relative z-20 shadow-lg p-10 w-5/6' style={{ background: `rgba(24, 55, 122, 0.8)` }}>
                {/* <h1 className='text-2xl mb-5 text-black text-center'>Get Professional Experience</h1> */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className='flex justify-between items-center'>
                                <h2 className="card-title ">Accessories</h2>
                                <span className='lg:absolute lg:right-6 md:bottom-20 flex rounded-2xl shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'> <FaToolbox size={50} ></FaToolbox> </span>
                            </div>
                            <p>Quality accessories we provide. Accessories are basics to keep safe.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className='flex justify-between items-center'>
                                <h2 className="card-title">Performance</h2>
                                <span className='lg:absolute lg:right-6 md:bottom-20 flex rounded-2xl shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'> <SiProgress size={50}></SiProgress> </span>
                            </div>
                            <p>Quality accessories we provide. Accessories are basics to keep safe.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className='flex justify-between items-center'>
                                <h2 className="card-title">Replacement</h2>
                                <span className='lg:absolute lg:right-6 md:bottom-20 flex rounded-2xl shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'> <FaInstalod size={45}></FaInstalod> </span>
                            </div>
                            <p>Quality accessories we provide. Accessories are basics to keep safe.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className='flex justify-between items-center'>
                                <h2 className="card-title">Warrenty</h2>
                                <span className='lg:absolute lg:right-6 md:bottom-20 flex rounded-2xl shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'> <GiAutoRepair size={50}></GiAutoRepair> </span>
                                {/* <FaTools size={40}></FaTools> */}
                            </div>
                            <p>Quality accessories we provide. Accessories are basics to keep safe.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;


