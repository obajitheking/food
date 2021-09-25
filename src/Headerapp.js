import React from 'react';
import { Button } from './Button';
import './Headerapp.css';

function Headerapp() {
    return (
        <div className='header-app'>
            <div className=''>
                <h1>hungry?</h1>
                <p>within a few clicks find meals accessible around you</p>
            </div>
            <div className='loc-app'>
                <input placeholder='Location'/>
                <button className='btn-outline stn'>Find Food</button>

            </div>
        </div>
    )
}

export default Headerapp
