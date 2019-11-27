import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';

class Register extends Component {
 
  render(){
		
    return (
      <Card>
        <Form className="login-form">
          <FormGroup>
            <Label>Username</Label>
            <Input type="text" name="username" placeholder="Enter your name" />
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input type="email" name="email" placeholder="Enter your e-mail" />
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Input type="password" name="password" placeholder="Enter password" />
          </FormGroup>

          <FormGroup>
            <Label>Confirm Password</Label>
            <Input type="password" name="confirmPassword" placeholder="Enter password again" />
          </FormGroup>
          
          <FormGroup>
            <Button className="btn-lg btn-block">Register</Button>
          </FormGroup>
        </Form>
      </Card>
		);

  }

}

export default Register;
