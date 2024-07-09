import React from 'react'
import './Card.css'
import { FaStar,FaDownload } from "react-icons/fa"





const Card = (props) => {
  return (
    <div className='Most-Popular-item'>
    <img src={props.image} alt=''/>

    <div className='Most-Popular-item-content'>
       <h6>{props.title} <br />
       <span>{props.name}</span></h6>
       <ul>
       <li><FaStar style={{marginRight:'10px'}}/><span>{props.price}</span></li>
       <li> <FaDownload style={{marginRight:'10px'}}/>  <span>{props.id}</span></li>
        

       </ul>
    </div>
 </div>
  )
}

export default Card
