import React from 'react';
import MainPagetitle from '../../../layouts/MainPagetitle';

const rightCheckBlog = [
    {title: 'Create new job and stage',  addchecked: false, editchecked:true, deletechecked:true},
	{title: 'Edit job and stage', addchecked: true, editchecked: false, deletechecked: false },
	{title: 'Achive jobs', addchecked: true, editchecked: true, deletechecked: true},
	{title: 'Edit job and stage', addchecked: false, editchecked: true, deletechecked: true },
	{title: 'Change jobs status', addchecked: true, editchecked: true, deletechecked: false },
];

const AddRole = () => {
    return (
        <>
            <MainPagetitle mainTitle={'Dashboard'} pageTitle={'Add Roles'} parentTitle={'Users Manager'} />   
            <div className="container">
				<div className="row">
					<h4 className="heading mb-3">Account Setting</h4>
					<div className="col-xl-3">
						<div className="row">
							<div className="col-xl-12">
								<div className="card">
									<div className="card-header">
										<h4 className="heading mb-0">Personal</h4>
									</div>
									<div className="card-body px-0">
										<ul className="personal-info">
											<li><i className="fa-solid fa-user text-primary me-3"></i> Profile</li>
											<li><i className="fa-solid fa-lock text-primary me-3"></i> Password</li>
											<li><i className="fa-solid fa-envelope-open text-primary me-3"></i> E-mail</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-12">
								<div className="card">
									<div className="card-header">
										<h4 className="heading mb-0">Company</h4>
									</div>
									<div className="card-body px-0">
										<ul className="personal-info">
											<li><i className="fa-solid fa-building text-primary me-3"></i> Commpany Details</li>
											<li><i className="fa-solid fa-user-plus text-primary me-3"></i> Team Members</li>
											<li><i className="far fa-clock text-primary me-3"></i> Format setting</li>
											<li><i className="fa-solid fa-briefcase text-primary me-3"></i> Job boards</li>
											<li><i className="far fa-user text-primary me-3"></i> Positions</li>
											<li><i className="fas fa-times-circle text-primary me-3"></i>Rejections resions</li>
											<li><i className="fas fa-envelope text-primary me-3"></i>Automated message</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-9">
                        <div className="row">
							<div className="col-xl-12">
								<div className="card">
									<div className="card-header">
										<div>
											<h4 className="heading mb-0">Team Members</h4>
											<span>Invitite or manage your origanisation's members.</span>
										</div>
										
									</div>
									<div className="card-body p-0">
										<div className="all_user">
											<h4 className="mb-0 d-flex align-items-center heading">All Users<span className="badge badge-primary badge-xs ms-3">5</span></h4>
											<h4 className="mb-0 text-primary heading">Users role manager</h4>
										</div>
										<div className="all_user1">
											<span className="mb-0 heading">Actions</span>
											<div className="d-flex member">
												<h4 className="heading mb-0">Member</h4>
												<h4 className="heading mb-0">Manager</h4>
												<h4 className="heading mb-0">Admin</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
							<h4 className="heading mb-0 manage"><i className="fa-solid fa-user-plus text-primary me-2 mb-3 "></i> Job Management</h4>
							<div className="col-xl-12">
								<div className="card">
									<div className="card-body">
										<ul>
                                            {rightCheckBlog.map((item, index)=>(
                                                <li className="right-check" key={index}>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h6 className=" mb-0">{item.title}</h6>
                                                        <div className="d-flex">
                                                            <div className="form-check custom-checkbox mb-3 checkbox-warning">
                                                                <input type="checkbox" className="form-check-input"  id={`roleaddinputcheck${index+11}`} required="" 
                                                                    defaultChecked={item.addchecked}
                                                                />
                                                            </div>
                                                            <div className="form-check custom-checkbox mb-3 checkbox-primary">
                                                                <input type="checkbox" className="form-check-input" id={`roleeditinputcheck${index+121}`} required="" 
                                                                    defaultChecked={item.editchecked}
                                                                />
                                                            </div>
                                                            <div className="form-check custom-checkbox mb-3 checkbox-success">
                                                                <input type="checkbox" className="form-check-input"  id={`roledeleteinputcheck${index+131}`} required="" 
                                                                    defaultChecked={item.deletechecked}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}											
										</ul>
									</div>
									
								</div>
							</div>
							<h4 className="heading mb-0  manage"><i className="far fa-user text-primary me-2 mb-3 "/> Candidate Management</h4>
							<div className="col-xl-12">
								<div className="card">
									<div className="card-body">
										<ul>
                                            {rightCheckBlog.map((item, index)=>(
                                                <li className="right-check" key={index}>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h6 className=" mb-0">{item.title}</h6>
                                                        <div className="d-flex">                                                        
                                                            <div className="form-check custom-checkbox mb-3 checkbox-warning">
                                                                <input type="checkbox" className="form-check-input"  id={`role1addinputcheck${index+11}`} required="" 
                                                                    defaultChecked={item.addchecked}
                                                                />
                                                            </div>
                                                            <div className="form-check custom-checkbox mb-3 checkbox-primary">
                                                                <input type="checkbox" className="form-check-input" id={`role1editinputcheck${index+121}`} required="" 
                                                                    defaultChecked={item.editchecked}
                                                                />
                                                            </div>
                                                            <div className="form-check custom-checkbox mb-3 checkbox-success">
                                                                <input type="checkbox" className="form-check-input"  id={`role1deleteinputcheck${index+131}`} required="" 
                                                                    defaultChecked={item.deletechecked}
                                                                />
                                                            </div>
                                                         </div>
                                                    </div>
                                                </li>
                                            ))}
											
										</ul>
									</div>
									
								</div>
							</div>
                            <h4 className="heading mb-0 manage"><i className="fa-solid fa-user-plus text-primary me-2 mb-3 "></i> Job Management</h4>
							<div className="col-xl-12">
								<div className="card">
									<div className="card-body">
										<ul>
                                            {rightCheckBlog.map((item, index)=>(
                                                <li className="right-check" key={index}>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h6 className=" mb-0">{item.title}</h6>
                                                        <div className="d-flex">
                                                            <div className="form-check custom-checkbox mb-3 checkbox-warning">
                                                                <input type="checkbox" className="form-check-input"  id={`roleaddinputcheck${index+11}`} required="" 
                                                                    defaultChecked={item.addchecked}
                                                                />
                                                            </div>
                                                            <div className="form-check custom-checkbox mb-3 checkbox-primary">
                                                                <input type="checkbox" className="form-check-input" id={`roleeditinputcheck${index+121}`} required="" 
                                                                    defaultChecked={item.editchecked}
                                                                />
                                                            </div>
                                                            <div className="form-check custom-checkbox mb-3 checkbox-success">
                                                                <input type="checkbox" className="form-check-input"  id={`roledeleteinputcheck${index+131}`} required="" 
                                                                    defaultChecked={item.deletechecked}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}											
										</ul>
									</div>
									
								</div>
							</div>
							<h4 className="heading mb-0  manage"><i className="far fa-user text-primary me-2 mb-3 "/> Candidate Management</h4>
							<div className="col-xl-12">
								<div className="card">
									<div className="card-body">
										<ul>
                                            {rightCheckBlog.map((item, index)=>(
                                                <li className="right-check" key={index}>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h6 className=" mb-0">{item.title}</h6>
                                                        <div className="d-flex">                                                        
                                                            <div className="form-check custom-checkbox mb-3 checkbox-warning">
                                                                <input type="checkbox" className="form-check-input"  id={`role1addinputcheck${index+11}`} required="" 
                                                                    defaultChecked={item.addchecked}
                                                                />
                                                            </div>
                                                            <div className="form-check custom-checkbox mb-3 checkbox-primary">
                                                                <input type="checkbox" className="form-check-input" id={`role1editinputcheck${index+121}`} required="" 
                                                                    defaultChecked={item.editchecked}
                                                                />
                                                            </div>
                                                            <div className="form-check custom-checkbox mb-3 checkbox-success">
                                                                <input type="checkbox" className="form-check-input"  id={`role1deleteinputcheck${index+131}`} required="" 
                                                                    defaultChecked={item.deletechecked}
                                                                />
                                                            </div>
                                                         </div>
                                                    </div>
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
        </>
    );
};

export default AddRole;