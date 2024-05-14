import React, {useState, useRef, useEffect} from 'react';
import Select from "react-select";
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import MainPagetitle from '../../layouts/MainPagetitle';
import CoreEmployeTable from './elements/CoreEmployeTable';
import ProjectStatusBlog from './elements/ProjectStatusBlog';
import UpcomingBlog from './elements/UpcomingBlog';
import { IMAGES } from '../../constant/theme';
import { Modal } from 'react-bootstrap';

const tableHeading = [
    {numb: 1, sub:'Mo'},{numb: 2, sub:'Tu'},{numb: 3, sub:'We'},{numb: 4, sub:'Th'},{numb: 5, sub:'Fr'},
    {numb: 6, sub:'St'},{numb: 7, sub:'Su'},{numb: 8,sub:'Mo'},{numb: 9, sub:'Tu'},{numb: 10, sub:'We'},
    {numb: 11, sub:'Th'},{numb: 12, sub:'Fr'},{numb: 13, sub:'St'},{numb: 14, sub:'Su'},{numb: 15, sub:'Mo'},
    {numb: 16, sub:'Tu'},{numb: 17, sub:'We'},{numb: 18, sub:'Th'},{numb: 19, sub:'Fr'},{numb: 20, sub:'St'},
    {numb: 21, sub:'Su'},{numb: 22, sub:'Mo'},{numb: 23, sub:'Tu'},{numb: 24, sub:'We'},{numb: 25, sub:'Fr'},
    {numb: 26, sub:'St'},{numb: 27, sub:'Su'},{numb: 28, sub:'Mo'},{numb: 29, sub:'Tu'},{numb: 30, sub:'We'},
    {numb: 31, sub:'Th'},
];

const tableDetails = [
    { image: IMAGES.contact1,  title:'Elijah James'},
    { image: IMAGES.contact2,  title:'James Antony'},
    { image: IMAGES.contact3,  title:'Joney Antony'},
    { image: IMAGES.contact7,  title:'Moni Antony'},
    { image: IMAGES.contact5,  title:'Peter Oliver'},
    { image: IMAGES.contact6,  title:'Ricky Antony'},
    { image: IMAGES.contact7,  title:'James Antony'},
    { image: IMAGES.contact1,  title:'Joney Antony'},
    { image: IMAGES.contact2,  title:'Moni Antony'},
    { image: IMAGES.contact3,  title:'Peter Oliver'},
    { image: IMAGES.contact7,  title:'Ricky Antony'},
    { image: IMAGES.contact1,  title:'Joney Antony'},
];

const CoreHr = () => {    
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    const [startDate3, setStartDate3] = useState(new Date());
    const [data, setData] = useState(
		document.querySelectorAll("#attend-tbl_wrapper tbody tr")
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
      setData(document.querySelectorAll("#attend-tbl_wrapper tbody tr"));
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
    const [attendModal, setAttendModal] = useState(false);
    const options = [
        { value: "chocolate", label: "Julia Koch" },
        { value: "strawberry", label: "Gina Reinhart" },
        { value: "vanilla", label: "Yang Huiyan" },
    ];
    return (
        <>
            <MainPagetitle mainTitle={'Core HR'} pageTitle={'Dashboard'} parentTitle={'Home'} />
            <div className='container-fluid'>
                <div className="row">
					<div className="col-xl-9 col-xxl-8">
                        <div className='row'>
                            <div className='col-xl-12'>
                                <CoreEmployeTable />
                            </div>
                            <div className="col-xl-12">
                                <div className="card">
									<div className="card-body p-0">
										<div className="table-responsive active-projects style-1 attendance-tbl">
                                            <div className="tbl-caption">
                                                <h4 className="heading mb-0">Attendance</h4>
                                                <div>                                                    
                                                    <button type="button" className="btn btn-primary btn-sm" onClick={()=>setAttendModal(true)}>
                                                    + Mark Attendance
                                                    </button>
                                                </div>
                                            </div>
                                            <div id="attend-tbl_wrapper" className="dataTables_wrapper no-footer">
                                                <table  id="attendance-tbl" className='table mb-0'>
                                                    <thead>
                                                        <tr>
                                                            <th>Employee Name</th>
                                                            {tableHeading.map((item, ind)=>(
                                                                <th key={ind}>
                                                                    <span>{item.numb}</span>
                                                                    <p>{item.sub}</p>
                                                                </th>
                                                            ))}														
                                                            <th className="text-center">
                                                                <span>Total</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {tableDetails.map((item, index)=>(
                                                            <tr key={index}>
                                                                <td>
                                                                    <div className="products">
                                                                        <img src={item.image} className="avatar avatar-md" alt="" />
                                                                        <div>
                                                                            <h6>{item.title}</h6>
                                                                            <span>Web Designer</span>	
                                                                        </div>	
                                                                    </div>
                                                                </td>
                                                                {index % 2 === 0 ? 
                                                                    <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                    :
                                                                    <td><span className="text-danger"><i className="fa-regular fa-xmark"></i></span></td>
                                                                }
                                                                    
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>	
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-danger"><i className="fa-regular fa-xmark"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                {index % 3 === 0 || index % 4 === 0? 
                                                                    <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                    :
                                                                    <td><span className="text-danger"><i className="fa-regular fa-xmark"></i></span></td>
                                                                }
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-danger"><i className="fa-regular fa-xmark"></i></span></td>                                                               
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-danger"><i className="fa-regular fa-xmark"></i></span></td>
                                                                {index % 3 === 0 || index % 5 === 0? 
                                                                    <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                    :
                                                                    <td><span className="text-danger"><i className="fa-regular fa-xmark"></i></span></td>
                                                                }
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-danger"><i className="fa-regular fa-xmark"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-danger"><i className="fa-regular fa-xmark"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td><span className="text-success"><i className="fa-solid fa-check"></i></span></td>
                                                                <td className="text-center"><span>28/31</span></td>
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
                                                            to="/core-hr"
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
                                                                to="/core-hr"
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
                                                            to="/core-hr"
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
                    <div className="col-xl-3 col-xxl-4">
						<div className="row">
							<div className="col-xl-12 col-md-6">
                                <ProjectStatusBlog title="Attendance" />
                            </div>
                            <div className="col-xl-12 col-md-6">
                                <UpcomingBlog />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal centered show={attendModal} onHide={setAttendModal} className='mark-attendence'>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Attendance</h1>
                        <button type="button" className="btn-close" onClick={()=>setAttendModal(false)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-xl-12">
                                <label className="form-label">Employee<span className="text-danger">*</span></label>                                                            
                                <Select
                                    className='custom-react-select'
                                    isSearchable={false} 
                                    options={options}                                    
                                />
                                <label className="form-label mt-3">Attendance Date<span className="text-danger">*</span></label>                               
                                <DatePicker 
                                    className="form-control"
                                    selected={startDate} 
                                    onChange={(date) => setStartDate(date)} 
                                />
                                <div className="row">
                                    <div className="col-xl-6">
                                        <label className="form-label mt-3">In Time<span className="text-danger">*</span></label>
                                        <div className="input-group time-pick clockpicker">
                                            {/* <input type="text" className="form-control" value="09:30" />  */}
                                            <DatePicker
                                                className="form-control"
                                                selected={startDate2}
                                                onChange={(date) => setStartDate2(date)}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={15}
                                                timeCaption="Time"
                                                dateFormat="h:mm aa"
                                            />
                                            <span className="input-group-text"><i className="fas fa-clock"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <label className="form-label mt-3">Out Time<span className="text-danger">*</span></label>
                                        <div className="input-group time-pick clockpicker">
                                            {/* <input type="text" className="form-control" value="10:30" /> */}
                                            <DatePicker
                                                className="form-control "
                                                selected={startDate3}
                                                onChange={(date) => setStartDate3(date)}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={15}
                                                timeCaption="Time"
                                                dateFormat="h:mm aa"
                                            />
                                            <span className="input-group-text"><i className="fas fa-clock"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger light" onClick={()=>setAttendModal(false)}>Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>			  
			</Modal>
        </>
    );
};

export default CoreHr;