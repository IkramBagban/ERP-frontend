import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';


import PageTitle from '../../layouts/PageTitle';
import TopMenus from './TopMenus';
import MainContent from './MainContent';
import { IMAGES, SVGICON } from '../../constant/theme';
import Prompts from './Prompts';

const data = [    
    { icon : IMAGES.England , value: 1, label: 'England', },
    { icon : IMAGES.IndiaFlag, value: 2, label: 'India',  },
    { icon : IMAGES.Arab, value: 3, label: 'UAE' },
]

const options = [    
    { value: '1', label: 'Product' },
    { value: '2', label: 'Post' },
]

const options1 = [    
    { value: '1', label: 'Uncategorized' },
    { value: '2', label: 'Categorized' },
]

const options2 = [    
    { value: '1', label: 'Draft' },
    { value: '2', label: 'Categorized' },
]
const options3 = [    
    { value: '1', label: 'Hourly' },
    { value: '2', label: 'Weekly' },
]

const Rss = () => {
	const [selectedOption, setSelectedOption] = useState(data[0]);
    const handleChange = e => {
        setSelectedOption(e);
    }
    return (
        <>
            <PageTitle activeMenu={'RSS'} motherMenu={'AiKit'} />
            <div className="container-fluid">
                <div className="row">
					<div className="col-xl-12">                        
                        <MainContent  detail="This is a demo of AIKit plugin made for you to test the experience of using the plugin. Text & images generated in this demo are dummy. In real life, AIKit will call OpenAI API and generate relevant text and images based on your prompts. " 
                            subtitle=""
                        />
						<TopMenus  id={4}/>
                        <div className="row">
							<div className="col-xl-4">
								<div className="card  h-auto overflow-hidden">
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
									</div>
									<div className="card-body">
										<div className="row">
											<div className="col-xl-12">
												<div className="mb-3">
												  <label htmlFor="exampleFormControlInput1" className="form-label">RSS URL</label>
												  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="https://yogacare.dexignzone.com/" />
												</div>
												<div className="mb-3">
												  <label htmlFor="exampleFormControlInput2" className="form-label">Time to wait between generating articles (minutes)</label>
												  <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="30" />
												</div>
												<label htmlFor="exampleFormControlInput2" className="form-label d-block">Post status</label>
												<div className="mb-3">
													<Select options={options}  
														className="custom-react-select"
														defaultValue={options[0]}
														isSearchable={false}
													/>
												</div>
												<label className="form-label">Post type</label>
												<div className="mb-3">
													<Select options1={options2}  
														className="custom-react-select"
														defaultValue={options2[0]}
														isSearchable={false}
													/>
												</div>
												<label className="form-label">Post category</label>
												<div className="mb-3">
													<Select options={options1}  
														className="custom-react-select"
														defaultValue={options1[0]}
														isSearchable={false}
													/>
												</div>
												<div className="mb-3">
												  <label htmlFor="exampleFormControlInput3" className="form-label">Posts to generate</label>
												  <input type="number" className="form-control" id="exampleFormControlInput3" placeholder="1" />
												</div>
												<label className="form-label">How often to check for new articles in RSS feed</label>
												<div className="mb-3">													
													<Select options={options3}  
														className="custom-react-select"
														defaultValue={options3[0]}
														isSearchable={false}
													/>
												</div>
												<hr style={{marginLeft:"-21px", marginRight:"-21px"}} />
												<div className="btn-group" role="group">
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
                                                {SVGICON.WiFi}
                                               {" "}
												Add RSS Job
											</Link>
										</div>
									</div>
								</div>
							</div>
                            <div className="col-xl-8">
                                <Prompts />
                            </div>

						</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rss;