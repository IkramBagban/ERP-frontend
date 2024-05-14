import React, { useState } from 'react';                        
import {Link} from 'react-router-dom';
import Select from 'react-select';
// import { SelectPicker } from 'rsuite';

import {Tooltip, OverlayTrigger} from 'react-bootstrap';

import { IMAGES, SVGICON } from '../../constant/theme';

const options = [    
    { value: '1', label: 'Product' },
    { value: '2', label: 'Post' },
]
const options1 = [    
    { value: '1', label: 'Post' },
    { value: '2', label: 'Product' },
]
const options2 = [    
    { value: '1', label: 'Uncategorized' },
    { value: '2', label: 'Categorized' },
]
const options3 = [    
    { value: '1', label: 'Draft' },
    { value: '2', label: 'Categorized' },
]

const data = [    
    { icon : IMAGES.England , value: 1, label: 'England', },
    { icon : IMAGES.IndiaFlag, value: 2, label: 'India',  },
    { icon : IMAGES.Arab, value: 3, label: 'UAE' },
]

const FineTuneJob = () => {
   
    const [selectedOption, setSelectedOption] = useState(data[0]);
    const handleChange = e => {
        setSelectedOption(e);
    }

    // const renderMenuItem = (label, item) => {
    //     return (
    //       <div>
    //         <img src={item.icon} alt={label} style={{ width: 20, marginRight: 10 }} />
    //         {label}
    //       </div>
    //     );
    //   };
    return (
        <div className="card overflow-hidden h-auto">
            <div className="card-header border-0 pb-0">
                <h4 className="heading mb-0">Create Repurpose Job</h4>
                
                <Select                
                    className="custom-react-select img-select"    
                    isSearchable={false}
                    value={selectedOption}
                    options={data}
                    onChange={handleChange}
                    getOptionLabel={e => (
                        <div style={{ display: 'flex', alignItems: 'center' }}>                           
                            <img src={e.icon} alt="" style={{ width: 20, marginRight: 5 }} />
                            <span style={{ marginLeft: 5 }}>{e.label}</span>
                        </div>
                    )}
                />
                {/* <SelectPicker
                    data={options}
                    renderMenuItem={renderMenuItem}
                    style={{ width: 200 }}
                    appearance="subtle"
                /> */}
                
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <span>Choose content type:</span>                    
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Enter your RapidAPI key for Subtitles for YouTube here.!</Tooltip>}>
                       {SVGICON.HoverCircle}
                    </OverlayTrigger>
                    <div className="my-2 d-flex align-items-center flex-wrap">
                        <Link to={"#"} className=" btn btn-outline-primary me-3">
                            {SVGICON.PostArticle}{" "}
                            Post or article
                        </Link>
                        <Link to={"#"} className=" btn btn-outline-primary">
                           {SVGICON.YouTube} {" "}
                            YouTube video
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">URL of article, post or video</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Find My Device" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">Posts to generate:</label>
                            <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="1" />
                        </div>
                        <label htmlFor="exampleFormControlInput2" className="form-label">Post type</label>
                        <div className="mb-3">                            
                             <Select options={options}  
                                className="custom-react-select"
                                defaultValue={options[0]}
                                isSearchable={false}
                            />
                        </div>
                        <label className="form-label">Post type</label>
                        <div className="mb-3">                            
                            <Select options={options1}  
                                className="custom-react-select"
                                defaultValue={options1[0]}
                                isSearchable={false}
                            />
                        </div>
                        <label className="form-label">Post category</label>
                        <div className="mb-3">                            
                            <Select options={options2}  
                                className="custom-react-select"
                                defaultValue={options2[0]}
                                isSearchable={false}
                            />
                        </div>
                        <label className="form-label">Post status</label>
                        <div className="mb-3">                            
                            <Select options={options3}  
                                className="custom-react-select"
                                defaultValue={options3[0]}
                                isSearchable={false}
                            />
                        </div>
                        <hr style={{marginLeft:"-21px", marginRight:"-21px" }}/>
                        <div className="btn-group ai-tag-group" role="group" >
                            <input type="checkbox" className="btn-check" id="btncheck1" />
                            <label className="btn btn-outline-primary btn-sm mb-0" htmlFor="btncheck1">Include featured image</label>
                        </div>
                        <hr style={{marginLeft:"-21px", marginRight:"-21px", marginBottom:"0"}} />
                    </div>
                </div>
            </div>
            <div className="card-footer border-0">
                <div className="text-center">
                    <Link to={"#"} className="btn btn-primary">
                        {SVGICON.Refresh}{" "}
                        Repurpose
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FineTuneJob;