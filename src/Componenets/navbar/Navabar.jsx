import React from 'react';
import '../navbar/Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Navabar = () => {
  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>English
          </div>
          <div className="item">
            <DarkModeIcon className='icon' onClick={()=> dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
            <FullscreenIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsActiveIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedIcon className='icon'/>
          </div>
          <div className="item">
            <img src="pexels-lucas-djesus-11156391.jpg" 
            alt="" 
            className='avatar'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navabar