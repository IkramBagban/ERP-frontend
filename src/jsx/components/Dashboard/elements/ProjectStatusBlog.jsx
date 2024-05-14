import React,{useState} from 'react';
import ProjectStatusBlogDonutChart from './ProjectStatusBlogDonutChart';
import { Dropdown } from 'react-bootstrap';

const mediaBlog = [
    {title: 'Completed Projects', color: "var(--primary)"},
    {title: 'Progress Projects', color: "#3AC977"},
    {title: 'Yet to Start', color: "#FF9F00"},
    {title: 'Cancelled', color: "#FF5E5E"},
];
const ProjectStatusBlog = ({title}) => {
    const [globalSelect, setGlobalSelect] = useState('Today');
    return (
        <>
            <div className="card">
                <div className="card-header pb-0 border-0">
                    <h4 className="heading mb-0">{title}</h4>                    
                    <Dropdown className='global-drop'>
                        <Dropdown.Toggle as="div" className='i-false global-drop-toggle'>                            
                            {globalSelect}{" "}
                            <i className="fa-solid fa-chevron-down" /> 
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='global-drop-menu'>
                            <Dropdown.Item onClick={()=>setGlobalSelect('Today')}>Today</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setGlobalSelect('Week')}>Week</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setGlobalSelect('Month')}>Month</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="card-body">
                    
                    <ProjectStatusBlogDonutChart />
                    <div className="project-date">
                        {mediaBlog.map((data, ind)=>(
                            <div className="project-media" key={ind}>
                                <p className="mb-0">
                                    <svg className="me-2" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="12" height="12" rx="3" fill={data.color}/>
                                    </svg>{" "}
                                    {data.title}
                                </p>
                                <span>{`${124+ind}`} Projects</span>
                            </div>	
                        ))}                        
                    </div>
                </div>
            </div>  
        </>
    );
};

export default ProjectStatusBlog;