import React, { Component } from "react";
import Slider from "react-slick";
import Burger from '../src/images/burger.jpg'
import Pancake from '../src/images/pancake.jpg'
import Sandwich from '../src/images/sandwich.jpg'
import Cake from '../src/images/cake.jpg'
import './Cardcontainer.css'



export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,


      
      responsive: [{
        breakpoint: 1350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }]

      

      
    };

    


    
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
      
        <div className='' key={card.id}>
        <div ><img width='250px' src={card.imgUrl} alt='altimg' className='img2'/></div>
        <div className='card-name1'>{card.name}</div>
        <div className='item-syn'><i class="fas fa-map-marker-alt"></i> {card.synopsis}</div>
        <div className='item-price'>{card.price}</div>
        <div className='btn-outlin'>{card.buton}</div>
        </div>
    )))
    return (
        <>
          <h1 className='hed1'>Popular Items</h1>
          <div className='container card-container-item'>
          
          <Slider {...settings}  >
          
            {content}
          
          </Slider>
          </div>
          
      </>
    );
  }
}
