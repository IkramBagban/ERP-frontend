import React from 'react';
import {Link} from 'react-router-dom';
import DraggableBlog from './DraggableBlog';


const ToDoList = () => {
    return (
        <>
            <div className="card">
                <div className="card-header border-0">
                    <h4 className="heading mb-0">My To Do Items</h4>
                    <div>
                        <Link to="#" className="text-primary me-2">View All</Link>
                        <Link to="#" className="text-black"> + Add To Do</Link>
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className="dt-do-bx">
                        <div className="draggable-zone dropzoneContainer to-dodroup dz-scroll">                            
                            <DraggableBlog />
                        </div>
                    </div>	
                </div>
            </div>  
        </>
    );
};

export default ToDoList;