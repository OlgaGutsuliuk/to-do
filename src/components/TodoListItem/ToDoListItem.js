import React, { Component } from "react";
import "./ToDoListItem.css";
export default class ToDoListItem extends Component {
  render() {
    const { label, deletList, done, important, onTogleImportent, onTogleDone} = this.props;
   
    let className = "todo-list-item";
    if (done) {
      className += " done";
    }
    if (important) {
      className += " important";
    }
    return (
      <span className={className}>
        <span className='todo-list-item-label' onClick={onTogleDone}>
          {label}
        </span>
        <button type='button' className='btn btn-outline-danger btn-sm float-right' onClick={deletList}>
          <i className='bi bi-trash' />
        </button>
        <button type='button' className='btn btn-outline-success btn-sm float-right' onClick={onTogleImportent}>
          <i className='bi bi-exclamation-lg' />
        </button>
      </span>
    );
  }
}
