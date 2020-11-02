import React from 'react';
import firebase from 'firebase'
import '../App.css';
import Home from './home';
import Logo from './logo';

export default class SignUp extends React.Component {
    submitform(){
      var email = document.getElementById("email")
      var password = document.getElementById("password")
      firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then(function(result){
        setTimeout(function(){
          alert("You are now signed-Up. You will be redirected to the login page.")
          window.location.href = "/createadd";
        }, 2000)
      })
      .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode + " : " + errorMessage)
  });
    }

  render(){
    return(<>
    <a href="/"><Logo /></a>
      <div id="loginform">
          <h1>SignUp today</h1>
          <input type="text" placeholder="Email" style={{position: "absolute", top: "105px"}} id="email"></input>
          <input type="text" placeholder="Password" style={{position: "absolute", top: "135px"}} id="password"></input>
          <button style={{position: "absolute", top: "165px"}} onClick={this.submitform}>SignUp</button>
          <a href="/createadd"  style={{position: "absolute", left: "65px",top: "165px"}}> Go Back To Login</a>
      </div>

        </>)
  }
}
