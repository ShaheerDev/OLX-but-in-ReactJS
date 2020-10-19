import React from 'react';
import coverphoto from '../images/backgroundcover.jpg'
import '../App.css';

export default class Coverphoto extends React.Component {
  render(){
    return(
      <img src={coverphoto} className="coverpic"/>
    )
  }
}
