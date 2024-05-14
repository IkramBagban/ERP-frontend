import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import MainPagetitle from '../../layouts/MainPagetitle';
import { IMAGES } from '../../constant/theme';

const cardBlog = [
    {title: 'Education', image: IMAGES.Books},
    {title: 'News', image: IMAGES.News},
    {title: 'Ranking', image: IMAGES.Heart},
    {title: 'File Manager', image: IMAGES.File},
];

const postDetial = [
    {image: IMAGES.Friends1, image2: IMAGES.contact1, theme: 'secondary', maintitle:'DESIGNER', subtitle: 'Good programmers write code that humans can understand.', name : 'Marry', date: 'May 05'},
    {image: IMAGES.Friends2, image2: IMAGES.contact2, theme: 'primary', maintitle:'SOFTWARE', subtitle: "Rogramming isn't about what you know; it's about what you can figure out.", name : 'Jarry', date: 'April 05'},
    {image: IMAGES.Friends3, image2: IMAGES.contact3, theme: 'warning', maintitle:'MARKTING', subtitle: "Debugging is like being a detective in a crime movie where you're also the murderer.", name : 'Honey', date: 'May 10'},
    {image: IMAGES.Friends4, image2: IMAGES.contact7, theme: 'success', maintitle:'SOFTWARE', subtitle: 'The best way to predict the future is to invent it.', name : 'Harry ', date: 'June 12'},
    {image: IMAGES.Friends2, image2: IMAGES.contact1, theme: 'secondary', maintitle:'HARDWARE', subtitle: 'The best way to predict the future is to invent it.', name : 'Marry ', date: 'April 30'},
];
const usersDetial = [
    {image1: IMAGES.Blogs1, image2: IMAGES.contact1, theme: 'warning', maintitle:'DESIGNER',  name : 'Marry', date: 'May 05'},
    {image1: IMAGES.Blogs2, image2: IMAGES.contact2, theme: 'primary', maintitle:'SOFTWARE',  name : 'Jarry', date: 'April 05'},
    {image1: IMAGES.Blogs3, image2: IMAGES.contact5, theme: 'secondary', maintitle:'MARKTING',  name : 'Honey', date: 'May 10'},
    {image1: IMAGES.Blogs4, image2: IMAGES.contact1, theme: 'info', maintitle:'SOFTWARE',  name : 'Harry ', date: 'June 12'},
];
const seoToolsData = [
    {image1: IMAGES.Blogs5, image2: IMAGES.contact1, theme: 'secondary',  title: "Debugging is like being a detective movie where you're also the murderer." ,name : 'Marry', date: 'May 05'},
    {image1: IMAGES.Blogs6, image2: IMAGES.contact2, theme: 'info', title: "There are many variations of passages of Lorem Ipsum available." , name : 'Jarry', date: 'April 05'},
    {image1: IMAGES.Blogs3, image2: IMAGES.contact1, theme: 'primary', title: "Debugging is like being a detective movie where you're also the murderer.",  name : 'Honey', date: 'May 10'},
    {image1: IMAGES.Blogs4, image2: IMAGES.contact1, theme: 'info',  title:"Contrary to popular belief, Lorem Ipsum is not simply random text.", name : 'Harry ', date: 'June 12'},
];

const thirdPostBlog = [
    {image1 : IMAGES.Blogs3,  image2: IMAGES.contact1, title: 'Debugging is like being'},
    {image1 : IMAGES.Blogs1,  image2: IMAGES.contact2, title: 'Debugging is like being'},
    {image1 : IMAGES.Blogs2,  image2: IMAGES.contact3, title: "It is a long established fact that a reader wiil"},
];

const commentsblog = [
    {image: IMAGES.contact5, title: 'James Marry', subtitle: 'This is Nice!!'},
    {image: IMAGES.contact2, title: 'Robert Patricia', subtitle: 'This is Superb!!'},
    {image: IMAGES.contact1, title: 'John Jennifer', subtitle: 'This is Coments!!'},
];

const Blog = () => {
    const nav = useNavigate();
    const submitHandle = (e) => {
        e.preventDefault(e);
        nav("#");
    }
    return (
        <>
           <MainPagetitle mainTitle="Dashboard" parentTitle={'Home'}  pageTitle={'Blog'} />
           <div className="container">
				<div className="row">
                    {cardBlog.map((item, index)=>(
                        <div className="col-xl-3 col-md-3 col-6" key={index}>
                            <div className="card  blog-card">
                                <div className="card-body text-center">
                                    <img src={item.image} alt="" />  
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-xl-12">
						<div className="card">
							<div className="card-header border-0">
								<h4 className="heading mb-0 blog-title">Active users</h4>
								<Link to={"#"} className="btn btn-primary btn-sm">More</Link>
							</div>
							<div className="card-body">
								<div className="row">
									<div className="col-xl-6 col-lg-6 col-md-12">
										<div className="blog-img">
											<img src={IMAGES.Professional} alt="" className="blk-img" />
											<div className="blog-text">
												<h2>This quote highlights the importance of writing clear.</h2>
												<img src={IMAGES.contact1} className="avatar rounded-circle me-2" alt="" />
												{" "}<span>Hary in February 05, 2023</span>
											</div>
										</div>
									</div>	
									<div className="col-xl-6 col-lg-6 col-md-12">
										<div className="blog-post">
                                            {postDetial.map((item, index)=>(
                                                <div className="post-1" key={index}>
                                                    <img src={item.image} className="avatar rounded-circle me-2 custome-avatar" alt="" />
                                                    <div className="post-data">
                                                        <span className={`badge border-0 badge-sm badge-${item.theme}`}>{item.maintitle}</span>
                                                        <h4>{item.subtitle}</h4>
                                                        <div>
                                                            <img src={item.image2} className="avatar rounded-circle me-2 small-post" alt="" />{" "}
                                                            <span><b className="text-primary">{item.name}</b> in {item.date}, 2023</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
										</div>
									</div>
								</div>
							</div>
						</div>	
					</div>
                    <div className="col-xl-9 col-lg-7">
						<div className="row">
							<div className="col-xl-12">
								<div className="card">
									<div className="card-header border-0">
										<h4 className="heading mb-0 blog-title">Active users</h4>
										<Link to={"#"} className="btn btn-primary btn-sm">More</Link>
									</div>
									<div className="card-body">
										<div className="blog-img">
											<img src={IMAGES.Professional2} alt="" className="blk-img2" />
											<div className="blog-text">
												<h2>This quote highlights the importance of writing clear.</h2>
												<img src={IMAGES.contact2} className="avatar rounded-circle me-2 small-post" alt="" />
												<span>Hary in February 05, 2023</span>
											</div>
										</div>
										<div className="row">
                                            {usersDetial.map((item, ind)=>(
                                                <div className="col-xl-6" key={ind}>
                                                    <div className="seconday-post">
                                                        <img src={item.image1} alt="" />
                                                        <div className="post-1">
                                                            <div className="post-data">
                                                                <span className={`badge border-0 badge-sm badge-${item.theme}`}>{item.maintitle}</span>
                                                                <h4>Debugging is like being a detective in a crime movie where you're also the murderer.</h4>
                                                                <div>
                                                                    <img src={item.image2} className="avatar rounded-circle me-2 small-post" alt="" />
                                                                    <span><b className="text-primary">{item.name}</b> in {item.date}, 2023</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-12">
								<div className="card">
									<div className="card-header border-0">
										<h4 className="heading mb-0 blog-title">READ MORE</h4>
										<Link to={"#"} className="btn btn-primary btn-sm">More</Link>
									</div>
									<div className="card-body">
                                        {seoToolsData.map((item, ind)=>(
                                            <div className="third-post" key={ind}>
                                                <img src={item.image1} alt="" />
                                                <div className="post-1">
                                                    <div className="post-data">
                                                        <span className={`badge border-0 badge-sm badge-${item.theme} `}>SEO Tools</span>
                                                        <h4>{item.title}</h4>
                                                        <div className="mb-2">
                                                            <img src={item.image2} className="avatar rounded-circle me-2 small-post" alt="" />
                                                            {" "}<span><b className="text-primary">{item.name}</b> in {item.date}, 2023</span>
                                                        </div>
                                                        <span>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                        </span>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        ))}										
									</div>
								</div>
							</div>
						</div>
						
					</div>
                    <div className="col-xl-3 col-lg-5">
						<div className="card-header border-0 pt-0 px-0">
							<h4 className="heading mb-0 blog-title">POPULAR POSTS</h4>
						</div>
						<div className="recent-post">
							<div className="blog-img style-1">
								<img src={IMAGES.Professional} alt="" className="blk-img" />
								<div className="blog-text">
									<span className="badge badge-info border-0 badge-sm mb-2">DESIGNER</span>
									<h2>This quote highlights the importance of writing clear.</h2>
									<img src={IMAGES.contact1} className="avatar rounded-circle me-2" alt="" />
									<span>Hary in February 05, 2023</span>
								</div>
							</div>
                            {thirdPostBlog.map((data, ind)=>(
                                <div className="third-post style-1" key={ind}>
                                    <img src={data.image1} alt="" />
                                    <div className="post-1">
                                        <div className="post-data">
                                            <h4>{data.title}</h4>
                                            <div className="mb-2">
                                                <img src={data.image2} className="avatar rounded-circle me-2 small-post" alt="" /> 
                                                <span> April 05, 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}							
						</div>
						<div className="card-header border-0 pt-0 px-0">
							<h4 className="heading mb-0 blog-title">SOCIAL PLUGIN</h4>
						</div>
						<div className="mb-4">
							<ul className="c-social">
								<li><a href="https://www.facebook.com/dexignzone"  rel="noreferrer"  target="_blank" className="bg-facebook"><i className="fa-brands fa-facebook-f"></i></a></li>
								<li><a href="https://www.whatsapp.com/"  rel="noreferrer"  target="_blank" className="bg-whatsapp"><i className="fa-brands fa-whatsapp"></i></a></li>
								<li><a href="https://www.linkedin.com/in/dexignzone"  rel="noreferrer"  target="_blank" className="bg-linkedin"><i className="fa-brands fa-linkedin-in"></i></a></li>
								<li><a href="skype:rahulxarma?chat" className="bg-skype"><i className="fa-brands fa-skype"></i></a></li>
							</ul>
						</div>
						<div className="card h-auto notifiy">
							<div className="card-body">
								<div className="icon-box icon-box-sm bg-primary">
									<i className="fa-solid fa-bell text-white"></i>
								</div>
								<div className="notify-data">
									<h6>Follow by Email</h6>
									<span>Get Notified About Next Update Direct to Your inbox</span>
									<form onClick={(e)=>submitHandle(e)}>
										<div className="mt-3">
										  <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
										  <Link to={"#"} className="btn btn-primary btn-sm  d-block mt-3">subscribe</Link>
										</div>
										<span className="text-start mt-3 d-block text-danger">* We promise that we don't spam !</span>
									</form>	
								</div>	
							</div>
						</div>
						<div className="recent-post">
							<div className="card-header border-0 pt-0 px-0">
								<h4 className="heading mb-0 blog-title">websites</h4>
							</div>
                            {thirdPostBlog.map((item, ind)=>(
                                <div className="third-post style-1" key={ind}>
                                    <img src={item.image1} alt="" />
                                    <div className="post-1">
                                        <div className="post-data">
                                            <h4>{item.title}</h4>
                                            <div className="mb-2">
                                                <span> April 05, 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}							
						</div>
						<div className="recent-post">
							<div className="card-header border-0 pt-0 px-0">
								<h4 className="heading mb-0 blog-title">Comments</h4>
							</div>
                            {commentsblog.map((item, ind)=>(
                                <div className="third-post style-2" key={ind}>
                                    <img src={item.image} className="avatar  rounded-circle me-2 av-post" alt="" />
                                    <div className="post-1">
                                        <div className="post-data">
                                            <h4 className="mb-0">{item.title}</h4>
                                            <div>
                                                <span>{item.subtitle}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
						</div>
					</div>
                </div>   
            </div>   
        </>
    );
};

export default Blog;