import React from 'react';

import DepositlineChart from './DepositlineChart';
import AllProjectDonutChart from './AllProjectDonutChart';
import { SVGICON } from '../../../constant/theme';

const CardWidget = () => {
    return (
        <>
            <div className="col-xl-3 col-sm-6">
                <div className="card chart-grd same-card">
                    <div className="card-body depostit-card p-0">
                        <div className="depostit-card-media d-flex justify-content-between pb-0">
                            <div>
                                <h6>Total Deposit</h6>
                                <h3>$1200.00</h3>
                            </div>
                            <div className="icon-box bg-primary-light">
                                {SVGICON.DollerPrimary}
                            </div>
                        </div>                        
                        <DepositlineChart chartcolor="var(--primary)" />
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6">
                <div className="card same-card">
                    <div className="card-body d-flex align-items-center  py-2">                        
                        <AllProjectDonutChart />
                        <ul className="project-list">
                            <li><h6>All Projects</h6></li>
                            <li>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="10" height="10" rx="3" fill="#3AC977"/>
                                </svg>{" "}
                                Compete
                            </li>
                            <li>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="10" height="10" rx="3" fill="var(--primary)"/>
                                </svg>{" "}
                                Pending
                            </li>
                            <li>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="10" height="10" rx="3" fill="var(--secondary)"/>
                                </svg>{" "}
                                Not Start
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6">
                <div className="card chart-grd same-card">
                    <div className="card-body depostit-card p-0">
                        <div className="depostit-card-media d-flex justify-content-between pb-0">
                            <div>
                                <h6>Total Expenses</h6>
                                <h3>$1200.00</h3>
                            </div>
                            <div className="icon-box bg-danger-light">
                                {SVGICON.DollerRed}
                            </div>
                        </div>
                        <DepositlineChart chartcolor="#FF5E5E" />
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 same-card">
                <div className="card">
                    <div className="card-body depostit-card">
                        <div className="depostit-card-media d-flex justify-content-between style-1">
                            <div>
                                <h6>Total Deposit</h6>
                                <h3>20</h3>
                            </div>
                            <div className="icon-box bg-primary-light">
                                {SVGICON.CalendarList}
                            </div>
                        </div>
                        <div className="progress-box mt-0">
                            <div className="d-flex justify-content-between">
                                <p className="mb-0">Tasks Not Finished</p>
                                <p className="mb-0">20/28</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-primary" style={{width:"50%", height:"5px", borderRadius:"4px"}} ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardWidget;