import React from 'react';  
import './styles.css';

export default function ChatBox(){ 

  return ( 
    <section className="chatbox">  
        <div className="chatbox-container"> 
            <div className="chatbox-message">  
                <span>Se precisar, estou aqui !</span>
                <p>Caso necessário, entre em contato conosco.</p>
            </div>
            <div className="chatbox-button">  
                <a className="button-container" href="https://www.nvoip.com.br/">
                    <span>Preciso de Ajuda</span>
                </a>
            </div> 
        </div> 
    </section>  
  );
}