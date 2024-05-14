import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Select from 'react-select'
import DatePicker from "react-datepicker";
import { Offcanvas } from 'react-bootstrap';

import { SVGICON } from '../constant/theme';
// import CustomClearIndicator from "../components/PluginsMenu/Select2/MultiSelect";


const options = [
	{ value: 'salesmate', label: 'Salesmate' },
	{ value: 'active', label: 'ActiveCampaign' },
	{ value: 'insightly', label: 'Insightly' }
]

const options2 = [
	{ value: 'progess', label: 'In Progess' },
	{ value: 'pending', label: 'Pending' },
	{ value: 'completed', label: 'Completed' },
];
const options3 = [
	{ value: 'high', label: 'Hight' },
	{ value: 'medium', label: 'Medium' },
	{ value: 'low', label: 'Low' },
];
const options4 = [
	{ value: 'design', label: 'Designing' },
	{ value: 'develop', label: 'Development' },
	{ value: 'react', label: 'React Developer' },
];
const options5 = [
	{ value: 'public', label: 'Public' },
	{ value: 'private', label: 'Private' },
];
const options6 = [
	{ value: 'yes', label: 'Yes' },
	{ value: 'no', label: 'No' },
];

const options7 = [
	{ value: 'ber', label: 'Bernard' },
	{ value: 'ser', label: 'Sergey Brin' },
	{ value: 'lary', label: 'Larry Ellison' },
];

const MainPagetitle = ({pageTitle, parentTitle, mainTitle}) => {
	const [startDate, setStartDate] = useState(new Date());
	const [startDate2, setStartDate2] = useState(new Date());
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const nav = useNavigate();
    const handleDesk=(e)=>{
        e.preventDefault();
        nav("#");
    }
    return (
        <>
            <div className="page-titles">
				<ol className="breadcrumb">
					<li><h5 className="bc-title">{mainTitle}</h5></li>
					<li className="breadcrumb-item">
                        <Link to={"#"}>
						    {SVGICON.HomeSvg}
						    {" "}{parentTitle} 
                        </Link>
					</li>
					<li className="breadcrumb-item active"><Link to={"#"}>{pageTitle}</Link></li>
				</ol>
				<Link to={"#"} className="text-primary fs-13" 
                    onClick={()=>handleShow()}
                >+ Add Task</Link>
			</div>  
			<Offcanvas show={show} onHide={handleClose} placement='end' className="offcanvas-end customeoff">
				<div className="offcanvas-header">
					<h5 className="modal-title" id="#gridSystemModal1">Add New Task</h5>
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas"
						onClick={()=>handleClose()}
					>
						<i className="fa-solid fa-xmark"></i>
					</button>
				</div>
				<div className="offcanvas-body">
					<div className="container-fluid">
						<form onClick={(e)=>handleDesk(e)}>
							<div className="row">
								<div className="col-xl-6 mb-3">
									<label for="exampleFormControlInputfirst" className="form-label">Title<span className="text-danger">*</span></label>
									<input type="text" className="form-control" id="exampleFormControlInputfirst" placeholder="Title" />
								</div>	
								<div className="col-xl-6 mb-3">
									<label className="form-label">Project<span className="text-danger">*</span></label>									
									<Select options={options} 
										isSearchable={false}
										className='custom-react-select'
									/>
								</div>	
								<div className="col-xl-6 mb-3">
									<label for="exampleFormControlInputthree" className="form-label">Start Date<span className="text-danger">*</span></label>									
									<DatePicker 
										className="form-control"
										selected={startDate} 
										onChange={(date) => setStartDate(date)} 
									/>
								</div>
								<div className="col-xl-6 mb-3">
									<label for="exampleFormControlInputfour" className="form-label">End Date<span className="text-danger">*</span></label>									
									<DatePicker 
										className="form-control"
										selected={startDate2} 
										onChange={(date) => setStartDate2(date)} 
									/>
								</div>
								<div className="col-xl-6 mb-3">
									<label className="form-label">Estimated Hour<span className="text-danger">*</span></label>
									<div className="input-group">
										<input type="text" className="form-control" value="09:30" />
										<span className="input-group-text"><i className="fas fa-clock"></i></span>
									</div>
								</div>
								<div className="col-xl-6 mb-3">
									<label className="form-label">Status<span className="text-danger">*</span></label>
									<Select 
										options={options2} 
										isSearchable={false}
										className='custom-react-select'
									/>
								</div>
								<div className="col-xl-6 mb-3">
									<label className="form-label">priority<span className="text-danger">*</span></label>
									<Select 
										options={options3} 
										isSearchable={false}
										className='custom-react-select'
									/>
								</div>
								<div className="col-xl-6 mb-3">
									<label className="form-label">Category<span className="text-danger">*</span></label>									
									<Select 
										options={options4} 
										isSearchable={false}
										className='custom-react-select'
									/>
								</div>
								<div className="col-xl-6 mb-3">
									<label className="form-label">Permission<span className="text-danger">*</span></label>									
									<Select 
										options={options5} 
										isSearchable={false}
										className='custom-react-select'
									/>
								</div>
								<div className="col-xl-6 mb-3">
									<label className="form-label">Deadline add<span className="text-danger">*</span></label>									
									<Select 
										options={options6} 
										isSearchable={false}
										className='custom-react-select'
									/>
								</div>
								<div className="col-xl-6 mb-3">
									<label className="form-label">Assigned to<span className="text-danger">*</span></label>									
									<Select 
										options={options7} 
										isSearchable={false}
										className='custom-react-select'
									/>
								</div>
								<div className="col-xl-6 mb-3">
									<label className="form-label">Responsible Person<span className="text-danger">*</span></label>
									<input name='tagify' className="form-control" value='Harry' />									
									
								</div>
								<div className="col-xl-12 mb-3">
									<label className="form-label">Description<span className="text-danger">*</span></label>
									<textarea rows="3" className="form-control"></textarea>
								</div>
								<div className="col-xl-12 mb-3">
									<label className="form-label">Summary<span className="text-danger">*</span></label>
									<textarea rows="3" className="form-control"></textarea>
								</div>
								
							</div>
							<div>
								<button type="submit"  className="btn btn-primary me-1">Help Desk</button>
								<Link to={"#"} className="btn btn-danger light ms-1" onClick={()=>handleClose()}>Cancel</Link>
							</div>
						</form>
					</div>
				</div>
			</Offcanvas>
        </>
    );
};

export default MainPagetitle;