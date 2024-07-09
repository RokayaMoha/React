
import React from 'react'
import './MostPopular.css'
import HeaderWrapp from '../../Components/Container/HeaderWrapp/HeaderWrapp'
import HeaderSection from '../../Components/HeaderSection/HeaderSection'
import Card from '../../Components/Card/Card'

import Data from '../../Data/Data'

const MostPopular = () => {

  const cards = Data.map(card => {
    return <Card key={card.id} image={card.image} title={card.title} name={card.name} price={card.price} id={card.load}  />
  }) 


  return (
     <HeaderWrapp>
     
    <HeaderSection><h3 className='Most-Popular-main'>Most Popular <em >Right Now</em></h3></HeaderSection>
<div className='Most-Popular-items'>
      {cards}
</div>


     
      </HeaderWrapp>








   
  )
}

export default MostPopular
