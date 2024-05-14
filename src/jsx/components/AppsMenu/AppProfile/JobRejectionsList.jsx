import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { IMAGES } from '../../../constant/theme';

const tableData = [
    { image:IMAGES.contact1, name:'Abdullah Risher', date:'22 March 2023', lastactive:'Monday'},
    { image:IMAGES.contact2, name:'Amare mama', date:'13 May 2023', lastactive:'Tuesday'},
    { image:IMAGES.contact3, name:'Bongani Femi', date:'14 June 2023', lastactive:'Wednesday'},
    { image:IMAGES.contact5, name:'Darius Addo', date:'29 April 2023', lastactive:'Sunday'},
    { image:IMAGES.contact6, name:'Hakim Joy', date:'20 May 2023', lastactive:'Saturday'},
    { image:IMAGES.contact2, name:'Amare mama', date:'13 May 2023', lastactive:'Tuesday'},
    { image:IMAGES.contact5, name:'Darius Addo', date:'29 April 2023', lastactive:'Sunday'},
    { image:IMAGES.contact6, name:'Hakim Joy', date:'20 May 2023', lastactive:'Saturday'},
    
];

const JobRejectionsList = () => {
    const [data, setData] = useState(
		document.querySelectorAll("#rejection-tbl_wrapper tbody tr")
	);
	const sort = 5;
	const activePag = useRef(0);
	const [test, settest] = useState(0);
	const chageData = (frist, sec) => {
		for (var i = 0; i < data.length; ++i) {
			if (i >= frist && i < sec) {
				data[i].classList.remove("d-none");
			} else {
				data[i].classList.add("d-none");
			}
		}
	};
   
   useEffect(() => {
      setData(document.querySelectorAll("#rejection-tbl_wrapper tbody tr"));
	}, [test]);

   activePag.current === 0 && chageData(0, sort);
   let paggination = Array(Math.ceil(data.length / sort))
      .fill()
      .map((_, i) => i + 1);
	const onClick = (i) => {
		activePag.current = i;
		chageData(activePag.current * sort, (activePag.current + 1) * sort);
		settest(i);
	};
    return (
        <>
           
            <h4 className="heading"><i className="fas fa-times-circle text-danger me-3"></i> Rejections Resions</h4>
            <div className="card h-auto">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects active-projects ">             
                        <div id="rejection-tbl_wrapper" className="dataTables_wrapper no-footer">
                            <table id="projects-tbl" className="table ItemsCheckboxSec dataTable no-footer mb-0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date Added</th>
                                        <th>Last active</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((item, index)=>(
                                        <tr key={index}>                                            
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src={item.image} className="avatar avatar-md rounded-circle" alt="" />
                                                    <div className="ms-2">
                                                        <p className="mb-0 text-start font-w500">{item.name}</p>	
                                                        <span>demo@gmail.com</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="mb-0 font-w500">{item.date}</p>	
                                            </td>
                                            <td>
                                                <p className="mb-0 font-w500">{item.lastactive} </p>	
                                            </td>
                                            <td>
                                                <div className="action-button">
                                                    <button type="button" className="btn btn-primary btn-icon-xxs"><i className="fas fa-pencil-alt"></i></button>{" "}
                                                    <button type="button" className="btn btn-danger btn-icon-xxs"><i className="fas fa-trash-alt"></i></button>
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                
                            </table>
                            <div className="d-sm-flex text-center justify-content-between align-items-center">
                                <div className="dataTables_info">
                                    Showing {activePag.current * sort + 1} to{" "}
                                    {data.length > (activePag.current + 1) * sort
                                        ? (activePag.current + 1) * sort
                                        : data.length}{" "}
                                    of {data.length} entries
                                </div>
                                <div
                                    className="dataTables_paginate paging_simple_numbers"
                                    id="example2_paginate"
                                >
                                    <Link
                                        className="paginate_button previous disabled"
                                        to="/user-roles"
                                        onClick={() =>
                                        activePag.current > 0 &&
                                        onClick(activePag.current - 1)
                                        }
                                    >
                                        <i className="fa-solid fa-angle-left" />
                                    </Link>
                                    <span>
                                        {paggination.map((number, i) => (
                                        <Link
                                            key={i}
                                            to="/user-roles"
                                            className={`paginate_button  ${
                                                activePag.current === i ? "current" : ""
                                            } `}
                                            onClick={() => onClick(i)}
                                        >
                                            {number}
                                        </Link>
                                        ))}
                                    </span>
                                    <Link
                                        className="paginate_button next"
                                        to="/user-roles"
                                        onClick={() =>
                                        activePag.current + 1 < paggination.length &&
                                        onClick(activePag.current + 1)
                                        }
                                    >
                                        <i className="fa-solid fa-angle-right" />
                                    </Link>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default JobRejectionsList;