import React from 'react';

import SiteMap from '../SiteMap'; 
import Contact from '../Contact'; 

export default function Footer(){ 

  return ( 
    <div className='footer-default-footer'>
      <SiteMap />
      <Contact />
    </div>    
  );
}