import React from 'react';
import {Component} from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios'
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core'

const goog = (cb) => <GoogleLogin
  clientId={`1096957611995-ngdld110goo2iganmh1srg3sg1sqe3cb.apps.googleusercontent.com`}
  buttonText="Login"
  onSuccess={cb}
  onFailure={cb}
/>
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class login extends Component {
  constructor(props){
    super(props)
    this.state={anchorEl:null}
  }
  componentWillMount = ()=>{
    let token = sessionStorage.getItem("TNToken")
    if (token) {
      axios.get("/api/user/"+token)
      .then(response=>{
        console.log(response.data)
        if (response.data.userName) this.setState({name: response.data.userName, id: response.data.id, loggedIn:true, imgUrl: response.data.profileImg})
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
      this.setState({name: profile.name, loggedIn:true, id:response.data.id, imgUrl: response.data.profileImg})
      sessionStorage.setItem("TNToken", response.data.token)
      if(this.props.addUser) this.props.addUser()
    })
  }
    handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleCloseLogOut = () => {
    sessionStorage.removeItem("TNToken")
    this.setState({ anchorEl: null , id:null, name:null, loggedIn:false, imgUrl:null});
  };
  render(){
    console.log(this.state.imgUrl)
    const { classes } = this.props;
    const { loggedIn, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    if (!loggedIn) return goog(this.responseGoogle)
    else return (<div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  {this.state.imgUrl ? <Avatar src={this.state.imgUrl}/> : <AccountCircle/>}
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}><Link to={"/user/"+this.state.id}>Profile</Link></MenuItem>
                  <MenuItem onClick={this.handleCloseLogOut}>Log Out</MenuItem>
                </Menu>
              </div>)
  }
}


export default login