import React, { useEffect } from 'react'


import './Cardcontainer.css'
import Aos from 'aos'
import "aos/dist/aos.css"


     
  const Deal = () =>  {
      useEffect(() => {
          Aos.init({ duration : 3000});
          },[]);
        
  

    const cards = [
        {
            id : 1,
            name : "Taco Salad",
            synopsis :"Enjoy the large size of taco salad. Complete perfect bowl of taco salad.",
            buton :"PROCEED TO ORDER",
            className :"blue",
     
          
        },
        {
            id : 2,
            name : "Chicken Suya",
            synopsis :"Enjoy the large size of chicken suya. Complete perfect plate of chicken suya.",
            buton :"PROCEED TO ORDER",
            className :"black",
     
          
        
      },
      {
        id : 3,
        name : "Vege Pizza",
        synopsis :"Enjoy the large size of vege pizza. Complete perfect vege pizza.",
        buton :"PROCEED TO ORDER",
        className :"red",
 
          
          
        
      },   
      
    ]

    const content = cards.map((card=>(
        <div className={card.className} id="greg" key={card.id}>
        <div className='deal-name'>
        <div className=''><h1 className='dealh1'>{card.name}</h1></div>
        <div className='dealp'><p>{card.synopsis}</p></div>
        <div className='btn-deal-outlin'>{card.buton}</div>
        </div>
      
        </div>
    )))

    return (
        <>
        <h1 className='hed4'>Best Deals</h1>
        <div data-aos='fade-right' className='card-container-deal'>
            {content}
        </div>
        </>
    )
}

export default Deal;
