import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';

class Register extends Component {
 
  state = {
    credentials: {
      username: '',
      password: '',
      // email:'',
      // confirmPassword:'',
    }
  }
  inputChanged = event => {
    let cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }
  register = event => {
    // console.log(this.state.credentials);
    fetch('http://127.0.0.1:8000/post/users/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
      }).then( resp => resp.json())
      .then( res => {
        //  window.location.href = "/";
      })
      .catch( error => console.log(error))
  }
  
  render(){ 

    return (
      <Card>
        <Form className="login-form">
          <FormGroup>
            <Label>Username</Label>
            <Input type="text" name="username" placeholder="Enter your name"
             value={this.state.credentials.username} onChange={this.inputChanged}/>
          </FormGroup>

          {/* <FormGroup>
            <Label>Email</Label>
            <Input type="email" name="email" placeholder="Enter your e-mail" 
            value={this.state.credentials.email} onChange={this.inputChanged}/>
          </FormGroup> */}

          <FormGroup>
            <Label>Password</Label>
            <Input type="password" name="password" placeholder="Enter password" 
            value={this.state.credentials.password} onChange={this.inputChanged}/>
          </FormGroup>

          {/* <FormGroup>
            <Label>Confirm Password</Label>
            <Input type="password" name="confirmPassword" placeholder="Enter password again" 
            value={this.state.credentials.confirmPassword} onChange={this.inputChanged}/>
          </FormGroup> */}
          
          <FormGroup>
            <Button className="btn-lg btn-block" onClick={this.resgister}>Register</Button>
          </FormGroup>
        </Form>
      </Card>
		);

  }

}

export default Register;
