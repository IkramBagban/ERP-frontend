import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import MainPagetitle from '../../layouts/MainPagetitle';
import { CSVLink } from 'react-csv';
import { IMAGES } from '../../constant/theme';

const tableData = [
    {image: IMAGES.contact3, name: 'John Antony', designation: 'Web Designer', username: 'john.antony',  contact: '+91 123 456 7890', gender: 'Male', location : 'USA', status: 'Active'},
    {image: IMAGES.contact1, name: 'Ricky Antony', designation: 'Manager', username: 'ricky.antony',  contact: '+91 123 456 7890', gender: 'Female', location : 'UK', status: 'Inactive'},
    {image: IMAGES.contact2, name: 'John Antony', designation: 'Web Designer', username: 'john.antony',  contact: '+91 123 456 7890', gender: 'Male', location : 'USA', status: 'Active'},
    {image: IMAGES.contact1, name: 'Ricky Antony', designation: 'Manager', username: 'ricky.antony',  contact: '+91 123 456 7890', gender: 'Female', location : 'UK', status: 'Inactive'},
    {image: IMAGES.contact5, name: 'John Antony', designation: 'Web Designer', username: 'john.antony',  contact: '+91 123 456 7890', gender: 'Male', location : 'USA', status: 'Active'},
    {image: IMAGES.contact1, name: 'Ricky Antony', designation: 'Manager', username: 'ricky.antony',  contact: '+91 123 456 7890', gender: 'Female', location : 'UK', status: 'Inactive'},
    {image: IMAGES.contact3, name: 'John Antony', designation: 'Web Designer', username: 'john.antony',  contact: '+91 123 456 7890', gender: 'Male', location : 'USA', status: 'Active'},
    {image: IMAGES.contact6, name: 'Ricky Antony', designation: 'Manager', username: 'ricky.antony',  contact: '+91 123 456 7890', gender: 'Female', location : 'UK', status: 'Inactive'},
    {image: IMAGES.contact3, name: 'John Antony', designation: 'Web Designer', username: 'john.antony',  contact: '+91 123 456 7890', gender: 'Male', location : 'USA', status: 'Active'},
    {image: IMAGES.contact1, name: 'Ricky Antony', designation: 'Manager', username: 'ricky.antony',  contact: '+91 123 456 7890', gender: 'Female', location : 'UK', status: 'Inactive'},
    {image: IMAGES.contact3, name: 'John Antony', designation: 'Web Designer', username: 'john.antony',  contact: '+91 123 456 7890', gender: 'Male', location : 'USA', status: 'Active'},
    {image: IMAGES.contact1, name: 'Ricky Antony', designation: 'Manager', username: 'ricky.antony',  contact: '+91 123 456 7890', gender: 'Female', location : 'UK', status: 'Inactive'},
   
]

const headers = [
    { label: "Name", key: "name" },
    { label: "Designation", key: "designation" },
    { label: "User Name", key: "username" },
    { label: "Contact", key: "contact" },
    { label: "Gender", key: "gender" },
    { label: "Location", key: "location" },
    { label: "Status", key: "status" },
];

const csvlink = {
    headers : headers,
    data : tableData,
    filename: "csvfile.csv"
}

const ManageClient = () => {
    const [data, setData] = useState(
		document.querySelectorAll("#manage-tblwrapper tbody tr")
	);
	const sort = 10;
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
      setData(document.querySelectorAll("#manage-tblwrapper tbody tr"));
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
            <MainPagetitle mainTitle="Manage Client" pageTitle="Manage Client"  parentTitle="Home" /> 
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-xl-12">
                        <div className="card">                            
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects manage-client">   
                                    <div className="tbl-caption d-flex justify-content-between text-wrap align-items-center">
                                        <h4 className="heading mb-0">Manage Client</h4>
                                        <div>
                                            <CSVLink {...csvlink} className="btn btn-primary light btn-sm">
                                                <i className="fa-solid fa-file-excel" /> {" "} 
                                                Export Report
                                            </CSVLink> 
                                        </div>
                                        
                                    </div>          
                                    <div id="manage-tblwrapper" className="dataTables_wrapper no-footer">
                                        <table id="reports-tbl" className="table ItemsCheckboxSec dataTable no-footer mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>User Name</th>
                                                    <th>Contact</th>
                                                    <th>Gender</th>
                                                    <th>Location</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tableData.map((item, index)=>(
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="products">
                                                                <img src={item.image} className="avatar avatar-md" alt="s" />
                                                                <div>
                                                                    <h6>{item.name}</h6>
                                                                    <span>{item.designation}</span>	
                                                                </div>	
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">{item.username}</span></td>
                                                        <td>
                                                            <span>{item.contact}</span>
                                                        </td>
                                                        <td>
                                                            <span>{item.gender}</span>
                                                        </td>	
                                                        <td>
                                                            <span>{item.location}</span>
                                                        </td>
                                                        <td>
                                                            <span className={`badge light border-0 ${item.status === "Active"  ? 'badge-success': 'badge-danger'}`}>{item.status}</span>
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
                                                    to="/manage-client"
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
                                                        to="/manage-client"
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
                                                    to="/manage-client"
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageClient;