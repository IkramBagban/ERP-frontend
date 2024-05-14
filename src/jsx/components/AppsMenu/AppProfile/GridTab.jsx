import React from 'react';
import {Link} from 'react-router-dom';
import { IMAGES } from '../../../constant/theme';

const usergridblog = [
    { id:'active', image:IMAGES.Friends1, title:'Sophia Ava', email:'demo1@gmail.com', posts:'175', followers:'50', following:'30', position:'Software Engineer', Joining:'15 Feb 2023'},
    { id:'deactive', image:IMAGES.User, title:'Alexandra Joi', email:'demo2@gmail.com', posts:'172', followers:'47', following:'20', position:'Web Doveloper', Joining:'10 Jan 2023'},
    { id:'active', image:IMAGES.Friends2, title:'Amelia Mia', email:'demo3@gmail.com', posts:'180', followers:'90', following:'40', position:'App Doveloper', Joining:'27 March 2022'},
    { id:'deactive', image:IMAGES.Friends3, title:'Olivia Emma', email:'demo4@gmail.com', posts:'1500', followers:'310', following:'10', position:'IT Head', Joining:'27 March 2022'},
    { id:'active', image:IMAGES.Friends4, title:'Sophia Ava', email:'demo1@gmail.com', posts:'175', followers:'50', following:'30', position:'Software Engineer', Joining:'15 Feb 2023'},
    { id:'deactive', image:IMAGES.User, title:'Alexandra Joi', email:'demo5@gmail.com', posts:'172', followers:'47', following:'20', position:'Web Doveloper', Joining:'10 Jan 2023'},
    { id:'active', image:IMAGES.Friends1, title:'Amelia Mia', email:'demo6@gmail.com', posts:'180', followers:'90', following:'40', position:'App Doveloper', Joining:'27 March 2022'},
    { id:'active', image:IMAGES.Friends3, title:'Olivia Emma', email:'demo2@gmail.com', posts:'1500', followers:'310', following:'10', position:'IT Head', Joining:'27 March 2022'},
    { id:'active', image:IMAGES.Friends2, title:'Sophia Ava', email:'demo1@gmail.com', posts:'175', followers:'50', following:'30', position:'Software Engineer', Joining:'15 Feb 2023'},
    { id:'deactive', image:IMAGES.User, title:'Alexandra Joi', email:'demo2@gmail.com', posts:'172', followers:'47', following:'20', position:'Web Doveloper', Joining:'10 Jan 2023'},
    { id:'active', image:IMAGES.Friends2, title:'Amelia Mia', email:'demo3@gmail.com', posts:'180', followers:'90', following:'40', position:'App Doveloper', Joining:'27 March 2022'},
    { id:'deactive', image:IMAGES.Friends3, title:'Olivia Emma', email:'demo4@gmail.com', posts:'1500', followers:'310', following:'10', position:'IT Head', Joining:'27 March 2022'},
];

const GridTab = () => {
    return (
        <>
            <div className="row">
                {usergridblog.map((item,index)=>(
                    <div className="col-xl-3 col-lg-4 col-sm-6" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-use-box">
                                    <div className="crd-bx-img">
                                        <img src={item.image} className="rounded-circle" alt="" />
                                        <div className= {`active ${item.id === "deactive"  ?  'deactive' : ''} `}></div>
                                    </div>
                                    <div className="card__text">
                                        <h4 className="mb-0">{item.title}</h4>
                                        <p>{item.email}</p>
                                    </div>
                                    <ul className="card__info">
                                        <li>
                                            <span className="card__info__stats">{item.posts}</span>
                                            <span>posts</span>
                                        </li>
                                        <li>
                                            <span className="card__info__stats">{item.followers}</span>
                                            <span>followers</span>
                                        </li>
                                        <li>
                                            <span className="card__info__stats">{item.following}</span>
                                            <span>following</span>
                                        </li>
                                    </ul>
                                    <ul className="post-pos">
                                        <li>
                                            <span className="card__info__stats">Position: </span>
                                            <span>{item.position}</span>
                                        </li>
                                        <li>
                                            <span className="card__info__stats">Joining Date: </span>
                                            <span>{item.Joining}</span>
                                        </li>
                                    </ul>
                                    <div>
                                        <Link to={"#"} className="btn btn-primary btn-sm me-2">Message</Link>{" "}
                                        <Link to={"#"} className="btn btn-secondary btn-sm ms-2" >Following</Link>
                                    </div>	
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>  
        </>
    );
};

export default GridTab;