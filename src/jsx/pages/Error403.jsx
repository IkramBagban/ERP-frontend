import React from "react";
import { Link } from "react-router-dom";

const Error403 = () => {
   return (
      <div className="authincation h-100">
         <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-6">
                  <div className="error-page">
                     <div className="error-inner text-center">
                        <div className="dz-error" data-text="403">403</div>
                        <h4 className="error-head"><i className="fa fa-times-circle text-danger"></i> Forbidden Error!</h4>
                        <p className="error-head">You do not have permission to view this resource.</p>
                        <div>
                           <Link to={"/dashboard"} className="btn btn-secondary">BACK TO HOMEPAGE</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Error403;
