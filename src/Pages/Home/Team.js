import React from 'react';
import { SiTwitter } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import team1 from '../../assets/team/team-1.jpg';
import team3 from '../../assets/team/team-3.jpg';
import team4 from '../../assets/team/team-4.png';

const Team = () => {
    return (
        <div>
            <div className="max-w-screen-xl px-4 mx-auto md:px-8 pt-10 pb-10 lg:pt-20 lg:pb-20">
                <div className="mb-10 md:mb-16">
                    <h2
                        className="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6"
                    >
                        Our Team Members
                    </h2>

                    <p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
                        perspiciatis omnis aspernatur impedit vel, consectetur laudantium nulla et
                        aliqua
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 shadow">
                        <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                            <img src={team1}

                                alt=""
                                className="object-cover object-center w-full h-full"
                            />
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <div className="font-bold text-indigo-500 md:text-lg">John Doe</div>
                            <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
                                Founder / CEO
                            </p>


                            <div className="social flex">
                                <div className='flex gap-4'>
                                    <span> <SiTwitter></SiTwitter> </span>
                                    <span><FaFacebookF></FaFacebookF></span>
                                    <span><SiLinkedin></SiLinkedin></span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="p-4 shadow">
                        <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                            <img src={team3}

                                alt=""
                                className="object-cover object-center w-full h-full"
                            />
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <div className="font-bold text-indigo-500 md:text-lg">John Doe</div>
                            <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
                                Web Developer
                            </p>
                            <div className="social flex">
                                <div className='flex gap-4'>
                                    <span> <SiTwitter></SiTwitter> </span>
                                    <span><FaFacebookF></FaFacebookF></span>
                                    <span><SiLinkedin></SiLinkedin></span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="p-4 shadow">
                        <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                            <img src={team4}

                                alt=""
                                className="object-cover object-center w-full h-full"
                            />
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <div className="font-bold text-indigo-500 md:text-lg">Scarlet</div>
                            <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
                                Devops Engineer
                            </p>
                            <div className="social flex">
                                <div className='flex gap-4'>
                                    <span> <SiTwitter></SiTwitter> </span>
                                    <span><FaFacebookF></FaFacebookF></span>
                                    <span><SiLinkedin></SiLinkedin></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;