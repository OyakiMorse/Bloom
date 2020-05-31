// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');
// //const axios = require('axios')

// const signInButtonMain = document.getElementById('SignInAuth');
// //const MainSignInContainer = document.getElementById('MainSignInContainerId');

// signUpButton.addEventListener('click', () => container.classNameList.add('right-panel-active'));
// signInButton.addEventListener('click', () => container.classNameList.remove('right-panel-active'));

//  var CurrentUser = {};

// var onSignInButtonMain = () => {
//     //console.log('hello');

//     var LoginJSON =  {
//         "Email" : document.getElementById("SignInEmailId").value,
//         "Password" : document.getElementById("SignInPasswordId").value
//     }
//     /*axios.get('http://localhost:4200/api/user', LoginJSON)
//         .then(function (response) {
//             // here goes server response
//     })
//     */
//     // need to get login request from server
// }

// signInButtonMain.addEventListener('click', () => onSignInButtonMain())

import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './RegistrationPage.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>


        <FormGroup controlId="email" bsSize="large">
          <h3>Create Account</h3>
          <span>Email</span>

          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId="password" bsSize="large">
          <span>Password</span>

          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          
        </FormGroup>
        <Button className='button' block bsSize="large" disabled={!validateForm()}>
          Sign Up
        </Button>
      </form>
      
      <form onSubmit={handleSubmit}>

        <FormGroup controlId="email" bsSize="large">
        <h3>Sign In</h3>
          <span>Email</span>

          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId="password" bsSize="large">
          <span>Password</span>

          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
        Sign In
        </Button>
      </form>
    </div>
  );
}
