import React from 'react';
import firebase from 'firebase'
import '../App.css';
import Home from './home';
import Logo from './logo';

export default class Createadd extends React.Component {
    submitform(){
        var email = document.getElementById("email")
        var password = document.getElementById("password")
        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(function (result){
        console.log(result)
        window.location.href = "/postform";
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode + " : " + errorMessage)
  });
    }

   submitformfacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function (result){    
      var user = result.user
      console.log(user)
      window.location.href = "/postform";
    }).catch(function (error){   //If it fails and gives an error
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode + " : " + errorMessage)
    })
   }

  render(){
    return(<>
    <a href="/"><Logo /></a>
      <div id="loginform">
          <h1>You need to login</h1>
          <h1 style={{position: "absolute", top: "35px"}}> to continue</h1>
          <input type="text" placeholder="Your email" style={{position: "absolute", top: "105px"}} id="email"></input>
          <input type="password" placeholder="Your password" style={{position: "absolute", top: "135px"}} id="password"></input>
          <button style={{position: "absolute", top: "165px"}} onClick={this.submitform}>Login</button>
          <a href="/signup" style={{position: "absolute", top: "190px", border: "3px solid #f1f1f1"}}>Don't have an account? Signup</a>
          <button style={{position: "absolute", left: "55px",top: "165px", backgroundColor: "cornflowerblue"}} onClick={this.submitformfacebook}>Login with Facebook</button>
      </div>

        </>)
  }
}
