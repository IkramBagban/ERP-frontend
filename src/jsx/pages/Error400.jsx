import React from "react";
import { Link } from "react-router-dom";

const Error400 = () => {
   return (
      <div className="authincation h-100">
         <div className="container ">
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-6">
                  <div className="error-page">
                     <div className="error-inner text-center">
                        <div className="dz-error">400</div>
                        <h2 className="error-head">We are sorry. But the page you are looking for cannot be found.</h2>
                        <Link to={"/dashboard"} className="btn btn-secondary">BACK TO HOMEPAGE</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Error400;
