
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Burger from '../src/images/burger.jpg'
import Pancake from '../src/images/pancake.jpg'
import Sandwich from '../src/images/sandwich.jpg'
import Cake from '../src/images/cake.jpg'
import './popular.css'



const breakPoints = [
    { width: 1, cardsToShow: 1 },
    { width: 550, cardsToShow: 2, itemsToScroll: 2 },
    { width: 768, cardssToShow: 3 },
    { width: 1200, cardsToShow: 4 }
  ];

function Popular() {

    const cards = [
        {
            id : 1,
            imgUrl : Burger,
            name : "Cheese Burgers",
            synopsis : "Burger Place",
            price : "$5.59",
            buton : "Order Now",  
          
        },
        {
          id : 2,
          imgUrl : Pancake,
          name : "Pancakes",
          synopsis : "Panscake",
          price : "$2.50",
          buton : "Order Now",
        
      },
      {
          id : 3,
          imgUrl : Sandwich,
          name : "Sandwich",
          synopsis : "Bread mist",
          price : "$4.50",
          buton : "Order Now",
        
      },
      {
          id : 4,
          imgUrl: Cake,
          name : "Cup Cakes",
          synopsis : "Cakes and Cream",
          price : "$1.50",
          buton : "Order Now",
          
        
      },
      {
        id : 4,
        imgUrl: Cake,
        name : "Cup Cakes",
        synopsis : "Cakes and Cream",
        price : "$1.50",
        buton : "Order Now",
        
      
    },
   
    ]

    
    const content = cards.map((card=>(
        <div className='rbg' key={card.id}>
        <div ><img src={card.imgUrl} alt='altimg'/></div>
        <div className='card-name'>{card.name}</div>
        <div>{card.synopsis}</div>
        <div>{card.price}</div>
        <div className='btn-outline'>{card.buton}</div>
        </div>
    )))
    return (
        <div className='card-container'>
            <Carousel breakPoints={breakPoints}>
                {content}
            </Carousel>    
        </div>
    )
}

export default Popular
