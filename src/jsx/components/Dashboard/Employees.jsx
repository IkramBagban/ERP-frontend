import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { CSVLink } from 'react-csv';

import { IMAGES } from '../../constant/theme';
import MainPagetitle from '../../layouts/MainPagetitle';
import InviteCustomer from '../../constant/ModalList';
import EmployeeOffcanvas from '../../constant/EmployeeOffcanvas';

const tableData = [
    {emplid: '1001', department: 'Computer Science', image:IMAGES.contact1, contact:'+91 123 456 7890',status:'Active' ,title: 'Ricky Antony', email: 'ra@gmail.com', gender:'Female', location:'India'},    
    {emplid: '1002', department: 'Computer Science', image:IMAGES.contact2, contact:'+91 123 456 7890',status:'Inactive' ,title: 'Ankites Risher', email: 'abc@gmail.com', gender:'Male', location:'Brazil'},    
    {emplid: '1003', department: 'Computer Science', image:IMAGES.contact3, contact:'+91 123 456 7890',status:'Active' ,title: 'Ricky M', email: 'pqr@gmail.com', gender:'Male', location:'France'},    
    {emplid: '1004', department: 'Computer Science', image:IMAGES.contact1, contact:'+91 123 456 7890',status:'Active' ,title: 'Elijah James', email: 'stuy@gmail.com', gender:'Female', location:'Dubai'},    
    {emplid: '1005', department: 'Computer Science', image:IMAGES.contact2, contact:'+91 123 456 7890',status:'Inactive' ,title: 'Honey Risher', email: 'xyz@gmail.com', gender:'Male', location:'USA'},    
    {emplid: '1006', department: 'Computer Science', image:IMAGES.contact2, contact:'+91 123 456 7890',status:'Active' ,title: 'Honey Risher', email: 'xyz@gmail.com', gender:'Male', location:'USA'},    
    {emplid: '1007', department: 'Computer Science', image:IMAGES.contact2, contact:'+91 123 456 7890',status:'Inactive' ,title: 'Ankites Risher', email: 'abc@gmail.com', gender:'Male', location:'Brazil'},    
    {emplid: '1008', department: 'Computer Science', image:IMAGES.contact3, contact:'+91 123 456 7890',status:'Active' ,title: 'Ricky M', email: 'pqr@gmail.com', gender:'Male', location:'France'},    
    {emplid: '1009', department: 'Computer Science', image:IMAGES.contact1, contact:'+91 123 456 7890',status:'Inactive' ,title: 'Ricky Antony', email: 'ra@gmail.com', gender:'Female', location:'India'},    
    {emplid: '1010', department: 'Computer Science', image:IMAGES.contact1, contact:'+91 123 456 7890',status:'Active' ,title: 'Elijah James', email: 'stuy@gmail.com', gender:'Female', location:'Dubai'},    
    {emplid: '1011', department: 'Computer Science', image:IMAGES.contact2, contact:'+91 123 456 7890',status:'Inactive' ,title: 'Ankites Risher', email: 'abc@gmail.com', gender:'Male', location:'Brazil'},    
    {emplid: '1012', department: 'Computer Science', image:IMAGES.contact1, contact:'+91 123 456 7890',status:'Active' ,title: 'Ricky Antony', email: 'ra@gmail.com', gender:'Female', location:'India'},    
];

const headers = [
    { label: "Employee ID", key: "emplid" },
    { label: "Employee Name", key: "title" },
    { label: "Department", key: "department" },
    { label: "Email Address", key: "email" },
    { label: "Contact Number", key: "contact" },
    { label: "Gender", key: "gender" },
    { label: "Location", key: "location" },
    { label: "Status", key: "status" },
]

const csvlink = {
    headers : headers,
    data : tableData,
    filename: "csvfile.csv"
}

const Employees = () => {  
    const [data, setData] = useState(
		document.querySelectorAll("#employee-tbl_wrapper tbody tr")
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
      setData(document.querySelectorAll("#employee-tbl_wrapper tbody tr"));
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
   
    const invite = useRef();
    const employe = useRef();
    return (
        <>
            <MainPagetitle mainTitle="Employee" pageTitle={'Employee'} parentTitle={'Home'} />  
            <div className="container-fluid">
				<div className="row">
			    	<div className="col-xl-12">
                        <div className="card">            
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1 ItemsCheckboxSec shorting">   
                                    <div className="tbl-caption d-flex justify-content-between text-wrap align-items-center">
                                        <h4 className="heading mb-0">Employees</h4>                                        
                                        <div>
                                            <CSVLink {...csvlink} className="btn btn-primary light btn-sm me-1">
                                                <i className="fa-solid fa-file-excel" /> {" "} 
                                                Export Report
                                            </CSVLink> 
                                            <Link to={"#"} className="btn btn-primary btn-sm ms-1" data-bs-toggle="offcanvas"                                            
                                                onClick={()=>employe.current.showEmployeModal()}
                                            >+ Add Employee</Link> {" "}
                                            <button type="button" className="btn btn-secondary btn-sm"                                                 
                                                onClick={() => invite.current.showInviteModal()}
                                            >+ Invite Employee
                                            </button>
                                        </div>
                                    </div>          
                                    <div id="employee-tbl_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="empoloyees-tblwrapper" className="table ItemsCheckboxSec dataTable no-footer mb-0">
                                            <thead>
                                                <tr>                                                   
                                                    <th>Employee ID</th>
                                                    <th>Employee Name</th>
                                                    <th>Department</th>
                                                    <th>Email Address</th>
                                                    <th>Contact Number</th>
                                                    <th>Gender</th>
                                                    <th>Location</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tableData.map((item, index)=>(
                                                    <tr key={index}>                                                       
                                                        <td><span>{item.emplid}</span></td>
                                                        <td>
                                                            <div className="products">
                                                                <img src={item.image}  className="avatar avatar-md" alt="" />
                                                                <div>
                                                                    <h6>{item.title}</h6>
                                                                    <span>Web Designer</span>	
                                                                </div>	
                                                            </div>
                                                        </td>
                                                        <td><span>{item.department}</span></td>
                                                        <td><span className="text-primary">{item.email}</span></td>
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
                                                            <span className={`badge light border-0 ${item.status==="Active" ? 'badge-success' : 'badge-danger'} `}>{item.status}</span>
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
                                                    to="/employee"
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
                                                        to="/employee"
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
                                                    to="/employee"
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
            <EmployeeOffcanvas 
                ref={employe}
                Title="Add Employee"
            />
            <InviteCustomer
                ref={invite}       
                Title="Invite Employee"
            />
        </>
    );
};

export default Employees;