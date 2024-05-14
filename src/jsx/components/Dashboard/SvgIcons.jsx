import React,{useReducer} from 'react';
import {Link} from 'react-router-dom';
import { Modal } from 'react-bootstrap';


import MainPagetitle from '../../layouts/MainPagetitle';
import { SVGICON } from '../../constant/theme';

const svgBlogData = [
    {Iconname : '2 User.svg', svgtype : SVGICON.userdouble,},
    {Iconname : '3 User.svg', svgtype : SVGICON.userthree},
    {Iconname : 'Activity.svg', svgtype : SVGICON.Activity},
    {Iconname : 'Add User.svg', svgtype : SVGICON.adduser},
    {Iconname : 'Bag.svg', svgtype : SVGICON.Bag},
    {Iconname : 'Bag-3.svg', svgtype : SVGICON.Bag3},
    {Iconname : 'Bookmark.svg', svgtype : SVGICON.Bookmark},
    {Iconname : 'Buy.svg', svgtype : SVGICON.Buy},
    {Iconname : 'Calendar.svg', svgtype : SVGICON.Calendar},
    {Iconname : 'Call.svg', svgtype : SVGICON.Call},
    {Iconname : 'Calling.svg', svgtype : SVGICON.Calling},
    {Iconname : 'Call-Missed.svg', svgtype : SVGICON.CallMissed},
    {Iconname : 'Call-Silent.svg', svgtype : SVGICON.CallSilent},
    {Iconname : 'Camera.svg', svgtype : SVGICON.Camera},
    {Iconname : 'Category.svg', svgtype : SVGICON.Category},
    {Iconname : 'Chart.svg', svgtype : SVGICON.Chart},
    {Iconname : 'Chat.svg', svgtype : SVGICON.Chat},
    {Iconname : 'Close-Square.svg', svgtype : SVGICON.Closesquare},
    {Iconname : 'Danger-Circle.svg', svgtype : SVGICON.Danger},
    {Iconname : 'Danger-Triangle.svg', svgtype : SVGICON.DangerTriangle},
    {Iconname : 'Delete.svg', svgtype : SVGICON.Delete},
    {Iconname : 'Discount.svg', svgtype : SVGICON.Discount},
    {Iconname : 'Discovery.svg', svgtype : SVGICON.Discovery},
    {Iconname : 'Document.svg', svgtype : SVGICON.Document},
    {Iconname : 'Download.svg', svgtype : SVGICON.Download},
    {Iconname : 'Edit.svg', svgtype : SVGICON.Edit},
    {Iconname : 'Edit-Square.svg', svgtype : SVGICON.Editsquare},
    {Iconname : 'Filter.svg', svgtype : SVGICON.Filter},
    {Iconname : 'Filter-2.svg', svgtype : SVGICON.Filter2},
    {Iconname : 'Folder.svg', svgtype : SVGICON.Folder},
    {Iconname : 'Game.svg', svgtype : SVGICON.Game},
    {Iconname : 'Graph.svg', svgtype : SVGICON.Graph},
    {Iconname : 'Heart.svg', svgtype : SVGICON.Heart},
    {Iconname : 'Hide.svg', svgtype : SVGICON.Hide},
    {Iconname : 'Home.svg', svgtype : SVGICON.HomesvgIcon},
    {Iconname : 'Image.svg', svgtype : SVGICON.Image},
    {Iconname : 'Image-3.svg', svgtype : SVGICON.Image3},    
    {Iconname : 'Info-Square.svg', svgtype : SVGICON.Infosquare},
    {Iconname : 'Location.svg', svgtype : SVGICON.Location},
    {Iconname : 'Lock.svg', svgtype : SVGICON.Lock},
    {Iconname : 'login.svg', svgtype : SVGICON.login},
    {Iconname : 'Logout.svg', svgtype : SVGICON.Logoutsvg},
    {Iconname : 'Message.svg', svgtype : SVGICON.Messagesvg},
    {Iconname : 'More-Circle.svg', svgtype : SVGICON.Morecircle},
    {Iconname : 'More-Square.svg', svgtype : SVGICON.Moresquare},
    {Iconname : 'Notification.svg', svgtype : SVGICON.Notificationsvg},
    {Iconname : 'Paper.svg', svgtype : SVGICON.Paper},
    {Iconname : 'Paper-Download.svg', svgtype : SVGICON.Paperdownload},
    {Iconname : 'Paper-Fail.svg', svgtype : SVGICON.Paperfail},
    {Iconname : 'Paper-Negative.svg', svgtype : SVGICON.PaperNegative},
    {Iconname : 'Paper-Plus.svg', svgtype : SVGICON.Papeplus},
    {Iconname : 'Paper-Upload.svg', svgtype : SVGICON.PaperUpload},
    {Iconname : 'Password.svg', svgtype : SVGICON.Password},
    {Iconname : 'Play.svg', svgtype : SVGICON.Play},
    {Iconname : 'Plus.svg', svgtype : SVGICON.Plus},
    {Iconname : 'Profile.svg', svgtype : SVGICON.Profile},
    {Iconname : 'Scan.svg', svgtype : SVGICON.Scan},
    {Iconname : 'Search.svg', svgtype : SVGICON.Search},
    {Iconname : 'Send.svg', svgtype : SVGICON.Send},
    {Iconname : 'Setting.svg', svgtype : SVGICON.SettingSvg},
    {Iconname : 'Shield-Done.svg', svgtype : SVGICON.Shielddone},
    {Iconname : 'Shield-Fail.svg', svgtype : SVGICON.Shieldfail},
    {Iconname : 'Show.svg', svgtype : SVGICON.Show},
    {Iconname : 'Star.svg', svgtype : SVGICON.Star},
    {Iconname : 'Swap.svg', svgtype : SVGICON.Swap},
    {Iconname : 'Ticket.svg', svgtype : SVGICON.Ticket},
    {Iconname : 'Ticket-Star.svg', svgtype : SVGICON.TicketStar},
    {Iconname : 'Ticket-Square.svg', svgtype : SVGICON.TicketSquare},
    {Iconname : 'Time-Circle.svg', svgtype : SVGICON.Timecircle},
    {Iconname : 'Time-Square.svg', svgtype : SVGICON.TimeSquare},
    {Iconname : 'Unlock.svg', svgtype : SVGICON.Unlock},
    {Iconname : 'Upload.svg', svgtype : SVGICON.Upload},
    {Iconname : 'Video.svg', svgtype : SVGICON.Video},
    {Iconname : 'Voice.svg', svgtype : SVGICON.Voice},
    {Iconname : 'Voice-3.svg', svgtype : SVGICON.Voice3},
    {Iconname : 'Volume-Down.svg', svgtype : SVGICON.Volumedown},
    {Iconname : 'Volume-Off.svg', svgtype : SVGICON.VolumeOff},
    {Iconname : 'Volume-Up.svg', svgtype : SVGICON.VolumeUp},
    {Iconname : 'Wallet.svg', svgtype : SVGICON.Wallet},
    {Iconname : 'Work.svg', svgtype : SVGICON.Work},    
    {Iconname : 'Arrow-Down-Circle.svg', svgtype : SVGICON.ArrowDownCircle},
    {Iconname : 'Arrow-Left-Circle.svg', svgtype : SVGICON.ArrowLeftCircle},
    {Iconname : 'Arrow-Right-Circle.svg', svgtype : SVGICON.ArrowRightCircle},
    {Iconname : 'Arrow-Up-Circle.svg', svgtype : SVGICON.ArrowUpCircle},
    {Iconname : 'Arrow-Down.svg', svgtype : SVGICON.ArrowDown},
    {Iconname : 'Arrow-Down-2.svg', svgtype : SVGICON.ArrowDown2},
    {Iconname : 'Arrow-Down-3.svg', svgtype : SVGICON.ArrowDown3},
    {Iconname : 'Arrow-Left.svg', svgtype : SVGICON.ArrowLeft},
    {Iconname : 'Arrow-Left-2.svg', svgtype : SVGICON.ArrowLeft2},
    {Iconname : 'Arrow-Left-3.svg', svgtype : SVGICON.ArrowLeft3},
    {Iconname : 'Arrow-Right.svg', svgtype : SVGICON.ArrowRight},
    {Iconname : 'Arrow-Right-2.svg', svgtype : SVGICON.ArrowRight2},
    {Iconname : 'Arrow-Right-3.svg', svgtype : SVGICON.ArrowRight3},
    {Iconname : 'Arrow-Down-Square.svg', svgtype : SVGICON.ArrowDownSquare},
    {Iconname : 'Arrow-Left-Square.svg', svgtype : SVGICON.ArrowLeftSquare},
    {Iconname : 'Arrow-Right-Square.svg', svgtype : SVGICON.ArrowRightSquare},
    {Iconname : 'Arrow-Up.svg', svgtype : SVGICON.ArrowUp},
    {Iconname : 'Arrow-Up-2.svg', svgtype : SVGICON.ArrowUp2},
    {Iconname : 'Arrow-Up-3.svg', svgtype : SVGICON.ArrowUp3},
    {Iconname : 'Arrow-Up-Square.svg', svgtype : SVGICON.ArrowUpSquare},

];

const SvgIcons = () => {

    const initialState = false;
    const reducer = (state, action) =>{   
        switch (action.type){
            case 'imageModal':
                return { ...state, imageModal: !state.imageModal, content : action.content}
            case 'svgModal':
                return { ...state, svgModal: !state.svgModal, content : action.content, title: action.title}			
            default:
                return state
        }	
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <MainPagetitle mainTitle="Dashboard" pageTitle="SVG Icons" parentTitle="Home"  />  
            <div className="container-fluid">
				<div className="row">
					<div className="card-body svg-area card">
					    <div className="card-header"> SVG Icons</div>
                        <div className="row">							
                            {svgBlogData.map((item, ind)=>(
                                <div className="col-xl-2 col-lg-3 col-xxl-3 col-md-4 col-sm-6 col-12" key={ind}>	
                                    <div className="svg-icons-ov">
                                        <div className="svg-icons-prev">
                                            <div dangerouslySetInnerHTML={{ __html: item.svgtype }} />
                                        </div>
                                        <div className="svg-classname">{item.Iconname}</div>
                                        <div className="svg-icon-popup">
                                            <Link to={"#"}  onClick={() => dispatch({type:'imageModal', content: item.Iconname })} className="btn btn-sm btn-brand"><i className="fa-solid fa-image"></i></Link>
                                            <Link to={"#"} onClick={() => dispatch({type:'svgModal', content: item.Iconname, title : item.svgtype })} className="btn btn-sm btn-brand"><i className="fa fa-code"></i></Link>
                                        </div>
                                        
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>    
                    <Modal className="modal fade" show={state.imageModal} onHide={()=>dispatch({type:'imageModal'})} centered>                                
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="svg_img_label_Brassieresvg">{state.content}</h5>
                                <button type="button" className="btn-close" onClick={() => dispatch({type:'imageModal'})}></button>
                            </div>
                            <div className="modal-body">                               
                                <pre>                           
    {`import MyImage from "../assets/images/iconly/Bulk/${state.content}";
    export default function Imageblog() {   
    return  
        <div>
        <img src={MyImage} alt="Example" />   
        </div>
    }`}
    ;
                                </pre>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => dispatch({type:'imageModal'})}>Close</button>
                            </div>
                        </div>
                    
                    </Modal>
                    <Modal className="modal fade" show={state.svgModal} onHide={()=>dispatch({type:'svgModal'})} centered >                    
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="svg_inline_label_Brassieresvg">{state.content}</h5>
                                <button type="button" className="btn-close"   onClick={() => dispatch({type:'svgModal'})}>
                                </button>
                            </div>
                            <div className="modal-body">
<pre>   
   {state.title}    
</pre>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => dispatch({type:'svgModal'})}>Close</button>
                            </div>
                        </div>
                        
                    </Modal>
                </div>    
            </div>    
        </>
    );
};

export default SvgIcons;