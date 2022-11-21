import React from 'react';
import './header.scss'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return(
        <header className='header'>
            <div className="menu-container">
                <MenuIcon 
                    fontSize='medium' 
                    className='menu'
                />
            </div>
            <div className='header-container'>NoteBook</div>
        </header>
    )
}

export default Header;