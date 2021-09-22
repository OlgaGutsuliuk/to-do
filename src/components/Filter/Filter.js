import React, { Component } from "react";
import "./Filter.css";

export default class Filter extends Component {
  button = [{ name: "active", text: "Active" }, { name: "all", text: "All" }, { name: "done", text: "Done" }];

  render() {
    const { filter, clickActive } = this.props;
    const btn = this.button.map(({ name, text }) => {
      const isActive = filter === name;
      const clazz = isActive ? "btn-info" : "btn-outline-secondary";
      return (
        <button type='button' className={`btn ${clazz}`} key={name} onClick={() => clickActive(name)}>
          {text}
        </button>
      );
    });
    return <div className='btn-group'>{btn}</div>;
  }
}
