import React from 'react'
import Location from '../src/images/location.jpg'
import Bell from '../src/images/bell.jpg'
import Pound from '../src/images/pound.jpg'
import Group from '../src/images/Group.jpg'
import './Cardcontainer.css'


function Howcontainer() {

    const cards = [
        {
            id : 1,
            imgUrl : Location,
            name : "Select Location",
            synopsis : "choose the location for your food to be delvered",
            
          
        },
        {
          id : 2,
          imgUrl : Bell,
          name : "Choose Order",
          synopsis : "Check menu to pick your favourite food",
          
        
      },
      {
          id : 3,
          imgUrl : Pound,
          name : "Pay Advanced",
          synopsis : "It's quick, safe, and simple. ",
          
        
      },
      {
          id : 4,
          imgUrl: Group,
          name : "Enjoy Meals",
          synopsis : "Meals are made and brought to your home",
          
        
      },
      
    ]

    
    const content = cards.map((card=>(
        <div className='shado' key={card.id}>
        <div className='how-img'><img src={card.imgUrl} alt='altimg'/></div>
        <div className='how-p'>{card.name}</div>
        <div className='how-syn'>{card.synopsis}</div>
        </div>
    )))
    return (
        <>
        <h1 className='hed1'>How it Works</h1>
        <div className='card-containerp'>
            {content}
        </div>
        </>
    )
}

export default Howcontainer;
