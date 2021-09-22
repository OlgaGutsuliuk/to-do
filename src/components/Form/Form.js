import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  state = {
    label: ""
  };
  changeInput = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.props.addText(this.state.label);
    this.setState({
      label: ""
    });
  };

  render() {
    return (
      <form className='item-add-form' onSubmit={this.formSubmit}>
        <input
          type='text'
          onChange={this.changeInput}
          placeholder='Add new do'
          className='form-control search-input'
          value={this.state.label}
        />
        <button className='btn btn-outline-secondary'>Add text</button>
      </form>
    );
  }
}

export default Form;
