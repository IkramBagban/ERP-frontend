
import React, { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import  Column  from "./elements/Column";


function HeadOne({theme}){
    return(
        <div className={`sub-card border-${theme}`}>
            <div className="sub-card-2">
                <div>
                    <h5 className="mb-0">Not Started</h5>
                    <span>Tasks assigned to me: 18</span>
                </div>
                <div className={`icon-box bg-${theme}-light rounded-circle`}>
                    <h5 className={`text-${theme} totalCount`}>18</h5>
                </div>
            </div>
        </div>
    )
}


const reorderColumnList = (sourceCol, startIndex, endIndex) => {
  const newTaskIds = Array.from(sourceCol.taskIds);
  const [removed] = newTaskIds.splice(startIndex, 1);
  newTaskIds.splice(endIndex, 0, removed);

  const newColumn = {
    ...sourceCol,
    taskIds: newTaskIds,
  };

  return newColumn;
};


const initialData = {
    tasks: {
      1: { id: 1, dropid:'101', content: "HTML template Issue Complete",status:'Complete',  select:'High'},
      2: { id: 2, dropid:'102', content: "React template Issue Complete ",status:'Testing',  select:'Low' },
      3: { id: 3, dropid:'103', content: "Angular Issue Complete",status:'Pending',  select:'Medium' },
      4: { id: 4, dropid:'104', content: "HTML template Issue Complete" ,status:'Complete',  select:'High'},
      5: { id: 5, dropid:'105', content: "React Dashboard Issue Complete",status:'In Progress',  select:'Low' },
      6: { id: 6, dropid:'106', content: "Laravel template Issue Complete",status:'Testing',  select:'Medium' },
      7: { id: 7, dropid:'107', content: "WordPress Issue Complete",status:'Pending',  select:'High' },
      8: { id: 8, dropid:'108', content: "HTML template Issue Complete",status:'Complete',  select:'Low' },
      9: { id: 9, dropid:'109', content: "React template Issue Complete",status:'In Progress',  select:'Medium' },
      10: { id: 10, dropid:'110', content: "WordPress Issue Complete",status:'Testing',  select:'High' },
      11: { id: 11, dropid:'111', content: "Laravel Dashboard Issue Complete",status:'Pending',  select:'Low' },
      12: { id: 12, dropid:'112', content: "Angular template Issue Complete",status:'In Progress',  select:'Medium' },
      13: { id: 13, dropid:'113', content: "HTML Admin Issue Complete",status:'Testing',  select:'High' },
      14: { id: 14, dropid:'114', content: " Codeigniter Admin Issue Complete",status:'Complete',  select:'Low' },
      15: { id: 15, dropid:'115', content: "Angular template Issue Complete",status:'In Progress',  select:'Medium' },
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: <HeadOne theme="primary"/>,
        taskIds: [1, 2, 3],
      },
      "column-2": {
        id: "column-2",
        title: <HeadOne theme="purple"/>,
        taskIds: [4, 5, 6],
      },
      "column-3": {
        id: "column-3",
        title: <HeadOne theme="warning"/>,
        taskIds: [7,8,9],
      },
      "column-4": {
        id: "column-4",
        title: <HeadOne theme="danger"/>,
        taskIds: [10,11,12],
      },
      "column-5": {
        id: "column-5",
        title: <HeadOne theme="success"/>,
        taskIds: [13,14,15],
      },
    },  
    columnOrder: ["column-1", "column-2", "column-3","column-4","column-5"],
  };
  


export default function TaskSummaryBlog() {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    // If user tries to drop in an unknown destination
    if (!destination) return;
   
    const sourceCol = state.columns[source.droppableId];
    const destinationCol = state.columns[destination.droppableId];

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }

    const startTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(destinationCol.taskIds);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      taskIds: endTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    };

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>        
        {state.columnOrder.map((columnId, index) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
            return(
                <Column key={column.id} column={column} tasks={tasks}/>  
            )
        })}        
               
    </DragDropContext>
  );
}
