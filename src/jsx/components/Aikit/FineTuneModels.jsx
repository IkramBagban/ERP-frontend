import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Tab, Nav} from 'react-bootstrap';

//
import PageTitle from '../../layouts/PageTitle';
import MainContent from './MainContent';
import TopMenus from './TopMenus';
import FineTuneJob from './FineTuneJob';
import Prompts from './Prompts';

const schedulerTable = [
    { modal:'lion'},
    { modal:'Tegr'},
    { modal:'Fres'},
    { modal:'Tiney'},
    { modal:'lion'},
    { modal:'Tegr'},
    { modal:'Fres'},
    { modal:'Tiney'},
    { modal:'lion'},
    { modal:'Tegr'},
    { modal:'Fres'},
    { modal:'Tiney'},
    { modal:'Tiney'},
    { modal:'lion'},
    { modal:'Tegr'},
    { modal:'Fres'},
    { modal:'Tiney'},
    
];

const numb = [3, 6, 13, 15];

const FineTuneModels = () => {
    const [data, setData] = useState(
		document.querySelectorAll("#fine-tbl_wrapper tbody tr")
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
      setData(document.querySelectorAll("#fine-tbl_wrapper tbody tr"));
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
            <PageTitle activeMenu={'Fine-tune Models'} motherMenu={'AiKit'} />
            <div className="container-fluid">
                <div className="row">
					<div className="col-xl-12">                        
                        <MainContent  detail="This is a demo of AIKit plugin made for you to test the experience of using the plugin." 
                            subtitle={`This is a demo of AIKit plugin made for you to test the experience of using the plugin. Text & images generated in this demo are dummy. In real life, AIKit will call OpenAI API and generate relevant text and images based on your prompts. `}
                        />                            
						<TopMenus  id={6}/>
                        <Tab.Container defaultActiveKey={'Job'}>
                            <div className="card h-auto">
                                <div className="card-body ai-tabs-1 py-2">
                                    <Nav as="ul" className="nav nav-tabs align-items-end">
                                        <Nav.Item as="li" >
                                            <Nav.Link className="nav-link" eventKey="Create" type="button">Create Fine-tune Job</Nav.Link >
                                        </Nav.Item>
                                        <Nav.Item as="li" >
                                            <Nav.Link eventKey="Job" type="button" >Jobs<span className="badge badge-circle badge-light light ms-2">5</span></Nav.Link >
                                        </Nav.Item>								  
                                    </Nav>
                                </div>
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey={'Create'}>
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <FineTuneJob />
                                        </div>
                                        <div className="col-xl-8">
                                            <Prompts />
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey={'Job'}>
                                    <div className="card">
                                        <div className="card-body p-0">                                           
                                            <div id="fine-tbl_wrapper" className="table-responsive dataTables_wrapper active-projects style-1">								
                                                <table  id="empoloyees-tblwrapper" className="table dataTable dataTables_wrapper no-footer mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Model Name Suffix</th>
                                                            <th>Model Name</th>
                                                            <th>Base Model</th>
                                                            <th>Date created</th>
                                                            <th>Status</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {schedulerTable.map((item, ind)=>(
                                                            <tr key={ind}>                                                                
                                                                <td className="text-black">Write a rat story</td>
                                                                <td>
                                                                    {item.modal}
                                                                </td>
                                                                
                                                                <td>hourly</td>
                                                                <td>4:50 AM Nov 11, 2023</td>
                                                                <td>
                                                                {
                                                                  numb.includes(ind) ?  
                                                                  <span className="badge badge-success">Success</span>
                                                                  :
                                                                  <span className="badge badge-light">Pending training data</span>
                                                                }
                                                                </td>
                                                                <td>
                                                                    <Link to={"#"} className="btn btn-primary light btn-sharp">
                                                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        </svg>
                                                                    </Link>{" "}
                                                                    <Link to={"#"} className="btn btn-danger light btn-sharp">
                                                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M1.875 4.25H3.125H13.125" stroke="#FF5B5B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                            <path d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25" stroke="#FF5B5B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                            <path d="M6.25 7.375V11.125" stroke="#FF5B5B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                            <path d="M8.75 7.375V11.125" stroke="#FF5B5B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                        </svg>
                                                                    </Link>
                                                                    
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
                                                            to="#"
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
                                                                to="#"
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
                                                            to="#"
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
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FineTuneModels;