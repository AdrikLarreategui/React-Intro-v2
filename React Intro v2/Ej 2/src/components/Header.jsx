import React from 'react'
const Header = (props) => {
    return (
      <div className="Header">
        <span className='Header-p'>{props.name}</span>
        <span className='Header-p'>{props.age} años</span>
      </div>
    )
  }
  
  export default Header
