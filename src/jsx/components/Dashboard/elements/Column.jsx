// import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Draggable } from "@hello-pangea/dnd";
import { Droppable } from "@hello-pangea/dnd";
import { IMAGES } from "../../../constant/theme";
import { Dropdown } from "react-bootstrap";



const Column = ({ column, tasks }) => {
 
  const [priority, setPriority] = useState(tasks); 

  const handleSelect = (id, value)	=> {
		let temp = priority.map((data) => {
			if (id === data.emplid) {
				return { ...data, select: value };
			}
			return data;
		});
		setPriority(temp);
	};
	const handleAction = (id, value)	=> {
		let temp = priority.map((data) => {
			if (id === data.emplid) {
				return { ...data, status: value };
			}
			return data;
		});
		setPriority(temp);
	};
  return (
    <>
        <div className="col">
            <div className="card kanbanPreview-bx">
               <div className="card-body draggable-zone dropzoneContainer">  
                    {column.title}
                    <Droppable droppableId={column.id}>
                        {(droppableProvided, droppableSnapshot) => (
                          <div     
                            className="h-100"                    
                              ref={droppableProvided.innerRef}
                              {...droppableProvided.droppableProps}
                          >
                            {tasks.map((task, index) => (
                                <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                                  {(draggableProvided, draggableSnapshot) => (
                                    <div className="sub-card draggable-handle draggable p-0"
                                        ref={draggableProvided.innerRef}
                                        {...draggableProvided.draggableProps}
                                        {...draggableProvided.dragHandleProps}
                                    >
                                    
                                          <div className="task-card-data">
                                              <div className="products">
                                                <div>
                                                  <h6>{task.content}</h6>
                                                  <span>INV-100023456</span>
                                                </div>	
                                              </div>
                                              {index % 2 === 0 ?
                                                <div className="avatar-list avatar-list-stacked my-2">
                                                    <img src={IMAGES.contact6} className="avatar rounded-circle" alt="avar1"/>{" "}
                                                    <img src={IMAGES.contact5} className="avatar rounded-circle" alt="avat2"/>{" "}
                                                    <img src={IMAGES.contact1} className="avatar rounded-circle" alt="avat3"/>{" "}
                                                    <img src={IMAGES.contact2} className="avatar rounded-circle" alt="ava4"/>{" "}
                                                    <img src={IMAGES.contact5} className="avatar rounded-circle" alt="ava5"/>
                                                </div>
                                                :

                                                <div className="avatar-list avatar-list-stacked my-2">
                                                    <img src={IMAGES.contact6} className="avatar rounded-circle" alt="avar1"/>{" "}
                                                    <img src={IMAGES.contact5} className="avatar rounded-circle" alt="avat2"/>{" "}
                                                    <img src={IMAGES.contact1} className="avatar rounded-circle" alt="avat3"/>{" "}
                                                    <img src={IMAGES.contact2} className="avatar rounded-circle" alt="ava4"/>{" "}
                                                </div>
                                              }
                                              <div className="my-2">
                                                <span className="badge badge-primary light border-0 me-1">Issue</span>
                                                <span className="badge badge-primary light border-0 ms-1">HTML</span>
                                              </div>
                                              <div className="d-flex align-items-center">
                                                <p className="mb-0 font-w500 text-secondary me-2">Status</p>                                                
                                                <Dropdown className="task-dropdown-2">
                                                   <Dropdown.Toggle as="div" className={task.status}>{task.status}</Dropdown.Toggle>
                                                    <Dropdown.Menu className='task-drop-menu'>
                                                      <Dropdown.Item  onClick={()=>handleAction(task.dropid,'In Progress')}>In Progress</Dropdown.Item>
                                                      <Dropdown.Item onClick={()=>handleAction(task.dropid,'Pending')}>Pending</Dropdown.Item>
                                                      <Dropdown.Item onClick={()=>handleAction(task.dropid,'Testing')}>Testing</Dropdown.Item>
                                                      <Dropdown.Item onClick={()=>handleAction(task.dropid,'Complete')}>Complete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                              </div>                                              
                                          </div>	
                                          <div className="card-footer d-flex align-items-center justify-content-between">
                                              <div className="footer-data">
                                                  <span>Start Date</span>
                                                  <p>06 Feb 2023</p>
                                              </div>
                                              <div className="footer-data">
                                                  <span>End Date</span>
                                                  <p>06 Feb 2023</p>
                                              </div>
                                              <div className="footer-data">
                                                  <span className="d-block">Priority</span>
                                                  <Dropdown className="task-dropdown-2">
                                                    <Dropdown.Toggle as="div" className={task.select}>{task.select}</Dropdown.Toggle>
                                                    <Dropdown.Menu className='task-drop-menu'>
                                                      <Dropdown.Item onClick={()=>handleSelect(task.dropid,'High')}>High</Dropdown.Item>
                                                      <Dropdown.Item onClick={()=>handleSelect(task.dropid,'Medium')}>Medium</Dropdown.Item>
                                                      <Dropdown.Item onClick={()=>handleSelect(task.dropid,'Low')}>Low</Dropdown.Item>																	
                                                    </Dropdown.Menu>
                                                  </Dropdown>
                                              </div>
                                          </div>
                                      
                                    </div>
                                  )}
                                </Draggable>
                            ))}
                          </div>
                        )}
                    </Droppable>
                </div>
            </div>
        </div>
          
    </>
  );
};

export default Column;
