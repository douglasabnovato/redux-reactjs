import React, { useState } from 'react';
import UIButton from '../../UI/Button/Button'; 

import './styles.css';

function initialState(){
    return { 
        user: '', 
        password: '',
    };
} 

const Login = () => {

  const [values, setValues] = useState(initialState);

  function onChange(event) { 

    const { value, name } = event.target;
    
    setValues({
        ...values,
        [name]: value,
    });

  }
 
  return (
    <section>
        <div>
            <div class="text-title">
                <h1>Acessar o Sistema</h1>
            </div>  
            <form className="form-login" autoComplete="nope">
                <div className="email-login">
                    <label htmlFor="email">Usuário</label>
                    <input id="user" type="text" name="user" autoComplete="off" onChange={onChange} value={values.user}/>
                </div>
                <div className="senha-login">
                    <label htmlFor="password">Senha</label> 
                    <input id="password" type="password" name="password" onChange={onChange} value={values.password}/>
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
  );
};

export default Login;