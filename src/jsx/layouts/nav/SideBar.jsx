/// Menu
import React, { useContext, useEffect, useReducer, useState } from "react";
import Collapse from 'react-bootstrap/Collapse';

/// Link
import { Link } from "react-router-dom";

import {MenuList} from './Menu';
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";


const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  active : "",
  activeSubmenu : "",
}

const SideBar = () => {
	const {
		iconHover,
		sidebarposition,
		headerposition,
		sidebarLayout,
	} = useContext(ThemeContext);

  const [state, setState] = useReducer(reducer, initialState);	
	useEffect(() => {
			
	}, []);
 //For scroll
 	const [hideOnScroll, setHideOnScroll] = useState(true)
	useScrollPosition(
		({ prevPos, currPos }) => {
		  const isShow = currPos.y > prevPos.y
		  if (isShow !== hideOnScroll) setHideOnScroll(isShow)
		},
		[hideOnScroll]
	)

 
  const handleMenuActive = status => {	
    setState({active : status});		
		if(state.active === status){			
      setState({active : ""});
    }   
	}
	const handleSubmenuActive = (status) => {
		
    setState({activeSubmenu : status})
		if(state.activeSubmenu === status){
      setState({activeSubmenu : ""})
			
		}
    
	}
	// Menu dropdown list End

  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
 	
  useEffect(() => {
    MenuList.forEach((data) => {
      data.content?.forEach((item) => {        
        if(path === item.to){         
          setState({active : data.title})          
        }
        item.content?.forEach(ele => {
          if(path === ele.to){
            setState({activeSubmenu : item.title, active : data.title})
          }
        })
      })
  })
  },[path]);

  return (
    <div
      className={`deznav  border-right ${iconHover} ${
        sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
          ? hideOnScroll > 120
            ? "fixed"
            : ""
          : ""
      }`}
    >
        <div className="deznav-scroll">         
          <ul className="metismenu" id="menu">              
              {MenuList.map((data, index)=>{
                let menuClass = data.classsChange;
                  if(menuClass === "menu-title"){
                    return(
                      <li className={menuClass}  key={index} >{data.title}</li>
                    )
                  }else{
                    return(				
                      <li className={` ${ state.active === data.title ? 'mm-active' : ''}`}
                        key={index} 
                      >
                        
                        {data.content && data.content.length > 0 ?
                            <>
                              <Link to={"#"} 
                                className="has-arrow"
                                onClick={() => {handleMenuActive(data.title)}}
                                >		
                                  <div className="menu-icon">
                                    {data.iconStyle}
                                  </div>
                                  {" "}<span className="nav-text">{data.title}
                                  {
                                    data.update && data.update.length > 0 ?
                                      <span className="badge badge-xs badge-danger ms-2">{data.update}</span>
                                    :
                                    ''
                                  } 
                                </span>
                              </Link>
                              <Collapse in={state.active === data.title ? true :false}>
                                  <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                                    {data.content && data.content.map((data,index) => {									
                                      return(	
                                          <li key={index}
                                            className={`${ state.activeSubmenu === data.title ? "mm-active" : ""}`}                                    
                                          >
                                            {data.content && data.content.length > 0 ?
                                                <>
                                                  <Link to={data.to} className={data.hasMenu ? 'has-arrow' : ''}
                                                    onClick={() => { handleSubmenuActive(data.title)}}
                                                  >
                                                    {data.title}
                                                  </Link>
                                                  <Collapse in={state.activeSubmenu === data.title ? true :false}>
                                                      <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                                                        {data.content && data.content.map((data,ind) => {
                                                          return(	                                                           
                                                            <li key={ind}>
                                                              <Link className={`${path === data.to ? "mm-active" : ""}`} to={data.to}>{data.title}</Link>
                                                            </li>                                                            
                                                          )
                                                        })}
                                                      </ul>
                                                  </Collapse>
                                                </>
                                              :
                                              <Link to={data.to} className={`${data.to === path ? 'mm-active' : ''}`}>
                                                {data.title}
                                              </Link>
                                            }
                                            
                                          </li>
                                        
                                      )
                                    })}
                                  </ul>
                                </Collapse>
                            </>
                        :
                          <Link  to={data.to} >
                            <div className="menu-icon">
                                {data.iconStyle}
                            </div>
                              {" "}<span className="nav-text">{data.title}</span>
                              {
                                  data.update && data.update.length > 0 ?
                                    <span className="badge badge-xs badge-danger ms-2">{data.update}</span>
                                  :
                                  ''
                                } 
                          </Link>
                        }
                       
                      </li>	
                    )
                }
              })}          
          </ul>
          <div className="help-desk">
            <Link to={"#"} className="btn btn-primary">Help Desk</Link>
          </div>
        </div>
    </div>
  );
};

export default SideBar;
