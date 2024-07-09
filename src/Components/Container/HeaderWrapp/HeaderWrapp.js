import React from 'react'
import './HeaderWrapp.css'
const HeaderWrapp = (props) => {
  return (
    <div className='Most-Popular-wrapp'>
      {props.children}
    </div>
  )
}

export default HeaderWrapp
