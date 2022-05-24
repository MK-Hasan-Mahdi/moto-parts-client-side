import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='text-center'>
            <h2 className='text-5xl m-4 py-4'>Our Business Summary</h2>
            <div class="stats stats-vertical lg:stats-horizontal shadow w-full">

                <div class="stat">
                    <div class="stat-title">Our Clients</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-title">New Users</div>
                    <div class="stat-value text-secondary">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;





