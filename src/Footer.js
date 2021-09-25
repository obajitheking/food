import React from 'react'
import './Cardcontainer.css'

function Footer() {

    const cards = [
        "San Fransico",
        "Miami",
        "San Diego",
        "East Bay",
        "Long Beach",
        ]

    return (
        <div>       
            <div className='card-container-footer'>
                <div className='card-footer'>
                    <div className='things'>
                    <div className='fh1'><h1 className='footerh1'>ready to order with the best deals</h1></div>
                    <div className='btn-deal-outlin1'>PROCEED TO ORDER</div>
                    </div>
                </div>
            </div>
            <div id='ctf' className=''>
                <h1 className='heh1'>Our top cities</h1>
                <div className='container-footer'>
                <ul>
                    <li>{cards[0]}</li>
                    <li>{cards[1]}</li>
                    <li>{cards[2]}</li>
                    <li>{cards[3]}</li>
                    <li>{cards[4]}</li>
                </ul>
                <ul>
                    <li>{cards[0]}</li>
                    <li>{cards[1]}</li>
                    <li>{cards[2]}</li>
                    <li>{cards[3]}</li>
                    <li>{cards[4]}</li>
                </ul>
                <ul>
                    <li>{cards[0]}</li>
                    <li>{cards[1]}</li>
                    <li>{cards[2]}</li>
                    <li>{cards[3]}</li>
                    <li>{cards[4]}</li>
                </ul>
                <ul>
                    <li>{cards[0]}</li>
                    <li>{cards[1]}</li>
                    <li>{cards[2]}</li>
                    <li>{cards[3]}</li>
                    <li>{cards[4]}</li>
                </ul>
                <ul>
                    <li>{cards[0]}</li>
                    <li>{cards[1]}</li>
                    <li>{cards[2]}</li>
                    <li>{cards[3]}</li>
                    <li>{cards[4]}</li>
                </ul>
                </div>
                <hr></hr>

                <div className='footer-2'>
         
                <ul>
                
                <li><h1 className='heh2'>Company</h1></li>

                    <li>{cards[0]}</li>
                    <li>{cards[1]}</li>
                    <li>{cards[2]}</li>
                    <li>{cards[3]}</li>
                    <li>{cards[4]}</li>
                </ul>
               
                <ul>
                
                <li><h1 className='heh2'>Contact</h1></li>

                    <li>{cards[0]}</li>
                    <li>{cards[1]}</li>
                    <li>{cards[2]}</li>
                    <li>{cards[3]}</li>
                    <li>{cards[4]}</li>
                </ul>
                <ul>
                <li><h1 className='heh2'>Legal</h1></li>

                    <li>{cards[0]}</li>
                    <li>{cards[1]}</li>
                    <li>{cards[2]}</li>
                    <li>{cards[3]}</li>
                    <li>{cards[4]}</li>
                </ul>

                
            </div>
            <hr></hr>
            <p className='pl'>All rights Reserved  &copy; BAJI LTD 2021</p>
            </div>
         
        </div>
 
    )
}

export default Footer
