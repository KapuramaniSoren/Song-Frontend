import React from 'react';
import download from '../../assests/download.svg';

import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Listen Something amazing with Ongaku</h1>
      <p>Music happens to be an art form that transcends language. In otherwords we can say that music is the soul of language.   <br/>   --BASK</p>


    
    </div>

    <div className="gpt3__header-image">
     
    </div>
    <div >
        <img src={download}/>

       
      </div>
  </div>
 
);

export default Header;