import React from 'react'
import Chicken from '../src/images/chicken.jpg'
import Taco from '../src/images/taco.jpg'
import Ruby from '../src/images/ruby.jpg'
import Pizza from '../src/images/pizza.jpg'
import Chickenna from '../src/images/kfc.jpg'
import Tacona from '../src/images/startac.jpg'
import Rubyna from '../src/images/staruby.jpg'
import Pizzana from '../src/images/starpiz.jpg'
import './Cardcontainer.css'

function Featured() {

    const cards = [
        {
            id : 1,
            imgUrl : Chicken,
            name : Chickenna,
            buton : "Order Now",
            
          
        },
        {
          id : 2,
          imgUrl : Taco,
          name : Tacona,
          buton : "Order Now",
          
        
      },
      {
          id : 3,
          imgUrl : Ruby,
          name : Rubyna,
          buton : "Order Now",
          
        
      },
      {
          id : 4,
          imgUrl: Pizza,
          name : Pizzana,
          buton : "Order Now",
          
        
      },
      
    ]

    const content = cards.map((card=>(
        <div  key={card.id}>
        <div ><img width='240px' src={card.imgUrl} alt='altimg'/></div>
        <div className='fea-card'><img src={card.name}/></div>
        <div className='btn-outin'>{card.buton}</div>
        </div>
    )))
    
    return (
        <>
        <h1 className='hed1'>Featured Restaurant</h1>
        <div className='card-container'>
            {content}
        </div>
        <div className='feah3'><h2 className='feah2'>View All</h2>  <i class="fas fa-greater-than"></i></div>
        </>
    )
}

export default Featured
