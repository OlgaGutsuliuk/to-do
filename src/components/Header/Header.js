import React from 'react'
import './Header.css'
const Header = ({toDo, done}) => {
    return (
         <div className="app-header d-flex">
            <h1>My todo List</h1> 
             <h2>{toDo} more to do, {done} done</h2>
         </div>
 
    );
}

export default Header;