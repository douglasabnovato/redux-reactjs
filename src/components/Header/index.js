import React, { useContext } from 'react'; 
import LogoNvoip from '../../assets/logo-nvoip-220x51-trans.png';

import StoreContext from '../../store/Context';

import './styles.css';

export default function Header(){ 
  const { setToken } = useContext(StoreContext);
  return ( 
    <section className="header-home">  
        <div>
            <div className="header-logo">  
                <a href="https://www.nvoip.com.br/"><img src={LogoNvoip}/></a> 
            </div>
            <div className="header-links">
                <div>
                    <a href="#home">Home</a>
                    <a href="#developers">Devs</a>
                    <a href="#repositories">Repos</a>
                    <a href="#tables">Users</a>
                    <a href="#shout-out">Shout Out</a>
                    <a href="#gps">GPS</a>
                    <a href="#talk-to-me">Talk To Me</a>
                </div>
            </div>
            <div>
                <button type="button" onClick={() => setToken(null)}>
					Get Out
				</button>
            </div>
        </div>
    </section>  
  );
}