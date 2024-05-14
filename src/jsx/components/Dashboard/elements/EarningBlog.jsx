import React from 'react';
import EarningChart from './EarningChart';

const EarningBlog = () => {
    return (
        <>
            <div className="card">
                <div className="card-header border-0 pb-0">
                    <h4 className="heading mb-0">Total Earning</h4>
                </div>                
                <EarningChart />
            </div>
        </>
    );
};

export default EarningBlog;