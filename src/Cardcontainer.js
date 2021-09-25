import React from 'react'
import './Cardcontainer.css'
import Greek from '../src/images/greek.jpg'
import Country from '../src/images/country.jpg'
import Fruit from '../src/images/fruit.jpg'
import Simple from '../src/images/simple.jpg'

function Cardcontainer() {

    const cards = [
        
            {
                id : 1,
                imgUrl : Greek,
                name : "Greek Salad",
                
              
            },
            {
              id : 2,
              imgUrl : Country,
              name : "Country Salad",
              
            
          },
          {
              id : 3,
              imgUrl : Fruit,
              name : "Fruit Salad",
              
            
          },
          {
              id : 4,
              imgUrl : Simple,
              name : "Simple Green Salad",
              
            
          },
          
          
          
        
    ]

    const content = cards.map((card=>(
        <div key={card.id}>
        <div ><img src={card.imgUrl} width='250px'/></div>
        <div className='card-name'>{card.name}</div>
        </div>
    )))
    return (
        <>
        <h1 className='hed'>Special Vege Offers</h1>
        <div className='card-container'>
            {content}
        </div>
        </>
    )
}

export default Cardcontainer;
