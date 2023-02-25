import React, { useState } from 'react'

import './Header.css';

import logo from '../../assets/logo.png';
import bars from '../../assets/bars.png';

export default function Header() {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img className='logo' src={logo} alt="logo" />

      {
        (menuOpened === false && mobile === true) ? (
          <div onClick={()=>setMenuOpened(true)}
            style={{
              backgroundColor: "var(--appColor)",
              padding: ".5rem",
              borderRadius: "5px"
            }}>
            <img src={bars} alt="menu"
              style={{ width: '1.8rem', height: '1.5rem' }}
            />
          </div>
        ) : (
          <ul className='header-menu' onClick={()=>setMenuOpened(false)}>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
          </ul>
        )
      }
    </div>
  )
}
