import React from 'react';
import MainPagetitle from '../../layouts/MainPagetitle';
import FinanceTable from './elements/FinanceTable';
import { useNavigate } from 'react-router-dom';



const Finance = () => {	
	const nav = useNavigate();
	const submitHandle =(e)=> {
		e.preventDefault();
		nav("#");
	}
    return (
        <>
            <MainPagetitle mainTitle="Finance" pageTitle={'Finance'}  parentTitle={'Home'} />
            <div className="container-fluid">
				<div className="row">
					<div className="col-xl-3 col-xxl-4">
						<div className="card h-auto">
							<div className="card-header">
								<h4 className="heading mb-0">Add New Account </h4>
							</div>
							<div className="card-body">
								<form className="finance-hr" onClick={(e)=>submitHandle(e)}>
									<div className="form-group mb-3">
										<label className="text-secondary font-w500"> Account Title<span className="text-danger">*</span>
									  </label>
									  <input type="text" className="form-control"  placeholder="Account Title" />
									</div>
									<div className="form-group mb-3">
									  <label> Amount<span className="text-danger">*</span>
									  </label>
									  <div className="input-group">
										<div className="input-group-text">$</div>
										<input type="text" className="form-control" placeholder="Initial Balance" />
									  </div>
									</div>
									<div className="form-group mb-3">
										<label className="text-secondary"> Account No<span className="text-danger">*</span>
									  </label>
									  <input type="text" className="form-control"  placeholder="Account Title" />
									</div>
									<div className="form-group mb-3">
										<label className="text-secondary">Branch Code<span className="text-danger">*</span>
									  </label>
									  <input type="text" className="form-control"  placeholder="Branch Code" />
									</div>
									<div className="form-group mb-3">
										<label className="text-secondary">Branch Name<span className="text-danger">*</span>
									  </label>
									  <input type="text" className="form-control"  placeholder="Branch Name" />
									</div>
									<button type="submit" className="btn btn-primary mb-3">Confirm</button>
								</form>
							</div>
						</div>
					</div>
                    <div className="col-xl-9 col-xxl-8">
                        <FinanceTable />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Finance;