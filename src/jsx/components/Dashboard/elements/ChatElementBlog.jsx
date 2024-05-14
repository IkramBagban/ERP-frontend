import React, { useState } from 'react';
import { IMAGES, SVGICON } from '../../../constant/theme';
import { Dropdown } from 'react-bootstrap';

const ChatElementBlog = () => {
    const [globalSelect, setGlobalSelect] = useState('Setting');
    return (
        <>
            <div className="card">
                <div className="card-header border-0 mb-0">
                    <h4 className="heading mb-0">Chat</h4>
                    <div className="d-flex align-items-center cs-settiong">
                       {SVGICON.Setting}
                        <Dropdown className='global-drop'>
                            <Dropdown.Toggle as="div" className='i-false global-drop-toggle'>                            
                                {globalSelect}{" "}
                                <i className="fa-solid fa-chevron-down" /> 
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='global-drop-menu'>
                                <Dropdown.Item onClick={()=>setGlobalSelect('Setting')}>Setting</Dropdown.Item>
                                <Dropdown.Item onClick={()=>setGlobalSelect('Group')}>Group</Dropdown.Item>
                                <Dropdown.Item onClick={()=>setGlobalSelect('Chat')}>Chat</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>	
                </div>
                <div className="card-body pt-0">
                    <div className="chat-box-area style-1 dz-scroll" id="chartBox2">
                        <div className="media">
                            <div className="message-received w-auto">
                                <div className="d-flex">
                                    <img src={IMAGES.contact2} className="avatar rounded-circle" alt="" />
                                    <div className="ms-1 text">
                                        <p className="mb-1">Good morning</p>
                                        <p className="mb-1">Can you arrange schedule for next meeting?</p>
                                        <span>12:45 PM</span>
                                    </div>	
                                </div>
                            </div>
                            
                        </div>
                        <span className="text-center d-block mb-4">Today</span>
                        <div className="media justify-content-end align-items-end ms-auto">
                            <div className="message-sent w-auto">
                                <p className="mb-1">Very Good morning</p>
                                <p className="mb-1">Okay, I’ll arrange it soon. i noftify you when</p>
                                <p className="mb-1">Very Good morning</p>
                                <p>Okay, I’ll arrange it soon. i noftify you when it’s done<br/>
                                    +91-235 2574 2566<br/>
                                    kk Sharma<br/>
                                    pan card eeer2063i</p>
                                <span className="fs-12">9.30 AM</span>
                            </div>
                        </div>
                    </div>
                    <div className="message-send">
                        <div className="type-massage style-1">
                            <div className="input-group">
                                <textarea rows="1" className="form-control" placeholder="Hello Hanuman..."></textarea>
                            </div>
                            
                        </div>
                        <button type="button" className="btn btn-primary p-2">
                            Send{" "}
                            {SVGICON.Attachment}
                        </button>
                    </div>	
                </div>
            </div>  
        </>
    );
};

export default ChatElementBlog;