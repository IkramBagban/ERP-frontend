import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { IMAGES } from '../../../constant/theme';
import { Dropdown } from 'react-bootstrap';

const tableData = [
    
    {image : IMAGES.contactd1, name : 'lether Dress', price: '85.20', orders: '750', stock: 'Out of Stock', stockColor: 'danger', amount: '1200.75' },
    {image : IMAGES.contactd2, name : 'Men Jacket', price: '82.30', orders: '100', stock: 'In Stock', stockColor: 'success', amount: '11200.70' },
    {image : IMAGES.contactd3, name : 'Midi Dress', price: '10.77', orders: '200', stock: 'Out of Stock', stockColor: 'danger', amount: '13100.00' },
    {image : IMAGES.contactd4, name : 'Boy Dress', price: '62.20', orders: '200', stock: 'In Stock', stockColor: 'success', amount: '14100.50' },
    {image : IMAGES.contactd5, name : 'Teen Dress', price: '52.50', orders: '400', stock: 'Out of Stock', stockColor: 'danger', amount: '13200.30' },
    {image : IMAGES.contactd6, name : 'White Top Dress', price: '32.20', orders: '300', stock: 'In Stock', stockColor: 'success', amount: '16200.40' },
    {image : IMAGES.contactd7, name : 'Mobile', price: '22.10', orders: '450', stock: 'Out of Stock', stockColor: 'danger', amount: '131200.50' },
    {image : IMAGES.contactd8, name : 'Laptop', price: '52.10', orders: '300', stock: 'In Stock', stockColor: 'success', amount: '24200.70' },
    {image : IMAGES.contactd14, name : 'Air Conditioner', price: '32.50', orders: '250', stock: 'Out of Stock', stockColor: 'danger', amount: '31400.10' },
    {image : IMAGES.contactd13, name : 'Blade Table Fan', price: '12.10', orders: '100', stock: 'In Stock', stockColor: 'success', amount: '10300.60' },
    {image : IMAGES.contactd9, name : 'Earphone', price: '92.10', orders: '200', stock: 'In Stock', stockColor: 'success', amount: '13100.70' },
    {image : IMAGES.contactd10, name : 'Bag Pack', price: '87.00', orders: '105', stock: 'Out of Stock', stockColor: 'danger', amount: '15200.70' },
    {image : IMAGES.contactd11, name : 'lether jacket', price: '65.10', orders: '240', stock: 'In Stock', stockColor: 'success', amount: '17200.70' },
    {image : IMAGES.contactd12, name : 'Men JacBlack Dress', price: '62.10', orders: '300', stock: 'Out of Stock', stockColor: 'danger', amount: '16600.70' }
    
];

const ActiveProjects = () => {
    const [globalSelect, setGlobalSelect] = useState('Today');
    const [data, setData] = useState(
		document.querySelectorAll("#selling-tbl_wrapper tbody tr")
	);
	const sort = 7;
	const activePag = useRef(0);
	const [test, settest] = useState(0);
	const chageData = (frist, sec) => {
		for (var i = 0; i < data.length; ++i) {
			if (i >= frist && i < sec) {
				data[i].classList.remove("d-none");
			} else {
				data[i].classList.add("d-none");
			}
		}
	};
   
   useEffect(() => {
      setData(document.querySelectorAll("#selling-tbl_wrapper tbody tr"));
	}, [test]);

   activePag.current === 0 && chageData(0, sort);
   let paggination = Array(Math.ceil(data.length / sort))
      .fill()
      .map((_, i) => i + 1);
	const onClick = (i) => {
		activePag.current = i;
		chageData(activePag.current * sort, (activePag.current + 1) * sort);
		settest(i);
	};
   
	const checkbox = document.querySelectorAll(".sorting_10 input");
	const motherCheckBox = document.querySelector(".sorting_asc_1 input");
        const checkboxFun = (type) => {
        for (let i = 0; i < checkbox.length; i++) {
            const element = checkbox[i];
            if (type === "all") {
                if (motherCheckBox.checked) {
                element.checked = true;
                } else {
                element.checked = false;
                }
            } else {
                if (!element.checked) {
                motherCheckBox.checked = false;
                break;
                } else {
                motherCheckBox.checked = true;
                }
            }
        }
    };
    return (
        <>
            <div className="card">
                <div className="card-header border-0">
                    <h4 className="heading mb-0">Best Selling Products</h4>
                    <div className="d-flex align-items-center cs-settiong">
                        <span>SORT BY:</span>
                        <Dropdown className='global-drop'>
                            <Dropdown.Toggle as="div" className='i-false global-drop-toggle'>                            
                                {globalSelect}{" "}
                                <i className="fa-solid fa-chevron-down" /> 
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='global-drop-menu'>
                                <Dropdown.Item onClick={()=>setGlobalSelect('Today')}>Today</Dropdown.Item>
                                <Dropdown.Item onClick={()=>setGlobalSelect('Week')}>Week</Dropdown.Item>
                                <Dropdown.Item onClick={()=>setGlobalSelect('Month')}>Month</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>	
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive active-projects active-projects ItemsCheckboxSec selling-product shorting">             
                        <div id="selling-tbl_wrapper" className="dataTables_wrapper no-footer">
                            <table id="projects-tbl" className="table ItemsCheckboxSec dataTable no-footer mb-0">
                                <thead>
                                    <tr>
                                        <th className="sorting_asc_1" >
                                            <div className="form-check custom-checkbox ms-0">
                                                <input type="checkbox" className="form-check-input checkAllInput" required="" 
                                                    onClick={() => checkboxFun("all")}
                                                />
                                                <label className="form-check-label" htmlFor="checkAll"></label>
                                            </div>
                                        </th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Orders</th>
                                        <th>Stock</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((item, index)=>(
                                        <tr key={index}>
                                            <td className="sorting_10">
                                                <div className="form-check custom-checkbox">
                                                    <input type="checkbox" className="form-check-input" 
                                                        id={`activeproject${index+101}`} required="" 
                                                        onClick={() => checkboxFun()}
                                                    />
                                                    <label className="form-check-label" htmlFor={`activeproject${index+101}`}></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="products">
                                                    <img src={item.image} className="avatar avatar-md" alt="" />
                                                    <div>
                                                        <h6><Link to={"#"}>{item.name}</Link></h6>
                                                        <span>24 Apr 2021</span>	
                                                    </div>	
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-primary">${item.price}</span>
                                            </td>
                                            <td>
                                                <span>{item.orders}</span>
                                            </td>
                                            <td>
                                                <span className={`badge light border-0 badge-${item.stockColor}`} >{item.stock}</span>
                                            </td>
                                            <td>
                                                <span>${item.amount}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                
                            </table>
                            <div className="d-sm-flex text-center justify-content-between align-items-center">
                                <div className="dataTables_info">
                                    Showing {activePag.current * sort + 1} to{" "}
                                    {data.length > (activePag.current + 1) * sort
                                        ? (activePag.current + 1) * sort
                                        : data.length}{" "}
                                    of {data.length} entries
                                </div>
                                <div
                                    className="dataTables_paginate paging_simple_numbers"
                                    id="example2_paginate"
                                >
                                    <Link
                                        className="paginate_button previous disabled"
                                        to="#"
                                        onClick={() =>
                                        activePag.current > 0 &&
                                        onClick(activePag.current - 1)
                                        }
                                    >
                                        <i className="fa-solid fa-angle-left" />
                                    </Link>
                                    <span>
                                        {paggination.map((number, i) => (
                                        <Link
                                            key={i}
                                            to="#"
                                            className={`paginate_button  ${
                                                activePag.current === i ? "current" : ""
                                            } `}
                                            onClick={() => onClick(i)}
                                        >
                                            {number}
                                        </Link>
                                        ))}
                                    </span>
                                    <Link
                                        className="paginate_button next"
                                        to="#"
                                        onClick={() =>
                                        activePag.current + 1 < paggination.length &&
                                        onClick(activePag.current + 1)
                                        }
                                    >
                                        <i className="fa-solid fa-angle-right" />
                                    </Link>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default ActiveProjects;