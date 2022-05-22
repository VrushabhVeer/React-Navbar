import React from "react";

const Navbar =()=>{
    return (
        <div id='navbar'>
        <div className='left'>
          <h2>LOGOBAKERY</h2>
        </div>
        <div className='mid'>
          <p>
            <a href='#'>Services</a>
          </p>
          <p>
            <a href='#'>Projects</a>
          </p>
          <p>
            <a href='#'>About</a>
          </p>
        </div>
        <div className='right'>
          <button>Contact</button>
        </div>
      </div>
    );
}

export default Navbar;