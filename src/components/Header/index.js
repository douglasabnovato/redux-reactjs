import React from 'react'; 
import LogoNvoip from '../../assets/logo-nvoip-220x51-trans.png';

import './styles.css';

export default function Header(){ 

  return ( 
    <section className="header-home">  
        <div>
            <div className="header-logo">  
                <a href="https://www.nvoip.com.br/"><img src={LogoNvoip}/></a> 
            </div>
            <div className="header-links">
                <div>
                    <a href="https://www.nvoip.com.br/">API</a>
                    <a href="https://www.nvoip.com.br/">Número Nacional</a>
                    <a href="https://www.nvoip.com.br/">Número Virtual</a>
                </div>
            </div>
        </div>
    </section>  
  );
}