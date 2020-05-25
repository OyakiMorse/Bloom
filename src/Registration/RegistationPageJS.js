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

import React from 'react';
import './RegistationPageS.css';


function RegistationPageJS() {
    return (
    <div class="container" id="container">
        <div class="form-container sign-up-container">
           <form action="#">
               <h1>Create Account</h1>
               <div class="social-container">
                   <a href="/home" class="social"><i class="fab fa-facebook-f"></i></a>
                   <a href="/home" class="social"><i class="fab fa-linkedin-in"></i></a>
               </div>
               <span>or use email for registration</span>
               <input type="text" placeholder="Name" />
               <input type="email" placeholder="Email" />
               <input type="password" placeholder="Password" />
               <button>Sign Up</button>
           </form>
        </div>

        <div class="form-container sign-in-container" id="MainSignInContainerId">
            <form action="#">
                
                <h1>Sign Up</h1>
                <div class="social-container">
                    <a href="/home" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="/home" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" id = "SignInEmailId" />
                <input type="password" placeholder="Password" id = "SignInPasswordId" />
                <a href="/ty">Forgot password?</a>
                <button id= "SignInAuth">Sign In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <img src="Logo1.png" alt="*"/>
                    <h1 id="Bloom">Bloom</h1>
                    <h1>Welcome Back!</h1>
                    <p>
                        To keep connected with us please login with your personal info
                    </p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <img src="Logo1.png" alt="*"/>
                    <h1 id="Bloom">Bloom</h1>
                    <h1>Hello, creators!</h1>
                    <p>Enter your personal details for strat discover with us</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div> 
    )
}

export default RegistationPageJS;

