import React from 'react';
import UIButton from '../../UI/Button/Button'; 
import './styles.css';

const UserLogin = () => {
  return (
    <section>
        <div>
            <div class="text-title">
                <h1>Acessar o Sistema</h1>
            </div>  
            <form className="form-login" autoComplete="nope">
                <div className="email-login">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="text" name="email" autoComplete="off" />
                </div>
                <div className="senha-login">
                    <label htmlFor="password">Senha</label> 
                    <input id="password" type="password" name="password" />
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

export default UserLogin;