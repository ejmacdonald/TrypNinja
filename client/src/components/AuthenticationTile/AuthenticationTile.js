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
  componentWillMount = ()=>{
    let token = sessionStorage.getItem("TNToken")
    if (token) {
      axios.get("/api/user/"+token)
      .then(response=>{
        if (response.data.userName) this.setState({name: response.data.userName, id: response.data.id})
        else sessionStorage.removeItem("TNToken")
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
  responseGoogle = (response) => {
    let profile = response.profileObj;
    console.log(profile)
    axios.post("/api/user/object", {data: profile})
    .then(response=>{
      console.log(response)
      this.setState({name: profile.name})
      sessionStorage.setItem("TNToken", response.data)
      if(this.props.addUser) this.props.addUser()
    })
  }
  render(){
    if (!this.state.name) return goog(this.responseGoogle)
    else return <div>Logged in as {this.state.name}</div>
  }
}


export default login