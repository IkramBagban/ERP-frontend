import React, { useState, forwardRef, useImperativeHandle  } from 'react';
import {Modal} from 'react-bootstrap';
import DatePicker from "react-datepicker";

const InviteCustomer = forwardRef((props, ref) => {
    const [startDate, setStartDate] = useState(new Date());
    const [inviteModal , setInviteModal] = useState(false);
    useImperativeHandle(ref, () => ({
        showInviteModal() {
            setInviteModal(true)
        }
    
      }));
    return(
        <>
            <Modal className="modal fade" id="exampleModal1" show={inviteModal} onHide={setInviteModal} centered>                
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel1">{props.Title}</h1>
                        <button type="button" className="btn-close" onClick={()=>setInviteModal(false)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-xl-12">
                                <label className="form-label">Email ID<span className="text-danger">*</span></label>
                                <input type="email" className="form-control" placeholder="hello@gmail.com" />
                                <label className="form-label mt-3">Employment date<span className="text-danger">*</span></label>                               
                                <DatePicker 
                                    className="form-control"
                                    selected={startDate} 
                                    onChange={(date) => setStartDate(date)} 
                                />
                                <div className="row">
                                    <div className="col-xl-6">
                                        <label className="form-label mt-3">First Name<span className="text-danger">*</span></label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <label className="form-label mt-3">Last Name<span className="text-danger">*</span></label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Surname" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 invite">
                                    <label className="form-label">Send invitation email<span className="text-danger">*</span></label>
                                    <input type ="email" className="form-control " placeholder="+ invite" />
                                </div>
                            </div>
                        </div>                                
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger light" onClick={()=>setInviteModal(false)}>Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>               
            </Modal>
        </>
    )
})
export default InviteCustomer;