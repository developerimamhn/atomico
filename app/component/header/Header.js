import React from 'react';
import NavBar from './NavBar';
import HeroArea from './HeroArea';

const Header = () => {
    return (
        <div className='backgroundimage'>
            <NavBar/>
            <HeroArea/>
        </div>
    );
};

export default Header;