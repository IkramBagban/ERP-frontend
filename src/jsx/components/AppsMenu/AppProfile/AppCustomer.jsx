import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { CSVLink } from 'react-csv';
import MainPagetitle from '../../../layouts/MainPagetitle';
import { IMAGES } from '../../../constant/theme';
import EmployeeOffcanvas from '../../../constant/EmployeeOffcanvas';

const tableData = [
    {custid:'001', subtitle:'Web Designer', image:IMAGES.contact1, name:'Biam Lucas', email:'demo1@gmail.com',contact:'+1 123 456 7890', gender: 'Male' , location : 'USA', status:'Active' },  
    {custid:'002', subtitle:'Web Designer', image:IMAGES.contact2, name:'Hrayson Leo', email:'demo2@gmail.com',contact:'+1 123 456 7890', gender: 'Female' , location : 'UK', status:'Active' },  
    {custid:'007', subtitle:'Web Designer', image:IMAGES.contact3, name:'Jack Luca', email:'demo3@gmail.com',contact:'+1 123 456 7890', gender: 'Male' , location : 'NYC', status:'Pending' },  
    {custid:'004', subtitle:'Web Designer', image:IMAGES.contact2, name:'Crayson Leo', email:'demo4@gmail.com', contact:'+1 123 456 7890', gender: 'Female' , location : 'USA', status:'Active' },
    {custid:'041', subtitle:'Web Designer', image:IMAGES.contact5, name:'Sack Luca', email:'demo5@gmail.com',contact:'+1 123 456 7890', gender: 'Male' , location : 'USA', status:'Active' },  
    {custid:'052', subtitle:'Web Designer', image:IMAGES.contact7, name:'Pogan Liam', email:'demo6@gmail.com',contact:'+1 123 456 7890', gender: 'Female' , location : 'UK', status:'Pending' },  
    {custid:'006', subtitle:'Web Designer', image:IMAGES.contact1, name:'Benjamin William', email:'demo7@gmail.com',contact:'+1 123 456 7890', gender: 'Female' , location : 'NYC', status:'Active' },
    {custid:'008', subtitle:'Web Designer', image:IMAGES.contact2, name:'Ethan Lucas', email:'demo1@gmail.com',contact:'+1 123 456 7890', gender: 'Male' , location : 'USA', status:'Active' },  
    {custid:'011', subtitle:'Web Designer', image:IMAGES.contact7, name:'Mrayson Levi', email:'demo2@gmail.com',contact:'+1 123 456 7890', gender: 'Male' , location : 'NYC', status:'Pending' },  
    {custid:'022', subtitle:'Web Designer', image:IMAGES.contact5, name:'Nack Luca', email:'demo3@gmail.com',contact:'+1 123 456 7890', gender: 'Female' , location : 'UK', status:'Active' },  
    {custid:'031', subtitle:'Web Designer', image:IMAGES.contact2, name:'Logan Liam', email:'demo7@gmail.com',contact:'+1 123 456 7890', gender: 'Male' , location : 'USA', status:'Pending' },  
    {custid:'065', subtitle:'Web Designer', image:IMAGES.contact5, name:'Lenjamin William', email:'demo8@gmail.com', contact:'+1 123 456 7890', gender: 'Female' , location : 'NYC', status:'Active' },  
    {custid:'036', subtitle:'Web Designer', image:IMAGES.contact7, name:'Theodore William', email:'demo10@gmail.com',contact:'+1 123 456 7890', gender: 'Male' , location : 'UK', status:'Pending' },  
];

const headersTitle = [

    {label:'Customer Id', key:'custid'}, 
    {label:'Name', key:'name'}, 
    {label:'Designation', key:'subtitle'}, 
    {label:'Email Address', key:'email'}, 
    {label:'Contact Number', key:'contact'}, 
    {label:'Gender', key:'gender'}, 
    {label:'Location', key:'location'}, 
    {label:'Status', key:'status'}, 
]

const csvlink = {
    headers : headersTitle,
    data : tableData,
    filename: "csvfile.csv"
}


const AppCustomer = () => {
    const custom = useRef();
    const [data, setData] = useState(
		document.querySelectorAll("#contacts-tbl_wrapper tbody tr")
	);
	const sort = 9;
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
      setData(document.querySelectorAll("#contacts-tbl_wrapper tbody tr"));
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
   
	const checkbox = document.querySelectorAll(".sorting_2 input");
	const motherCheckBox = document.querySelector(".sorting_asc_1 input");
        const checkboxFun = (type) => {
        for (let i = 0; i < checkbox.length; i++) {
            const element = checkbox[i];
            if (type === "all") {
                if (motherCheckBox.checked) {
                    element.checked = true;
                } else {
                 element.checked = false;
                }
            } else {
                if (!element.checked) {
                motherCheckBox.checked = false;
                break;
                } else {
                    motherCheckBox.checked = true;
                }
            }
        }
    };
    return (
        <>
            <MainPagetitle mainTitle={'Dashboard'} pageTitle={'Customer'} parentTitle={'Customers'} />  
            <div className="container-fluid">
				<div className="row">
					<div className="col-xl-12 bst-seller">
						<div className="d-flex align-items-center justify-content-between mb-4">
							<h4 className="heading mb-0">Customer</h4>
							<div className="d-flex align-items-center">
                                <button type="button" className="btn btn-primary btn-sm me-2"><i className="fa-solid fa-filter me-2"></i>Filter</button>
								<Link to={"#"} className="btn btn-primary btn-sm ms-2" data-bs-toggle="offcanvas"
                                    onClick={()=>custom.current.showEmployeModal()}
                                >
                                    + Add Customer
                                </Link>
								
							</div>
						</div>
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1 dt-filter exports">
                                    <div className="tbl-caption">
                                        
                                        <div>
                                            <CSVLink {...csvlink} className="btn btn-primary light btn-sm me-2"><i className="fa-solid fa-file-excel" /> Export Report</CSVLink> 
                                        </div>
									</div>
                                    <div id="contacts-tbl_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="customer-tbl" className="table shorting">
                                            <thead>
                                                <tr>
                                                    <th className="sorting_asc_1" >
                                                        <div className="form-check custom-checkbox ms-0">
                                                            <input type="checkbox" className="form-check-input checkAllInput" required="" 
                                                                onClick={() => checkboxFun("all")}
                                                            />
                                                            <label className="form-check-label" htmlFor="checkAll"></label>
                                                        </div>
                                                    </th>
                                                    <th>Customer ID</th>
                                                    <th>Customer Name</th>
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
                                                        <td className="sorting_2">
                                                            <div className="form-check11custom-checkbox">
                                                                <input type="checkbox" className="form-check-input" 
                                                                    id={`custome${index+151}`} required="" 
                                                                    onClick={() => checkboxFun()}
                                                                />
                                                                <label className="form-check-label" htmlFor={`custome${index+151}`}></label>
                                                            </div>
                                                        </td>
                                                        <td><span>001</span></td>
                                                        <td>
                                                            <div className="products">
                                                                <img src={item.image} className="avatar avatar-md" alt="" />
                                                                <div>
                                                                    <h6><Link to={"/app-profile-2"}>{item.name}</Link></h6>
                                                                    <span>{item.subtitle}</span>	
                                                                </div>	
                                                            </div>
                                                        </td>
                                                        <td><Link to={"#"} className="text-primary">{item.email}</Link></td>
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
                                                            <span className={`badge light border-0 badge-${item.status === "Active" ? 'success' : 'danger' }`}>{item.status}</span>
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
                                                    to="/customer"
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
                                                        to="/customer"
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
                                                    to="/customer"
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
                ref={custom}
                Title="Add Customer"
            /> 
        </>
    );
};

export default AppCustomer;