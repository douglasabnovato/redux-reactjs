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
                    <ul>
                        <li><a href="#home">Home</a></li> 
                        <li class="dropdown">
                            <a href="javascript:void(0)" class="dropbtn">Developers</a>
                            <div class="dropdown-content">
                                <a href="#devs">Devs</a>
                                <a href="#repos">Repos</a> 
                            </div>
                        </li> 
                        <li class="dropdown">
                            <a href="javascript:void(0)" class="dropbtn">Users</a>
                            <div class="dropdown-content">
                                <a href="#tables">Users</a>
                                <a href="#shout-out">Shout Out</a> 
                                <a href="#gps">GPS</a> 
                            </div>
                        </li>     
                    </ul>
                </div>
            </div>
            <div className="btnGetOut">
                <button type="button" onClick={() => setToken(null)}>
                    Get Out
                </button>
            </div>
        </div>
    </section>    
  );
}