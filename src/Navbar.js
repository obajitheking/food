import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, togClick] = useState(false);

    const handleClick = () => togClick(!click);
    const closeMobileMenu = () => togClick(false);

    /*const [button, setButton] = useState(true)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        
    }, []);

    window.addEventListener('resize', showButton);*/

    

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo">
                     <img src='/images/logo.jpg' alt='logo-pic'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <form>
                        <input placeholder='&#61442;' className='search-box'/>
                    </form>
                      <div className='baji'>
                    <ul  className={click ? 'nav-menu active' : 'nav-menu'}>
                        
                    
                        <li className='nav-item'>
                        <Link to="/Signin" className="nav-links" onClick={closeMobileMenu}>
                        <button className='btn btn-primary'>Sign-in</button>
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to="/Signup" className="nav-links">
                        <button className='btn btn-outline'>Sign-Up</button>
                        </Link>
                        </li>
                    </ul>
                    </div>  
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
