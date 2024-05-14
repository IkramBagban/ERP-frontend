import React, { useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import MainPagetitle from '../../layouts/MainPagetitle';
import { IMAGES, SVGICON } from '../../constant/theme';
import CountUp from 'react-countup';
import { Dropdown } from 'react-bootstrap';
import EmployeeOffcanvas from '../../constant/EmployeeOffcanvas';

const counterBlog = [
    { title: 'Completed', count : '24', colorstyle: 'success', icon: SVGICON.Complete  },
    { title: 'In Progress', count : '12', colorstyle: 'primary', icon: SVGICON.Progress  },
    { title: 'Not Started', count : '7', colorstyle: 'purple', icon: SVGICON.Started},
    { title: 'Not Started', count : '5', colorstyle: 'danger', icon: SVGICON.Canceled},
];
const advertising = [
    {boxid:'11', title: '1', status:'In Progress',  theme: 'purple'},
    {boxid:'12', title: '2', status:'Complete', theme: 'success'},
    {boxid:'13', title: '3', status:'Pending', theme: 'danger'},
    {boxid:'14', title: '4', status:'In Progress',  theme: 'purple'},
    {boxid:'15', title: '5', status:'Pending',  theme: 'danger'},
    {boxid:'16', title: '6', status:'Complete', theme: 'success'},
    {boxid:'17', title: '7', status:'In Progress', theme: 'purple'},
    {boxid:'18', title: '8', status:'Pending', theme: 'danger'},
];

const Projects = () => {   
    const [dropValue, setDropValue] = useState(advertising);
    const projectAction = (id, value)	=> {
		let temp = dropValue.map((data) => {
			if (id === data.boxid) {
				return { ...data, status: value };
			}
			return data;
		});
		setDropValue(temp);
	};
    const project = useRef();
    return (
        <>
            <MainPagetitle mainTitle="Projects" pageTitle="Projects"  parentTitle="Home" />
            <div className="container-fluid">
                <div className="row">
                    {counterBlog.map((data, index)=>(                        
                        <div className="col-xl-3 col-sm-6" key={index}>
                            <div className="card box-hover">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className={`icon-box icon-box-lg  rounded-circle bg-${data.colorstyle}-light `}>
                                           {data.icon}
                                        </div>
                                        <div className="total-projects ms-3">                                        
                                            <CountUp  className={`project-counter count text-${data.colorstyle}`} end={data.count} duration="5"/>                                            
                                            <h6>Total {data.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="mb-0">Tasks Summary</h5>
                        <div className="d-flex align-items-center">
                            <div className="icon-box  icon-box-sm bg-secondary me-2">
                                <Link to={"/task-summary"}>
                                    {SVGICON.FourDots}
                                </Link>
                            </div>
                            <Link to={"#"} className="btn btn-primary btn-sm ms-2"
                                onClick={()=>project.current.showEmployeModal()}
                            >+ Add Task</Link>
                        </div>
                    </div>
                    { dropValue.map((item, ind)=>(
                        <div className="col-xl-3 col-sm-6" key={ind}>
                            <div className="card box-hover">
                                <div className="card-header">
                                    <h5 className="mb-0"># {item.title} . Advertising Platform AD.</h5>
                                </div>
                                <div className="card-body">
                                    <div className="products style-1">
                                        <img src={IMAGES.contact2} className="avatar avatar-lg rounded-circle" alt="" />
                                        <div>
                                            <h6>Cedric Kelly</h6>
                                            <span>06 May 2023</span>	
                                        </div>	
                                    </div>
                                    <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                    <div>
                                        <p className="text-secondary mb-1 font-w500">Team</p>
                                        <div className="avatar-list avatar-list-stacked">
                                            <img src={IMAGES.contact6} className="avatar rounded-circle" alt="" />{" "}
                                            <img src={IMAGES.contact5} className="avatar rounded-circle" alt="" />{" "}
                                            <img src={IMAGES.contact1} className="avatar rounded-circle" alt="" />{" "}
                                            <img src={IMAGES.contact5} className="avatar rounded-circle" alt="" />{" "}
                                            <img src={IMAGES.contact6} className="avatar rounded-circle" alt="" />
                                        </div>
                                    </div>
                                    <div className="progress mt-4">
                                        <div className={`progress-bar bg-${item.theme}`} style={{width:"60%", height:"5px", borderRadius:"4px" }} role="progressbar"></div>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-between flex-wrap">
                                    <div className="due-progress">
                                        <p className="mb-0 text-secondary">Due <span className={`text-${item.theme}`}>: 2023-09-02</span></p>
                                    </div>                                   
                                    <Dropdown className="task-dropdown-2">
                                        <Dropdown.Toggle as="div" className={item.status}>{item.status}</Dropdown.Toggle>
                                        <Dropdown.Menu className='task-drop-menu'>
                                            <Dropdown.Item  onClick={()=>projectAction(item.boxid,'In Progress')}>In Progress</Dropdown.Item>
                                            <Dropdown.Item onClick={()=>projectAction(item.boxid,'Pending')}>Pending</Dropdown.Item>
                                            <Dropdown.Item onClick={()=>projectAction(item.boxid,'Testing')}>Testing</Dropdown.Item>
                                            <Dropdown.Item onClick={()=>projectAction(item.boxid ,'Complete')}>Complete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
			</div>
            <EmployeeOffcanvas 
                ref={project}
                Title="New Task"
            />
        </>
    );
};

export default Projects;