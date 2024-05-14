import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { SVGICON } from "../../../constant/theme";

const reorder = (list, startIndex, endIndex) => {
  	const result = Array.from(list);
  	const [removed] = result.splice(startIndex, 1);
 	result.splice(endIndex, 0, removed);

  	return result;
};


class DraggableBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
		{id:"input1", title: 'Compete this projects Monday', styleChange: 'text-warning', icon: SVGICON.Stopboard},
		{id:"input2", title: 'Compete this projects Sunday', styleChange: 'text-success', icon: SVGICON.RightClick},
		{id:"input3", title: 'Compete this projects Tuesday', styleChange: 'text-warning', icon: SVGICON.Stopboard},
		{id:"input4", title: 'Compete this projects Monday',styleChange: 'text-success', icon: SVGICON.RightClick},
		{id:"input5", title: 'Compete this projects Friday', styleChange: 'text-warning', icon: SVGICON.Stopboard}
	  ]
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {    
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, _) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, _) => (

					<div 
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						className="sub-card draggable-handle draggable" 
					>
					    <div className="d-items">
					        <span className={`dang d-block mb-2 ${item.styleChange}`}>
					            {item.icon}
					            {" "}Latest to do's
					        </span>
					        <div className="d-flex justify-content-between flex-wrap">
					            <div className="d-items-2">
					                <div>
					                    {SVGICON.Dotes}
					                </div>
					                <div>
					                    <div className="form-check custom-checkbox">
					                        <input type="checkbox" className="form-check-input" id={`customCheckBox ${item.id}`} required />
					                        <label className="form-check-label" htmlFor={`customCheckBox ${item.id}`}>{item.title}</label>
					                    </div>
					                    <span>2023-12-26 07:15:00</span>
					                </div>
					            </div>
					            <div>
					                <div className="icon-box icon-box-md bg-danger-light me-1">
					                    {SVGICON.DeleteDanger}
					                </div>
					                <div className="icon-box icon-box-md bg-primary-light">
					                    {SVGICON.EditPrimary}
					                </div>
					            </div>
					        </div>	
					    </div>
					</div>

                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

// Put the thing into the DOM!
export default DraggableBlog;