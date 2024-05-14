import React from 'react';
import {Link} from 'react-router-dom';
import { Uploader } from 'rsuite';

import PageTitle from '../../layouts/PageTitle';
import MainContent from './MainContent';
import TopMenus from './TopMenus';

const ImportExport = () => {
    return (
        <>
            <PageTitle activeMenu={'Export/Import Settings'} motherMenu={'AiKit'} />
            <div className="container-fluid">
                <div className="row">
					<div className="col-xl-12">                        
                        <MainContent  detail="This is a demo of AIKit plugin made for you to test the experience of using the plugin." />                            
						<TopMenus  id={9}/>
                        <div className="row">
							<div className="col-xl-6">
								<div className="card">
									<div className="card-body">
										<h4 className="heading">Export Settings</h4>
										<p>Download the current settings and prompts as a json file.</p>
										<ul className="setting-list">
											<li className="mb-2">
												<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25" stroke="#362465" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
													<path d="M5.25 7.5L9 11.25L12.75 7.5" stroke="#362465" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
													<path d="M9 11.25V2.25" stroke="#362465" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
												<Link to={"#"} className="text-primary ms-2">Export All Settings + Prompts</Link>
											</li>
											<li>
												<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25" stroke="#362465" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
													<path d="M5.25 7.5L9 11.25L12.75 7.5" stroke="#362465" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
													<path d="M9 11.25V2.25" stroke="#362465" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
												<Link to={"#"} className="text-primary ms-2"> Export Prompts only</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-6">
								<div className="card">
									<div className="card-body">
										<h4 className="heading">Import Settings</h4>
										<p>Upload a settings json file to import settings and/or prompts.</p>
										<div className="dz-default mb-3">	
											<form action="#" className="dropzone upload-img text-center">
												<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M27.1666 26.6667L20.4999 20L13.8333 26.6667" stroke="#DADADA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<path d="M20.5 20V35" stroke="#DADADA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<path d="M34.4833 30.6501C36.1088 29.7638 37.393 28.3615 38.1331 26.6644C38.8731 24.9673 39.027 23.0721 38.5703 21.2779C38.1136 19.4836 37.0724 17.8926 35.6111 16.7558C34.1497 15.619 32.3514 15.0013 30.4999 15.0001H28.3999C27.8955 13.0488 26.9552 11.2373 25.6498 9.70171C24.3445 8.16614 22.708 6.94647 20.8634 6.1344C19.0189 5.32233 17.0142 4.93899 15.0001 5.01319C12.9861 5.0874 11.015 5.61722 9.23523 6.56283C7.45541 7.50844 5.91312 8.84523 4.7243 10.4727C3.53549 12.1002 2.73108 13.9759 2.37157 15.959C2.01205 17.9421 2.10678 19.9809 2.64862 21.9222C3.19047 23.8634 4.16534 25.6565 5.49994 27.1667" stroke="#DADADA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<path d="M27.1666 26.6667L20.4999 20L13.8333 26.6667" stroke="#DADADA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>												
												<div className="fallback">
													{/* <input name="file" type="file" multiple /> */}
													<Uploader action="//jsonplaceholder.typicode.com/posts/" draggable>
														<div style={{ height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', border:"none" }}>
															<span>Drop files here to upload</span>
														</div>
													</Uploader>
												</div>												
											</form>
											<small><strong className="text-black">Important:</strong> It's highly recommended to backup your current settings before importing new settings, so you can revert back if needed.</small>
										</div>
										<button type="button" className="btn btn-primary">Import Settings</button>
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

export default ImportExport;