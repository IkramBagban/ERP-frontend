import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { Accordion, Dropdown } from 'react-bootstrap';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import PageTitle from '../../../layouts/PageTitle';
import { IMAGES, SVGICON } from '../../../constant/theme';

const aboutme = [
	{title:'Software Engineer at W3itexperts', icon:'fa-solid fa-briefcase', subtitle:'Oct 2021 - Present'},
	{title:'Techno India NJR Institute', icon:'fa-solid fa-book', subtitle:'Nov-2019 at University Usa'},
	{title:'Lived In Usa', icon:'fa-solid fa-location-dot', subtitle:'Oct 2019 - Present'},
	{title:'Blood Group', icon:'fa-solid fa-layer-group', subtitle:'A+'},
];
const followers = [
	{title: 'Liam Antony', subtitle:'Web Doveloper', image: IMAGES.contact1},
	{title: 'Ricky Noah', subtitle:'Php Doveloper', image:IMAGES.contact2},
	{title: 'Oliver Elijah', subtitle:'Ux Designer', image:IMAGES.contact3},
	{title: 'James William', subtitle:'Web Designer', image:IMAGES.contact4},
	{title: 'Benjamin Lucas', subtitle:'App Doveloper', image:IMAGES.contact1},
];
const galleryBlog = [
	{image: IMAGES.Profile3}, {image: IMAGES.Profile4},
	{image: IMAGES.Profile2}, {image: IMAGES.Profile4},
	{image: IMAGES.Profile3}, {image: IMAGES.Profile2},
];
const mediaBlog = [
	{image: IMAGES.Profile5},
	{image: IMAGES.Profile6},
	{image: IMAGES.Profile7},
];
const friends = [
	{image: IMAGES.Friends3},
	{image: IMAGES.contact2},
	{image: IMAGES.contact3},
	{image: IMAGES.Friends2},
	{image: IMAGES.contact1},
	{image: IMAGES.contact4},
	{image: IMAGES.Friends4},
	{image: IMAGES.Friends1},
	{image: IMAGES.Friends3},
	{image: IMAGES.contact2},
	{image: IMAGES.contact3},
	{image: IMAGES.Friends2},
];

const productBlog = [
	{bigimg : IMAGES.Post1, halfimage1: IMAGES.Post11, halfimage2: IMAGES.Post12},
	{bigimg : IMAGES.Post2, halfimage1: IMAGES.Post12, halfimage2: IMAGES.Post13},
];

const AppProfile2 = () => {
	const onInit = () => {
	};  	
    return (
        <>
            <PageTitle activeMenu="Profile" motherMenu={'App'} />   
            <div className="container-fluid">               
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card card-profile">
							<div className="admin-user">
								<div className="img-wrraper">                              
									<div className="">
										<img src={IMAGES.User} className="rounded-circle" alt="" />
                                    </div>
									<Link to={"/edit-profile"} className="icon-wrapper"><i className="fa-solid fa-pencil"></i></Link>
								</div>
								<div className="user-details">
									<div className="title">
										<Link to={"#"}><h4>Thomas Fleming</h4></Link>
									  	<h6>Web Designer</h6>
									</div>
									  <ul className="user-social-links">
										<li><Link to={"#"}><i className="fa-brands fa-facebook-f"></i></Link></li>
										<li><Link to={"#"}><i className="fa-brands fa-skype"></i></Link></li>
										<li><Link to={"#"}><i className="fa-brands fa-linkedin-in"></i></Link></li>
										<li><Link to={"#"}><i className="fa-brands fa-instagram"></i></Link></li>
										<li><Link to={"#"}><i className="fa fa-rss"></i></Link></li>
									  </ul>
									  <ul className="follow-list">
										<li>
										  <div className="follow-num ">325</div><span>Follower</span>
										</li>
										<li>
										  <div className="follow-num ">450</div><span>Following</span>
										</li>
										<li>
										  <div className="follow-num ">500</div><span>Likes</span>
										</li>
									  </ul>									
								  </div>
							</div>	
                        </div>
                    </div>
                </div>
				<div className="row">
                    <div className="col-xl-3 col-xxl-4">
						<div className="row">
							<div className="col-xl-12">
								<div className="card">
									<div className="card-body profile-accordion pb-0">
										<Accordion className="accordion" id="accordionExample1">
											<Accordion.Item className="accordion-item">
												<Accordion.Header as="h2" className="accordion-header" id="headingOne1">												  
													About Me												  
												</Accordion.Header>
												<Accordion.Body id="collapseOne1" className="collapse show">												 
													<div className="about-me">
														<ul>
															{aboutme.map((item, ind)=>(
																<li key={ind}>
																	<i className={item.icon}></i>
																	<div>
																		<h6>{item.title}</h6>
																		<span>{item.subtitle}</span>
																	</div>
																</li>
															))}
															
															<li className="second-head text-black">Social Networks</li>
															<div>
																<Link to={"#"} className="btn btn-block bg-facebook mb-2"><i className="fa-brands fa-facebook-f me-2"></i>Facebook</Link>
																<Link to={"#"} className="btn btn-block bg-whatsapp mb-2"><i className="fa-brands fa-whatsapp me-2"></i>WhatsApp</Link>
																<Link to={"#"} className="btn btn-block bg-facebook mb-2"><i className="fa-brands fa-skype me-2"></i>Skype</Link>
															</div>
														</ul>
													</div>													
												  
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</div>
								</div>
							</div>
							<div className='col-xl-12'>
								<div className="card">
									<div className="card-body profile-accordion pb-0">
										<Accordion className="accordion" id="accordionExample2">
											<Accordion.Item className="accordion-item">
												<Accordion.Header as="h2" className="accordion-header" id="headingOne2">												  
													Followers												  
												</Accordion.Header>
												<Accordion.Body id="collapseOne2" className="accordion-collapse collapse show">													
													{followers.map((item, index)=>(
														<div className="products mb-3" key={index}>
															<img src={item.image} className="avatar avatar-md" alt="" />
															<div>
																<h6><Link to={"#"}>{item.title}</Link></h6>
																<span>{item.subtitle}</span>	
															</div>	
														</div>
													))}
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</div>
								</div>
							</div>
							<div className='col-xl-12'>
								<div className="card">
									<div className="card-body profile-accordion pb-0">
										<Accordion className="accordion" id="accordionExample2">
											<Accordion.Item className="accordion-item">
												<Accordion.Header as="h2" className="accordion-header" id="headingOne2">												  
													Following												  
												</Accordion.Header>
												<Accordion.Body id="collapseOne2" className="accordion-collapse collapse show">													
													{followers.map((item, index)=>(
														<div className="products mb-3" key={index}>
															<img src={item.image} className="avatar avatar-md" alt="" />
															<div>
																<h6><Link to={"#"}>{item.title}</Link></h6>
																<span>{item.subtitle}</span>	
															</div>	
														</div>
													))}
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</div>
								</div>
							</div>
							<div className='col-xl-12'>
								<div className="card">
									<div className="card-body profile-accordion pb-0">
										<Accordion  id="accordionExample4">
											<Accordion.Item className="accordion-item">
												<Accordion.Header as="h2" className="accordion-header" id="headingOne4">												  
													Interest												  
												</Accordion.Header>
												<Accordion.Body id="collapseOne4" className="accordion-collapse collapse show" >
													<div className="profile-interest">
														<LightGallery
															onInit={onInit}
															speed={500}
															plugins={[lgThumbnail, lgZoom]}
															elementClassNames="row sp4"
														>
															
															{galleryBlog.map((item,index)=>(
																<div data-src={item.image} className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1" key={index}>
																	<img src={item.image} style={{width:"100%"}} alt="gallery"/>
																</div>
															))}
														</LightGallery>	
													</div>
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</div>
								</div>
							</div>
							<div className="col-xl-12">
								<div className="card">
									<div className="card-body profile-accordion pb-0">
										<Accordion >
											<Accordion.Item className="accordion-item">
												<Accordion.Header as="h2" >												  
													Our Latest News												  
												</Accordion.Header>
												<Accordion.Body >
													<div className="accordion-body">
														<div className="profile-news">
															{mediaBlog.map((item, index)=>(
																<div className="media pt-3 pb-3" key={index}>
																	<img src={item.image} alt="" className="me-3 rounded" width="75" />
																	<div className="media-body">
																		<h6 className="m-b-5"><Link to="/post-details" className="text-black">Collection of textile samples</Link></h6>
																		<p className="mb-0">I shared this on my fb wall a few months back, and I thought.</p>
																	</div>
																</div>
															))}															
														</div>
													</div>
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</div>
								</div>
							</div>
							<div className="col-xl-12">
								<div className="card">
									<div className="card-body profile-accordion pb-0">
										<Accordion>
											<Accordion.Item className="accordion-item">
												<Accordion.Header as="h2">												  
													Friends												  
												</Accordion.Header>
												<Accordion.Body id="collapseOne6">													
													<div className="friend-list">
														{friends.map((item, ind)=>(
															<img src={item.image} className="avatar avatar-md" alt=""  key={ind}/>
														))}															
													</div>													
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-9 col-xxl-8">
						<div className="row">
							{productBlog.map((item, ind)=>(
								<Fragment key={ind}>
									<div className="col-xl-12" >
										<div className="card">
											<HeaderBlog />
											<div className="card-body pt-0">
												<div className="post-img">
													<img src={item.bigimg} alt="" />	
												</div>
												<div className="post-see d-flex align-items-center mt-3">
												<ul>
													<div className="avatar-list avatar-list-stacked">
														<img src={IMAGES.contact1} className="avatar rounded-circle" alt="" />
														<img src={IMAGES.contact7} className="avatar rounded-circle" alt="" />
														<img src={IMAGES.contact7} className="avatar rounded-circle" alt="" />
													</div>
												</ul>
												<h6 className="mb-0 ms-3">+3 people see this post</h6>
												</div>
												<div className="mt-3">
													<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
													Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
													when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
												</div>
												<PostComment />
											</div>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="card">
											<HeaderBlog />
											<div className="card-body pt-0">
												<div className="row">
													<div className="col-xl-6">
														<div className="post-img">
															<img src={item.halfimage1} className="me-3" alt="" />	
														</div>	
													</div>
													<div className="col-xl-6">
														<div className="post-img">
															<img src={item.halfimage2} className="ms-3" alt="" />	
														</div>	
													</div>
												</div>
												<div className="post-see d-flex align-items-center mt-3">
													<ul>
														<div className="avatar-list avatar-list-stacked">
															<img src={IMAGES.contact1} className="avatar rounded-circle" alt="" />{" "}
															<img src={IMAGES.contact7} className="avatar rounded-circle" alt="" />{" "}
															<img src={IMAGES.contact6} className="avatar rounded-circle" alt="" />
														</div>
													</ul>
													<h6 className="mb-0 ms-3">+3 people see this post</h6>
												</div>
												<div className="mt-3">
													<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
													Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
													when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
												</div>
												<PostComment />
											</div>
										</div>
									</div>
								</Fragment>
							))}							
								
						</div>
						
					</div>
				</div>			

            </div>
        </>
    );
};

function HeaderBlog(){
	return(
		<div className="card-header border-0">
			<div className="products">
				<img src={IMAGES.User} className="avatar avatar-md rounded-circle" alt="" />
				<div>
					<h5 className="mb-0"><Link to={"#"} className="text-black">Thomas Fleming</Link></h5>
					<span>8 Hours ago</span>	
				</div>	
			</div>
			<Dropdown className="dropdown custom-dropdown ">
				<Dropdown.Toggle as="div" className="i-false btn sharp btn-primary tp-btn  ms-3" data-bs-toggle="dropdown">
					{SVGICON.ThreeDots}
				</Dropdown.Toggle>
				<Dropdown.Menu className="dropdown-menu dropdown-menu-end">
					<Dropdown.Item>Option 1</Dropdown.Item>
					<Dropdown.Item>Option 2</Dropdown.Item>
					<Dropdown.Item>Option 3</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	)
}

function  PostComment(){
	return(
		<ul className="post-comment d-flex mt-3">
			<li>
				<label className="me-3"><Link to={"#"}><i className="fa-regular fa-heart me-2"></i>Like</Link></label>
			</li>
			<li>
				<label className="me-3"><Link to={"#"}><i className="fa-regular fa-message me-2"></i>Comment</Link></label>
			</li>
			<li>
				<label className="me-3"><Link to={"#"}><i className="fa-solid fa-share me-2"></i>Share</Link></label>	
			</li>
		</ul>
	)
}

export default AppProfile2;