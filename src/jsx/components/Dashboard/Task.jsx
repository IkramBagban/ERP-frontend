import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

import CountUp from 'react-countup';
import { CSVLink } from 'react-csv';
import MainPagetitle from '../../layouts/MainPagetitle';
import { IMAGES, SVGICON } from '../../constant/theme';
import EmployeeOffcanvas from '../../constant/EmployeeOffcanvas';

const cardCounter = [
	{number: '8', countText:'primary', title:'Not Started'},
	{number: '7', countText:'purple', title:'In Progress'},
	{number: '13',countText:'warning',  title:'Testing'},
	{number: '11',countText:'danger',  title:'Cancelled'},
	{number: '21',countText:'success',  title:'Complete'},
	{number: '16',countText:'danger',  title:'Pending'},
];

const tableData = [
    {emplid: '01', invid:'INV-100023456', assign: '3', status:'Complete', startdate:'06 May 2023', enddate:'12 june 2023', title: 'Create Frontend WordPress', select:'High'},    
    {emplid: '02', invid:'INV-100023567', assign: '4', status:'Testing', startdate:'06 May 2023', enddate:'12 june 2023', title: 'HTML To React Convert', select:'Low'},    
    {emplid: '03', invid:'INV-100023987', assign: '4', status:'Pending', startdate:'06 May 2023', enddate:'12 june 2023', title: 'HTML template Issue Complete', select:'Medium'},    
    {emplid: '04', invid:'INV-100023420', assign: '3', status:'In Progress', startdate:'06 May 2023', enddate:'12 june 2023', title: 'Complete Admin Dashboard Project', select:'Low'},    
    {emplid: '05', invid:'INV-100023436', assign: '4', status:'Testing', startdate:'06 May 2023', enddate:'12 june 2023', title: 'Create Frontend WordPress', select:'High'},    
    {emplid: '06', invid:'INV-100023123', assign: '5', status:'Pending', startdate:'06 May 2023', enddate:'12 june 2023', title: 'HTML To React Convert',select:'Low'},    
    {emplid: '07', invid:'INV-100023987', assign: '4', status:'Complete', startdate:'06 May 2023', enddate:'12 june 2023', title: 'HTML template Issue Complete',select:'Medium'},    
    {emplid: '08', invid:'INV-100023852', assign: '3', status:'Testing', startdate:'06 May 2023', enddate:'12 june 2023', title: 'Complete Admin Dashboard Project',select:'High' },    
    {emplid: '09', invid:'INV-100023741', assign: '5', status:'Complete', startdate:'06 May 2023', enddate:'12 june 2023', title: 'Create Frontend WordPress',select:'Low' },    
    {emplid: '10', invid:'INV-100023963', assign: '4', status:'Pending', startdate:'06 May 2023', enddate:'12 june 2023', title: 'HTML To React Convert', select:'High'},
    {emplid: '11', invid:'INV-100023123', assign: '5', status:'Pending', startdate:'06 May 2023', enddate:'12 june 2023', title: 'HTML To React Convert',select:'Low'},    
    {emplid: '12', invid:'INV-100023987', assign: '4', status:'Complete', startdate:'06 May 2023', enddate:'12 june 2023', title: 'HTML template Issue Complete',select:'Medium'},    
    {emplid: '13', invid:'INV-100023852', assign: '3', status:'Testing', startdate:'06 May 2023', enddate:'12 june 2023', title: 'Complete Admin Dashboard Project',select:'High' },    
    {emplid: '14', invid:'INV-100023741', assign: '5', status:'Complete', startdate:'06 May 2023', enddate:'12 june 2023', title: 'Create Frontend WordPress',select:'Low' },    
    {emplid: '15', invid:'INV-100023963', assign: '4', status:'Pending', startdate:'06 May 2023', enddate:'12 june 2023', title: 'HTML To React Convert', select:'High'}, 
	{emplid: '16', invid:'INV-100023456', assign: '3', status:'Complete', startdate:'06 May 2023', enddate:'12 june 2023', title: 'Create Frontend WordPress', select:'High'},    
    {emplid: '17', invid:'INV-100023567', assign: '4', status:'Testing', startdate:'06 May 2023', enddate:'12 june 2023', title: 'HTML To React Convert', select:'Low'},    
    {emplid: '18', invid:'INV-100023987', assign: '4', status:'Pending', startdate:'06 May 2023', enddate:'12 june 2023', title: 'HTML template Issue Complete', select:'Medium'},    
    {emplid: '19', invid:'INV-100023420', assign: '3', status:'In Progress', startdate:'06 May 2023', enddate:'12 june 2023', title: 'Complete Admin Dashboard Project', select:'Low'},    
    {emplid: '20', invid:'INV-100023436', assign: '4', status:'Testing', startdate:'06 May 2023', enddate:'12 june 2023', title: 'Create Frontend WordPress', select:'High'},    
 
];
const headersTitle = [
    {label:'Employee ID', key:'emplid'}, 
    {label:'Invoice', key:'invid'}, 
    {label:'Status', key:'status'}, 
    {label:'Name', key:'title'}, 
	{label:'Start Date', key:'startdate'},
	{label:'End Date', key:'enddate'},
	{label:'Priority', key:'select'},
]

const csvlink = {
    headers : headersTitle,
    data : tableData,
    filename: "csvfile.csv"
}

const Task = () => {	
	const [statusPriority, setStatusPriority] = useState(tableData);
	//const [dropValue, setDropValue] = useState(tableData);		
    const [data, setData] = useState(
		document.querySelectorAll("#task-tbl_wrapper tbody tr")
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
      setData(document.querySelectorAll("#task-tbl_wrapper tbody tr"));
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
   
	const checkbox = document.querySelectorAll(".sorting_25 input");
	const motherCheckBox = document.querySelector(".sorting_asc_15 input");
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

	const handleSelect = (id, value)	=> {
		let temp = statusPriority.map((data) => {
			if (id === data.emplid) {
				return { ...data, select: value };
			}
			return data;
		});
		setStatusPriority(temp);
	};
	const handleAction = (id, value)	=> {
		let temp = statusPriority.map((data) => {
			if (id === data.emplid) {
				return { ...data, status: value };
			}
			return data;
		});
		setStatusPriority(temp);
	};
	const task = useRef();
	return (
		<>
			<MainPagetitle mainTitle="Task" pageTitle={'Task'} parentTitle={'Home'} />
			<div className="container-fluid">
				<div className="d-flex justify-content-between align-items-center mb-3">
					<h5 className="mb-0">Tasks Summary</h5>
					<div className="d-flex align-items-center">
						<div className="icon-box  icon-box-sm task-tab me-2">
							<Link to={"/task-summary"}>
								{SVGICON.FourDots}
							</Link>
						</div>
						<Link to={"#"} className="btn btn-primary btn-sm ms-2"
							onClick={()=>task.current.showEmployeModal()}
						>+ Add Task</Link>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12">
						<div className="card">
							<div className="card-body">
								<div className="row task">
									{cardCounter.map((item, index)=>(
										<div className="col-xl-2 col-sm-4 col-6" key={index}>
											<div className="task-summary">
												<div className="d-flex align-items-baseline">
													<CountUp className={`mb-0 fs-28 fw-bold me-2 text-${item.countText}`}  end={item.number} duration={'5'} />
													<h6 className='mb-0'>{item.title}</h6>
												</div>
												<p>Tasks assigne</p>
											</div>
										</div>
									))}

								</div>	
							</div>	
						</div>	
					</div>	
					<div className='col-xl-12'>
						<div className="card">            
							<div className="card-body p-0">
								<div className="table-responsive active-projects task-table">   
									<div className="tbl-caption d-flex justify-content-between align-items-center">
										<h4 className="heading mb-0">Task</h4>
										<div>
											<CSVLink {...csvlink} className="btn btn-primary light btn-sm me-2"><i className="fa-solid fa-file-excel" /> Export Report</CSVLink>
										</div>
									</div>    
									<div id="task-tbl_wrapper" className="dataTables_wrapper no-footer">
										<table id="proempoloyeestbl2" className="table ItemsCheckboxSec dataTable no-footer mb-0">
											<thead>
												<tr>
													<th className="sorting_asc_15" >
														<div className="form-check custom-checkbox ms-0">
															<input type="checkbox" className="form-check-input checkAllInput" required="" 
																onClick={() => checkboxFun("all")}
															/>
															<label className="form-check-label" htmlFor="checkAll"></label>
														</div>
													</th>
													<th>#</th>
													<th>Name</th>
													<th>Status</th>
													<th>Start Date</th>
													<th>End Date</th>
													<th>Assigned To</th>
													<th>Tags</th>
													<th className="text-end">Priority</th>
												</tr>
											</thead>
											<tbody>
												{statusPriority.map((item, index)=>(
													<tr key={index}>
														<td className="sorting_25">
															<div className="form-check11custom-checkbox">
																<input type="checkbox" className="form-check-input" 
																	id={`employees${index+211}`} required="" 
																	onClick={() => checkboxFun()}
																/>
																<label className="form-check-label" htmlFor={`employees${index+211}`}></label>
															</div>
														</td>
														<td><span>{index + 101}</span></td>
														<td>
															<div className="products">
																<div>
																	<h6>{item.title}</h6>
																	<span>{item.invid}</span>
																</div>	
															</div>
														</td>
														<td>
															<Dropdown className="task-dropdown-2">
																<Dropdown.Toggle as="div" className={item.status}>{item.status}</Dropdown.Toggle>
																<Dropdown.Menu className='task-drop-menu'>
																	<Dropdown.Item  onClick={()=>handleAction(item.emplid,'In Progress')}>In Progress</Dropdown.Item>
																	<Dropdown.Item onClick={()=>handleAction(item.emplid,'Pending')}>Pending</Dropdown.Item>
																	<Dropdown.Item onClick={()=>handleAction(item.emplid,'Testing')}>Testing</Dropdown.Item>
																	<Dropdown.Item onClick={()=>handleAction(item.emplid,'Complete')}>Complete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>															
														</td>
														<td><span>{item.startdate}</span></td>
														<td>
															<span>{item.enddate}</span>
														</td>
														<td>
															<div className="avatar-list avatar-list-stacked">
																{item.assign === "3" ? 																
																	<>
																		<img src={IMAGES.contact6} className="avatar rounded-circle" alt="" />{" "}
																		<img src={IMAGES.contact5} className="avatar rounded-circle" alt="" />{" "}
																		<img src={IMAGES.contact3} className="avatar rounded-circle" alt="" />
																	</>
																: 
																item.assign === "4" ? 
																	<>
																		<img src={IMAGES.contact6} className="avatar rounded-circle" alt="" />{" "}
																		<img src={IMAGES.contact5} className="avatar rounded-circle" alt="" />{" "}
																		<img src={IMAGES.contact3} className="avatar rounded-circle" alt="" />
																		<img src={IMAGES.contact1} className="avatar rounded-circle" alt="" />
																	</>
																:

																	<>
																		<img src={IMAGES.contact6} className="avatar rounded-circle" alt="" />{" "}
																		<img src={IMAGES.contact5} className="avatar rounded-circle" alt="" />{" "}
																		<img src={IMAGES.contact3} className="avatar rounded-circle" alt="" />{" "}
																		<img src={IMAGES.contact2} className="avatar rounded-circle" alt="" />{" "}
																		<img src={IMAGES.contact1} className="avatar rounded-circle" alt="" />
																	</>																	
																}
															</div>
														</td>	
														<td>
															<span className="badge badge-primary light border-0 me-1">Issue</span>
															<span className="badge badge-primary light border-0 ms-1">HTML</span>
														</td>
														<td className="text-end">															
															<Dropdown className="task-dropdown-2">
																<Dropdown.Toggle as="div" className={item.select}>{item.select}</Dropdown.Toggle>
																<Dropdown.Menu className='task-drop-menu'>
																	<Dropdown.Item onClick={()=>handleSelect(item.emplid,'High')}>High</Dropdown.Item>
																	<Dropdown.Item onClick={()=>handleSelect(item.emplid,'Medium')}>Medium</Dropdown.Item>
																	<Dropdown.Item onClick={()=>handleSelect(item.emplid,'Low')}>Low</Dropdown.Item>																	
																</Dropdown.Menu>
															</Dropdown>
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
													to="/task"
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
														to="/task"
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
													to="/task"
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
                ref={task}
                Title="New Task"
            />
		</>
	);
};

export default Task;