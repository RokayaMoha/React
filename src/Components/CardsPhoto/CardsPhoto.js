import React from 'react'
import './CardsPhoto.css'
const CardsPhoto = (props) => {
  return (

      <div className='Cards-photo-item'> 
                <ul>
                <li className='Photoimg'><img src={props.img} alt=''/></li>
                 <li className='photoHeader'><h5>{props.name}</h5><span>{props.title}</span></li>
                 <li className='photoHeader'><h5>{props.name}</h5><span>{props.title}</span></li>
                 <li className='photoHeader'><h5>{props.name}</h5><span>{props.title}</span></li>
                 <li className='photoHeader'><h5>{props.name}</h5><span>{props.title}</span></li>
                <li><button className='btn btn-danger border w-100  rounded-3 ' >Go to</button></li>
                </ul>
      </div>
    
  )
}

export default CardsPhoto
