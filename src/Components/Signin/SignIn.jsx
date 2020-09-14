import React from 'react';
import mainImage from '../../assets/images/login.jpg';
import './Signin.scss';



class SignIn extends React.Component{

  render(){
    return(
      <div className = 'login'>
        <img className = 'login__image' src={mainImage} alt="Login picture"/>
        <div className = 'login__container'>
          <h1 className = 'login__title'>fitfam</h1>
          <form className = 'login__form' action="">
            <label className = 'login__label' htmlFor="username">Username</label>
            <input className = 'login__input' type="text" id = "username" name = "username" value = "Enter username"/>
            <label className = 'login__label' htmlFor="password">Password</label>
            <input className = 'login__input' type="text" id = "password" name = "password" value = "Enter password" />
            <input className = 'login__input' type="submit" value = "Login"/>
            <input className = 'login__input' type="submit" value = "Sign-up"/>
          </form>
        </div>
      </div>
    )
  }
}

export default SignIn;
  

