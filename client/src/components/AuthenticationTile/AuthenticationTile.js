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
    var googleId = localStorage.getItem("TNgoogleId")
    console.log(`ID: ${googleId}`)
    if (googleId!=="null"&&googleId){
      this.state = {load:true};
    }
    else{
      this.state = {load:false};
    }
  }
  componentDidMount(){
    console.log(`load from storage: ${this.state.load}`)
    if (this.state.load){
      this.getName(localStorage.getItem("TNgoogleId"))
    }
  }
  getName(id, name, img){
    axios.get(`/user/${id}`)
      .then(response => {
        if (response.data!=null&&response.data) {
          console.log(`found user:`)
          console.log(response.data)
          this.setState({
            name: response.data.userName,
            id: response.data.googleId
          })
          localStorage.setItem('TNgoogleId', response.data.googleId)
        }
        else {
          axios.post(`/user/${id}/${name}/${encodeURIComponent(img)}`)
            .then(response => {
              console.log(`had to add user:`)
              console.log(response.data)
              this.setState({
                name: response.data.userName,
                id: response.data.googleId
              })
              localStorage.setItem('TNgoogleId', response.data.googleId)
            })
        }
      }).catch(err => {
        console.log(`ERROR: ${err}`)
      })
  }
  responseGoogle = (response) => {
    let profile = response.profileObj;
    console.log(profile)
    this.getName(profile.googleId, profile.name, profile.imageUrl)
  }
  render(){
    if (!this.state.id) return goog(this.responseGoogle)
    else return <div>Logged in as {this.state.name}</div>
  }
}


export default login