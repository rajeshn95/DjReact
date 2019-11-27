import React, { Component } from 'react';
// import axios from "axios";
import { withCookies } from 'react-cookie';
// import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';

class Posts extends Component {
  state = {
    token: this.props.cookies.get('token')  
  }
  componentsDidMount(){
    if(this.state.token){
      // axios.get('http://127.0.0.1:8000/post/users/')
      // .then((data)=>{
      //   console.log('helllooo', data);
      // })
      console.log(this.state.token);
    }else{
      window.location.href = '/';
    }
    
  } 

  render(){
    if(this.state.token){
    return (
        <h2 className="text-center"> posts are coming soon....!*.*! </h2>
    );}else{
      window.location.href = '/';
    }

  }

}

export default withCookies(Posts);
