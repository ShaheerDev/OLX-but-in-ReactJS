import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJWLSVrJr1qW8cVRrRBeQSTd5jjG0pDNg",
  authDomain: "olx-clone-react.firebaseapp.com",
  databaseURL: "https://olx-clone-react.firebaseio.com",
  projectId: "olx-clone-react",
  storageBucket: "olx-clone-react.appspot.com",
  messagingSenderId: "636084424751",
  appId: "1:636084424751:web:f539387b246e190e69b6da",
  measurementId: "G-LS0ZM3QVXN"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
