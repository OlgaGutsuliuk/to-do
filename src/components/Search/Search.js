import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
    state = {
        findWord:''
    }
    onChange = (e) => {
        const filterWord = e.target.value 
      this.props.searchWord(filterWord)  
    }

    render() {
        return (
            <input type="text" className="form-control search-input"
                placeholder="type to search" onChange={this.onChange} value={this.findWord}/>   
        );
    }
}

export default Search;



