import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../../store/Context';
import UIButton from '../../UI/Button/Button'; 
import LogoNvoip from '../../../assets/logo-nvoip-220x51-trans.png';

import './styles.css';

function initialState(){
    return { 
        user: '', 
        password: '',
    };
}

function login({ user, password }){
    if(user === 'admin' && password === 'admin'){
        return {token: '1234'}
    }
    return { error: 'Usuário ou senha inválido.'}
}

const UserLogin = () => {

  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) { 

    const { value, name } = event.target;
    
    setValues({
        ...values,
        [name]: value,
    });

  }

  function onSubmit(event) {
    event.preventDefault();
    const {token} = login(values);
    if(token){
         setToken(token);
         return history.push('/');
    }
    setValues(initialState);
  }
 
  return (
    <div>
    <section className="header-home">  
        <div>
            <div className="header-logo">  
                <a href="https://www.nvoip.com.br/"><img src={LogoNvoip}/></a> 
            </div>
            
        </div>
    </section> 
    <section>
        <div>
            <div class="text-title">
                <h1>Acessar o Sistema</h1>
            </div>  
            <form onSubmit={onSubmit} className="form-login" autoComplete="nope">
                <div className="email-login">
                    <label htmlFor="email">Usuário</label>
                    <input 
                        id="user" 
                        type="text" 
                        name="user" 
                        autoComplete="off" 
                        onChange={onChange} 
                        value={values.user}
                    />
                </div>
                <div className="senha-login">
                    <label htmlFor="password">Senha</label> 
                    <input 
                        id="password" 
                        type="password" 
                        name="password" 
                        onChange={onChange} 
                        value={values.password}
                    />
                </div> 
                <div className="space"></div>
                <UIButton
                    type="submit"
                    theme="contained-green"
                    rounded
                >
                    Entrar
                </UIButton> 
            </form>
        </div>
    </section>  
    </div>
  );
};

export default UserLogin;