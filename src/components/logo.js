import React from 'react';
import logo from '../images/logoimg.png'
import '../App.css';

export default class Logo extends React.Component {
  render(){
    return(
      <img src={logo} width="80" className="olxlogo" alt="olx-logo"/>
    )
  }
}
