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
  constructor(){
    super()
    this.state={}
  }
  getName(id){
    axios.get(`/user/${id}`)
    .then(response=>{
      this.setState({
        name: response.name,
        id: response.id
      })
    })
  }
  responseGoogle = (response) => {
    console.log(response.googleId);
    this.getName(response.googleId)
    this.setState({ auth: true })
  }
  render(){
    if (!this.state.auth) return goog(this.responseGoogle)
    else return <div>"Logged in!"</div>
  }
}


export default login