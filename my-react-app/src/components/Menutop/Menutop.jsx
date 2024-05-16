
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Menutop.css';
import React, { useState } from 'react';
import { MoreVert } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export function Menutop(){
    const [isOpen, setIsOpen] = useState(false);

    
      const toggleDropdown = (stateSetter) => {
        stateSetter((prevState) => !prevState);
      };
    
    return(
        <div className="menutop">
            <div className='top-text'>Smart dwellings</div>
            <div className="icon" >
            
  
    <div className="dropdown">
    
          <div className={`menu-toggle  ${isOpen ? 'toggled' : ''}`} href="javascript:void(0);"
           onClick={() => toggleDropdown(setIsOpen)}>
          
        <span ><MoreVert></MoreVert></span>
        </div>
        <ul className="submenu" style={{ display: isOpen ? 'block' : 'none' }}>
          <li className='listed'>
            <Link to='/' style={{ color: 'grey',textDecoration:'none' }}>Sign out</Link>
          
          </li>
          
          <li className='listed'>
           
            <Link to='/profile' style={{ color: 'grey',textDecoration:'none' }}>Profile</Link>
          </li>
          
        </ul>
      
    </div>


            </div>

        </div>
    )
}