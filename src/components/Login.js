import React, { Component } from 'react';
// import axios from 'axios';
import { withCookies } from 'react-cookie';
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';

class Login extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }
  inputChanged = event => {
    let cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }
  login = event => {
    // console.log(this.state.credentials);
    fetch('http://127.0.0.1:8000/auth/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
      }).then( resp => resp.json())
      .then( res => {
          console.log(res);
          this.props.cookies.set('token', res.token);
          window.location.href = "/posts";
      })
      .catch( error => console.log(error));
    // axios.post('http://127.0.0.1:8000/auth/')
    // .then( data => data.json())
    // .then(
    //   data => {
    //     console.log(data.token);
    //   }
    // )
    // .catch( error => console.error(error))
  }
 
  render(){
    return (
      <Card>
        <Form className="login-form">
          <FormGroup>
            <Label>Username</Label>
            <Input type="text" name="username" placeholder="Enter your username"
             value={this.state.credentials.username} onChange={this.inputChanged}/>
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Input type="password" name="password" placeholder="Enter your password"
            value={this.state.credentials.password} onChange={this.inputChanged} />
          </FormGroup>
          
          <FormGroup>
            <Button className="btn-lg btn-block" onClick={this.login}>Login</Button>
          </FormGroup>
        </Form>
      </Card>
		);

  }

}

export default withCookies(Login);
