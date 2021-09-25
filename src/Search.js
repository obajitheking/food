import React from 'react'
import Chicken from '../src/images/Ellipse 3.jpg'
import Taco from '../src/images/Ellipse 4.jpg'
import Ruby from '../src/images/Ellipse 5.jpg'
import Pizza from '../src/images/Ellipse 6.jpg'
import Track from '../src/images/Ellipse 7.jpg'
import './Cardcontainer.css'

function Search() {

    const cards = [
        {
            id : 1,
            imgUrl : Chicken,
            name : "Pizza",
     
          
        },
        {
          id : 2,
          imgUrl : Taco,
          name : "Burger",
    
          
        
      },
      {
          id : 3,
          imgUrl : Ruby,
          name : "Nooodles",
          
          
        
      },
      {
          id : 4,
          imgUrl: Pizza,
          name : "Steak",
        
          
        
      },
      {
        id : 5,
        imgUrl: Track,
        name : "Tacos",
      
        
      
    },
    
      
    ]

      
    const content = cards.map((card=>(
        <div className='' key={card.id}>
        <div className=''><img src={card.imgUrl} className='see-img' alt='altimg'/></div>
        <div className='search-name'>{card.name}</div>
      
        </div>
    )))
    return (
        <div className='searchin'>
        <div className='real'>
            <h2 className='he2'>Search by Food</h2>
            <h3 className='he3'>View all</h3>
        </div>
        <div className='card-container-search'>
            {content}
        </div>
        </div>
    )
}

export default Search
