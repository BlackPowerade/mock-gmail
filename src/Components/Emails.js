import React from 'react';
import { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import searchData from './SearchAndNav'



class Emails extends Component {



  constructor() {
    super()
    this.state = {
      emailData: [],
      searchData: []
    }

    this.spawnDetails = this.spawnDetails.bind(this)
  }
  async componentDidMount() {
    const url = "http://localhost:3001/emails"; 
    const response = await fetch(url); 
    const data = await response.json() // in this example, let's say this will be an array of cat images
    console.log(data)
    this.setState({emailData: data}) // set our state's cats key to have value of our newly acquired data
  }

  spawnDetails() {
    
    let details = this.emailData.message
    return (
      <p>{details}</p>
    )
  }

  // async onKeyUp (event) {
  //   if (event.charCode === 13) {
  //     this.searchData.push(event.target.value)
  //   }
  // }
      


 
  render() {
    return ( 
    <div >
      {
        this.state.emailData.map(email => 
          {
            return (<div><button onClick={this.spawnDetails} >  {email.sender} : {email.subject} </button><br /></div>)
          })
      }
    </div>
    )
  }
}

export default Emails;
