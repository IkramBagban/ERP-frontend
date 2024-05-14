import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { CSVLink } from 'react-csv';

const tableData = [
    {account:'Fixed Deposit', amount:'800', accountno:'123400000000', branchcode:'5678',branchname:'Bank Of Lundon'},
    {account:'Recurring Deposit', amount:'900', accountno:'123400000000', branchcode:'5678',branchname:'Bank Of Lundon'},
    {account:'Savving Account', amount:'700', accountno:'123400000000', branchcode:'5678',branchname:'Bank Of Lundon'},
    {account:'Current Account', amount:'600', accountno:'123400000000', branchcode:'5678',branchname:'Bank Of Lundon'},
    {account:'Salary', amount:'500', accountno:'123400000000', branchcode:'5678',branchname:'Bank Of Lundon'},
    {account:'Fixed Deposit', amount:'800', accountno:'123400000000', branchcode:'5678',branchname:'Bank Of Lundon'},
    {account:'Recurring Deposit', amount:'900', accountno:'123400000000', branchcode:'5678',branchname:'Bank Of Lundon'},
    {account:'Savving Account', amount:'700', accountno:'123400000000', branchcode:'5678',branchname:'Bank Of Lundon'},
    {account:'Current Account', amount:'600', accountno:'123400000000', branchcode:'5678',branchname:'Bank Of Lundon'},
    {account:'Salary', amount:'500', accountno:'123400000000', branchcode:'5678',branchname:'Bank Of Lundon'},
    {account:'Fixed Deposit', amount:'800', accountno:'123400000000', branchcode:'5678',branchname:'Bank Of Lundon'},
    {account:'Recurring Deposit', amount:'900', accountno:'123400000000', branchcode:'5678',branchname:'Bank Of Lundon'},
    {account:'Savving Account', amount:'700', accountno:'123400000000', branchcode:'5678',branchname:'Bank Of Lundon'},
    {account:'Current Account', amount:'600', accountno:'123400000000', branchcode:'5678',branchname:'Bank Of Lundon'},
    {account:'Salary', amount:'500', accountno:'123400000000', branchcode:'5678',branchname:'Bank Of Lundon'},
    {account:'Recurring Deposit', amount:'900', accountno:'123400000000', branchcode:'5678',branchname:'Bank Of Lundon'},
]   

const headers = [
    { label: "Account Title", key: "account" },
    { label: "Amount", key: "amount" },
    { label: "Account No", key: "accountno" },
    { label: "Branch Code", key: "branchcode" },
    { label: "Branch Name", key: "branchname" },
]
const csvlink = {
    headers : headers,
    data : tableData,
    filename: "csvfile.csv"
}

const FinanceTable = () => {
    const [data, setData] = useState(
        document.querySelectorAll("#finance-tblwrapper tbody tr")
    );
    const sort = 8;
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
        setData(document.querySelectorAll("#finance-tblwrapper tbody tr"));
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
    return (
        <>
            <div className="card">                            
                <div className="card-body p-0">
                    <div className="table-responsive active-projects manage-client">   
                        <div className="tbl-caption d-flex justify-content-between text-wrap align-items-center">
                            <h4 className="heading mb-0">Finance</h4>
                            <div>
                                <CSVLink {...csvlink} className="btn btn-primary light btn-sm">
                                    <i className="fa-solid fa-file-excel" /> {" "} 
                                    Export Report
                                </CSVLink> 
                            </div>
                            
                        </div>          
                        <div id="finance-tblwrapper" className="dataTables_wrapper no-footer">
                            <table id="empoloyees-tbl1" className="table ItemsCheckboxSec dataTable no-footer mb-0">
                                <thead>
                                    <tr>
                                        <th>Account Title</th>
                                        <th>Amount</th>
                                        <th>Account No</th>
                                        <th>Branch Code</th>
                                        <th>Branch Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((item, index)=>(
                                        <tr key={index}>
                                            <td>
                                                <Link to={"#"} className="text-primary">{item.account}</Link>
                                            </td>
                                            <td><span>{item.amount} $</span></td>
                                            <td>
                                                <span>{item.accountno}</span>
                                            </td>
                                            <td>
                                                <span>{item.branchcode}</span>
                                            </td>
                                            <td>
                                                <span>{item.branchname}</span>
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
                                        to="/finance"
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
                                            to="/finance"
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
                                        to="/finance"
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

export default FinanceTable;