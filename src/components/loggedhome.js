import React from 'react';
import firebase from 'firebase'
import '../App.css';
import Logo from './logo'
import Searchbar from './search'
import Sellbtn from './sellbtn'
import Coverphoto from './coverphoto'
import Categories from'./categories'
import Footer from'./footer'

class LoggedHome extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          category: '',
          condition: '',
          postname: '',
          postprice: '',
          username: '',
          usernumber: '',
          imageURL: '',
          postdescription: '',
          whatsapplink: ''
      }
  }
  componentDidMount() {
      firebase.database().ref().on('child_added', (childSnapshot) => {
          var snap = childSnapshot.val();
          this.setState({
              category: snap.category,
              condition: snap.condition,
              postname: snap.postname,
              postprice: snap.postprice,
              username: snap.username,
              usernumber: "+" + snap.usernumber,
              imageURL: snap.imageURL,
              postdescription: snap.postdescription,
              whatsapplink: "https://wa.me/" + snap.usernumber + "?text=",
          })

      const { category, condition, postname, postprice, username, usernumber, imageURL, postdescription, whatsapplink } = this.state
      const img = document.createElement("img")
      img.style.width = "178px"
      img.style.height = "128px"
      img.src = imageURL
      const p = document.createElement("p")
      p.style.fontSize = "24px"
      p.style.fontWeight = "bold"
      p.innerHTML = postname;
      const pcondition = document.createElement("p")
      pcondition.innerHTML = condition
      pcondition.style.fontWeight = "bold"
      const pdescription = document.createElement("p")
      pdescription.innerHTML = postdescription
      const h1 = document.createElement("h1")
      h1.innerHTML = "Rs. " + postprice
      const ahref = document.createElement("a")
      ahref.href = whatsapplink
      ahref.setAttribute("target", "_blank")
      const btn = document.createElement("button")
      btn.style.backgroundColor = "green"
      btn.style.width = "150px"
      btn.style.height = "20px"
      btn.innerHTML = usernumber
      const pname = document.createElement("p")
      pname.innerHTML = "By: " + username
      const div = document.createElement("div")
      div.setAttribute("id", category)
      div.setAttribute("class", "floatleft")
      div.style.border = "4px solid white"
      div.style.width = "268px"
      div.style.height = "500px"
      div.appendChild(img)
      div.appendChild(p)
      div.appendChild(pcondition)
      div.appendChild(pdescription)
      div.appendChild(h1)
      ahref.appendChild(btn)
      div.appendChild(ahref)
      div.appendChild(pname)
      document.getElementById("divimportant").appendChild(div)
      })
  }
  render() {

      return (
          <>
              <Logo />
              <Searchbar />
              <a href="/postform">
              <button className="sellbtn">Sell</button>
              </a>
              <Categories />
              <Coverphoto />
              <div></div>
              <div style={{ position:"absolute", top:420, left:100, float: "left" }} id="divimportant">
             
              </div>
              <Footer />
          </>
      )
  }
}

export default LoggedHome;
