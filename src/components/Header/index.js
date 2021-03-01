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
                    <a href="https://www.nvoip.com.br/">API</a>
                    <a href="https://www.nvoip.com.br/">Número Nacional</a>
                    <a href="https://www.nvoip.com.br/">Número Virtual</a>
                </div>
            </div>
            <div>
                <button type="button" onClick={() => setToken(null)}>
					Sair
				</button>
            </div>
        </div>
    </section>  
  );
}