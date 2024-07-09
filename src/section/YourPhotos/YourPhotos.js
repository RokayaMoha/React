import React from 'react'
import HeaderWrapp from '../../Components/Container/HeaderWrapp/HeaderWrapp'
import HeaderSection from '../../Components/HeaderSection/HeaderSection'
import CardsPhoto from '../../Components/CardsPhoto/CardsPhoto'
import './YourPhotos.css'
import DataPhoto from '../../Data/DataPhoto'


const YourPhotos = () => {

const Moh = DataPhoto.map(Card => {

  return <CardsPhoto Key={Card.id} title={Card.title}  img={Card.image} name={Card.name}/>
})

  return (
    <div className='YourPhotoMain'>
    <HeaderWrapp>
     
    <HeaderSection><h3 className='Your-Photo-main'> Your Photos </h3></HeaderSection>
<div className='Your-Photo-items'>
      {Moh}
</div>


     
      </HeaderWrapp>
      </div>
  )
}

export default YourPhotos
