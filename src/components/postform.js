import React from 'react';
import firebase from 'firebase'
import '../App.css';
import Logo from './logo';

export default class Postform extends React.Component {
  render(){
    
    function submitform(){
        var filebutton = document.getElementById("filebutton")
            
        var key = firebase.database().ref("userads").push().key
        var file = document.getElementById("filebutton").files[0];
        var storageRef = firebase.storage().ref();
        var uploadTask = storageRef.child(key).put(file);

        uploadTask.on('state_changed', function(snapshot){  //Conditions that run when file is being uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;  //Progress of upload (0%-100%)
        //console.log('Upload is ' + progress + '% done');
        document.getElementById("fileprogress").value = progress
        switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // When it is paused
        console.log('Upload is paused');
        break;
        case firebase.storage.TaskState.RUNNING: // When it is running
        console.log('Upload is running');
        break;
        }
        }, function(error) {  //If it fails 
        console.log(error)
        }, function() {    //If it uploads successfully
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
        var postad = {
        imageURL: downloadURL,
        postname: document.getElementById("postname").value,
        postprice: document.getElementById("postprice").value,
        category: document.getElementById("category").value,
        condition: document.getElementById("condition").value,
        username: document.getElementById("username").value,
        usernumber: document.getElementById("numbercode").value + " " + document.getElementById("usernumber").value,
        postdescription: document.getElementById("description").value
        }
        firebase.database().ref("userads" + key).set(postad);
        setTimeout(function(){
          window.location.href = "/loggedhome"
        }, 2000)
        });
        });
    }

    return(<>
    <a href="/loggedhome"><Logo /></a>
<div id="container">
  <div id="formdiv" className="form-style-2" style={{alignItems: 'center', textAlign: 'center'}}>
    <div className="form-style-2-heading">POST YOUR AD!</div>
    <form action method="post">
      <label htmlFor="field1"><span>Item Name <span className="required">*</span></span><input type="text" className="input-field" name="field1" id="postname" required/></label>
      <label htmlFor="field2"><span>Item Price <span className="required">*</span></span><input type="text" className="input-field" name="field2"  id="postprice" required/></label>
      <label htmlFor="field2"><span>Condition <span className="required">*</span></span><select style={{width: 190, height: 20}} id="condition" required><option value="Old">Old</option><option value="New">New</option></select></label>
      <label htmlFor="field2"><span>Category <span className="required">*</span></span>
        <select id="category">
          <option value="Mobile Phones">Mobile Phones</option>
          <option value="Electronics">Electronics</option>
          <option value="Vehicles">Vehicles</option>
          <option value="Motorcycles">Motorcycles</option>
          <option value="Houses">Houses</option>
          <option value="Fashion and Beauty">Fashion and Beauty</option>
          <option value="Books, Sports and Hobbies">Books, Sports and Hobbies</option>
          <option value="Business">Business</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Services">Services</option>
          <option value="Furniture and Home Decour">Furniture and Home Decour</option>
          <option value="Land and Plots">Land and Plots</option>
        </select>
      </label>
      <progress id="fileprogress" max={100} style={{width: 75}}> </progress>
      <label htmlFor="field2"><span>Picture <span className="required">*</span></span><input type="file" className="input-field" name="field2" accept="image/*" id="filebutton" required /></label>
      <label htmlFor="field2"><span>Ad Location <span className="required">*</span></span><select id="location" style={{width: 180}}><option value="Pakistan">Pakistan</option><option value="India">India</option><option value="Canada">Canada</option></select></label>
      <label htmlFor="field2"><span>Your Name <span className="required">*</span></span><input type="text" className="input-field" name="field2"  id="username" /></label>
      <label htmlFor="field2"><span>Your Phone Number <span className="required">*</span></span><select style={{height: 30}} id="numbercode"><option value={92}>+92</option><option value={91}>+91</option><option value={1}>+1</option></select><input type="number" className="input-field" name="field2" defaultValue id="usernumber" placeholder="Omit any zeroes, brackets or dashes" required/></label>
      <label htmlFor="field5"><span>Description <span className="required">*</span></span><textarea name="field5" className="textarea-field" id="description" defaultValue={""} /></label>
      <label><span> </span><input type="button" defaultValue="Submit" style={{width: 248}} onClick={submitform} /></label>
    </form>
  </div>
</div>

    </>)
  }
}
