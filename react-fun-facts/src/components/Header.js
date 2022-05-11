import React from 'react';
import logo from '../images/reactjs-icon1.png'

const Header = ()=>{
    return(
        <header className='header-container'>
            <div className='logo-container'>
                <img src={logo} alt='react-logo'/>
                <h2>ReactFacts</h2>
            </div>
            <div className='project-title'>
              <h3>React Course - Project 1</h3>
            </div>
        </header>
    )
}
export default Header;