import React, { Fragment } from "react";
import Products from "./Products";

/// Data
import productData from "../productData";
import PageTitle from "../../../../layouts/PageTitle";

const ProductGrid = () => {
   return (
      <Fragment>
         <PageTitle activeMenu="Product Grid" motherMenu="Shop" />
         <div className="container-fluid mh-auto">
            <div className="row">
               {productData.map((product, index) => (
                  <Products key={index} product={product} />
               ))}
            </div>
         </div>
      </Fragment>
   );
};

export default ProductGrid;
