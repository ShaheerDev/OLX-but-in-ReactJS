import React from 'react';
import '../App.css';

export default class Categories extends React.Component {
  render(){
    return(
      <div class="topnav">
      <a href="#Mobile Phones" value="Mobile Phones">Mobile Phones</a>
      <a href="#Electronics" value="Electronics">Electronics</a>
      <a href="#Vehicles" value="Vehicles">Vehicles</a>
      <a href="#Motorcycles" value="Motorcycles">Motorcycles</a>
      <a href="#Houses" value="Houses">Houses</a>
      <a href="#Furniture and Home Decour" value="Furniture and Home Decour">Furniture and Home Decour</a>
      <a href="#Agricultural" value="Agricultural">Agricultural</a>
      <a  href="#Business" value="Businessl">Business</a>
      <a  href="#Services" value="Services">Services</a>
      <a href="Land and Plots" value="Land and Plots">Land and Plots</a>
      <a href="#Cars" value="Cars" style={{visibility: "hidden"}}>abcdefghijkl</a>
      </div>
    )
  }
}
