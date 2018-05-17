import React from 'react';
import {Component} from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios'

const goog = (cb) => <GoogleLogin
  clientId={`1096957611995-ngdld110goo2iganmh1srg3sg1sqe3cb.apps.googleusercontent.com`}
  buttonText="Login"
  onSuccess={cb}
  onFailure={cb}
/>

class login extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  responseGoogle = (response) => {
    let profile = response.profileObj;
    console.log(profile)
    axios.post("/user/object", {data: profile})
    .then(response=>{
      console.log(response)
      this.setState({name: profile.name})
      sessionStorage.setItem("TNToken", response.data)
      this.props.addUser()
    })
  }
  render(){
    if (!this.state.name) return goog(this.responseGoogle)
    else return <div>Logged in as {this.state.name}</div>
  }
}


export default login