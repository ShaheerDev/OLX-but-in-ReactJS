import React from 'react';
import '../App.css';

export default class Footer extends React.Component {
  render(){
    return(<>
    <div style={{position: "absolute", top:320 , left: 10}}>
    <h5> &copy; <a href="https://github.com/ShaheerDev">ShaheerDev</a> 2020, This is made for an assignment.</h5>
    </div>
    </>)
  }
}
