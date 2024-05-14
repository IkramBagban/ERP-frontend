import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const eventData = [
    {title:'Development planning' },
    {title:'Development planning'},
    {title:'Development planning', bord:'border-0'}
];

const UpcomingBlog = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className="card">
                <div className="card-header border-0 pb-1">
                    <h4 className="heading mb-0">Upcoming Schedules</h4>
                </div>
                <div className="card-body schedules-cal p-2 dz-calender">
                    <DatePicker selected={startDate} className="form-control" 
                        onChange={(date) => setStartDate(date)}
                        dateFormat="MM-dd-yyyy"
                        inline
                    />    
                    <div className="events">
                        <h6>events</h6>
                        <div className="dz-scroll event-scroll">
                            {eventData.map((item, index)=>(
                                <div className={`event-media ${item.bord}`} key={index}>
                                    <div className="d-flex align-items-center">
                                        <div className="event-box">
                                            <h5 className="mb-0">20</h5>
                                            <span>Mon</span>
                                        </div>
                                        <div className="event-data ms-2">
                                            <h5 className="mb-0"><Link to={"#"}>{item.title}</Link></h5>
                                            <span>w3it Technologies</span>
                                        </div>
                                    </div>
                                    <span className="text-secondary">12:05 PM</span>
                                </div>
                            ))}                            
                        </div>	
                    </div>
                </div>
            </div>  
        </>
    );
};

export default UpcomingBlog;