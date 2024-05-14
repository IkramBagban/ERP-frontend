import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import MainPagetitle from '../../../layouts/MainPagetitle';
import { IMAGES } from '../../../constant/theme';
import { Modal } from 'react-bootstrap';

const basicDetails = [
    {name: 'Email', subtitle:'demo123@gmail.com'},
    {name: 'Phone', subtitle:'+91 12345647890'},
    {name: 'Date of birth', subtitle:'13 June 1996'},
    {name: 'Position', subtitle:'Computer Engineer'},
];
const cardData = [
    {title:"Name", subtitle:"Henry Saiplay"},
    {title:"Number", subtitle:"1234 5678 9101 1213"},
    {title:"Expires", subtitle:"11/2023"},
    {title:"Type", subtitle:"Master Card"},
    {title:"Issuer", subtitle:"IDBF"},
    {title:"Id", subtitle:"1-85222gfgvv52"},
];
const cardData2 = [
    {title:'Billing Address', subtitle:'USA'},
    {title:'Phone', subtitle:'+01 123 456 789 0'},
    {title:'Email', subtitle:'demo@gmail.com'},
    {title:'Origin', subtitle:'Uk'},
    {title:'CVC Check', subtitle:'Done'},
];
const account = [
    {title:'Account ID', subtitle:'#5-658A555c'},
    {title:'Billing Email', subtitle:'demo@gmail.com'},
    {title:'Billing Address', subtitle:'Po.123 USA'},
    {title:'Language', subtitle:'English'},
    {title:'Tax ID', subtitle:'W3-52325'},
];

const tableData = [
   {id:"#5521452", Product:"Google Chrome", Status:'Pending', Date:'12 February 2022', Amount:'900'},
   {id:"#5454421", Product:"Salesforce CRM", Status:'Inprogress', Date:'13 March 2023', Amount:'500'},
   {id:"#5454422", Product:"Shopify eCommerce", Status:'Completed', Date:'13 March 2023', Amount:'700'},
   {id:"#5857455", Product:"Slack collaboration platform", Status:'Inprogress', Date:'24 June 2023', Amount:'800'},
   {id:"#5857460", Product:"Slack collaboration platform", Status:'Inprogress', Date:'24 April 2023', Amount:'800'},
   {id:"#5454422", Product:"Shopify eCommerce", Status:'Pending', Date:'13 March 2023', Amount:'700'},
]   

const CustomerProfile = () => {
    const [data, setData] = useState(
        document.querySelectorAll("#customer-tblwrapper tbody tr")
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
        setData(document.querySelectorAll("#customer-tblwrapper tbody tr"));
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
    const [editModal, setEditModal] = useState();
    return (
        <>
            <MainPagetitle mainTitle={'Apps'} pageTitle={'Profle'} parentTitle={'Customer'} />   
            <div className="container-fluid">
				<div className="row">
					<div className="col-xl-3">
						<div className="card h-auto">
							<div className="card-body">
								<div className="c-profile text-center">
									<img src={IMAGES.User} className="rounded-circle mb-2" alt="" />
									<h4>Thomas Fleming</h4>
								</div>
								<div className="c-details">
									<ul>
                                        {basicDetails.map((item, index)=>(
                                            <li key={index}>
                                                <span>{item.name}</span>
                                                <p>{item.subtitle}</p>
                                            </li>
                                        ))}										
									</ul>
								</div>
								<span className="mt-3 d-block">Social</span>
								<ul className="c-social">
									<li><a href={"https://www.facebook.com/dexignzone"}  rel="noreferrer" target="_blank" className="bg-facebook"><i className="fa-brands fa-facebook-f"></i></a></li>
									<li><a href={"https://www.whatsapp.com/"}  rel="noreferrer" className="bg-whatsapp" target="_blank"><i className="fa-brands fa-whatsapp"></i></a></li>
									<li><a href={"https://www.linkedin.com/in/dexignzone"}  rel="noreferrer" target="_blank" className="bg-linkedin"><i className="fa-brands fa-linkedin-in"></i></a></li>
									<li><a href={"skype:rahulxarma?chat"} className="bg-skype"><i className="fa-brands fa-skype"></i></a></li>
								</ul>
								<div className="d-flex mt-4 justify-content-end">
									<Link to={"#"} className="btn btn-danger btn-sm light me-2">
                                        <i className="fa-solid fa-trash me-1" />
                                        <span>Delete</span>
                                    </Link>
									<button type="button" className="modal-btn btn btn-primary btn-sm  ms-2 " onClick={()=>setEditModal(true)}>
										<i className="fa-solid fa-pen-to-square me-1" />{" "}
										<span>Edit </span>
									</button>
								</div>
							</div>
						</div>
					</div>
                    <div className='col-xl-9'>
                        <h4 className="heading">Membership</h4>
						<div className="card h-auto">
							<div className="card-body d-flex align-items-center justify-content-between flex-wrap">
								<div className="d-flex align-items-center c-busiess">
									<img src={IMAGES.Econimics} className="avatar" alt="" />
									<div>
										<h5 className="mb-0">Business board pro<span className="badge badge-danger badge-xs ms-1">Active</span></h5>
										<span>Billing monthly | Next payment on 15/02/2023for$590.40</span>
									</div>
								</div>
								<div>
									<Link to={"#"} className="btn btn-light btn-sm me-2">Cancel plan</Link>
									<Link to={"#"} className="btn btn-primary btn-sm ms-2">Update plan</Link>
								</div>
							</div>                            
						</div>
                        <div className="card h-auto">
                            <div className="card-header py-3">
                                <h4 className="heading mb-0">Payment History</h4>
                            </div>	
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div id="customer-tblwrapper" className="dataTables_wrapper no-footer">
                                        <table id="empoloyees-tbl1" className="table ItemsCheckboxSec dataTable no-footer mb-0">
                                            <thead>
                                                <tr>
                                                    <th>REFERENCE</th>
                                                    <th>PRODUCT</th>
                                                    <th>STATUS</th>
                                                    <th>DATE</th>
                                                    <th>AMOUNT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tableData.map((item, index)=>(
                                                    <tr key={index}>
                                                        <td><span>{item.id}</span></td>
                                                        <td>
                                                            <span>{item.Product}</span>
                                                        </td>
                                                        <td><span className={`badge light border-0 ${item.Status==="Pending" ? 'badge-danger' : item.Status==="Completed" ? 'badge-success' : 'badge-primary' }`}>
                                                            {item.Status}
                                                        </span></td>
                                                        <td>
                                                            <span>{item.Date}</span>
                                                        </td>
                                                        <td>
                                                            <span>${item.amount}</span>
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
                                                    to="/customer-profile"
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
                                                        to="/customer-profile"
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
                                                    to="/customer-profile"
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
                    <div className="col-xl-9 col-xxl-8">
						<div className="card">
							<div className="card-header border-0">
								<h4 className="heading mb-0">Payment Methods</h4>
							</div>
							<div className="card-body pt-0">
								<div className="row">
									<div className="col-xl-4 col-lg-4">
										<img src={IMAGES.Credit} alt="" className="w-100" />
									</div>
									<div className="col-xl-8 col-lg-8">
										<div className="row">
											<div className="col-xl-6 col-lg-6">
												<div className="c-card-details">
													<ul>
                                                        {cardData.map((item, ind)=>(
                                                            <li key={ind}>
                                                                <h6>{item.title} :</h6>
                                                                <span className='ms-1'>{item.subtitle}</span>
                                                            </li>
                                                        ))}														
													</ul>
												</div>
											</div>
											<div className="col-xl-6 col-lg-6">
												<div className="c-card-details">
													<ul>
                                                        {cardData2.map((item, ind)=>(
                                                            <li key={ind}>
                                                                <h6>{item.title} :</h6>
                                                                <span className='ms-1'>{item.subtitle} </span>
                                                            </li>
                                                        ))}														
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                    <div className="col-xl-3 col-xxl-4">
						<div className="card">
							<div className="card-header border-0">
								<h4 className="heading mb-0">Premium user</h4>
							</div>
							<div className="card-body pt-0">
								<div className="c-work">
									<div className="c-task bg-primary">
										<p>Earnings<i className="fa-solid fa-arrow-down ms-2"></i></p>
										<span>$50,585</span>
									</div>
									<div className="c-task bg-success">
										<p>Project <i className="fa-solid fa-arrow-up ms-2"></i></p>
										<span>415</span>
									</div>
									<div className="c-task bg-secondary">
										<p>Hours <i className="fa-solid fa-arrow-up ms-2"></i></p>
										<span>200</span>
									</div>
								</div>
								<ul className="c-primium"> 
                                    {account.map((item, ind)=>(
                                        <li key={ind}>
                                            <h6>{item.title}</h6>
                                            <span>{item.subtitle}</span>
                                        </li>
                                    ))}									
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
            <Modal className="modal fade" id="exampleModal3" show={editModal} onHide={setEditModal} centered>                
                <div className="modal-content">
                    <div className="modal-header ">
                        <h5 className="modal-title">Edit Your Profile</h5>
                        <button type="button" className="btn-close" onClick={()=>setEditModal(false)}></button>
                    </div>
                    <div className="modal-body">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control mb-3" id="exampleInputEmail7"  placeholder="Enter email" />
                        <label className="form-label">Phone</label>                    
                        <input type="number" className="form-control mb-3" id="exampleInputEmail8"  placeholder="Enter No." />
                        <label className="form-label">Date Of Birth</label>                    
                        <input type="date" className="form-control mb-3" id="exampleInputEmail8"  placeholder="Enter No." />
                        <label className="form-label">Position</label>                           
                        <input type="text" className="form-control mb-3" id="exampleInputEmail9"  placeholder="Enter Position" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger light btn-sm" onClick={()=>setEditModal(false)}>Close</button>
                        <button type="button" className="btn btn-primary btn-sm">Save changes</button>
                    </div>
                </div>                
            </Modal>
        </>
    );
};

export default CustomerProfile;