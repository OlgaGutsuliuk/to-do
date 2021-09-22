import React from 'react'
import ToDoListItem from '../TodoListItem/ToDoListItem';

import './ToDoList.css'
const ToDoList = ({todoData, deletList, onTogleImportent, onTogleDone}) => {
    return (
      <ul className='list-group todo-list' >
        {todoData.map(el => (
          <li key={el.id} className='list-group-item' > {<ToDoListItem label={el.label} done={el.done} important={el.important} deletList={() => deletList(el.id)} onTogleDone={()=>onTogleDone(el.id)} onTogleImportent={()=>onTogleImportent(el.id)}/>}</li>
        ))}
       </ul> 
    );
}

export default ToDoList;

