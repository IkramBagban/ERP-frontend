import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
   return (
      <div className="authincation h-100">
         <div className="container h-100">
               <div className="row justify-content-center h-100 align-items-center">
                  <div className="col-md-6">
                     <div className="error-page">
                        <div className="error-inner text-center">
                        <div className="dz-error" data-text="404">404</div>
                        <h4 className="error-head"><i className="fa fa-exclamation-triangle text-warning"></i> The page you were looking for is not found!</h4>                        
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

export default Error404;
