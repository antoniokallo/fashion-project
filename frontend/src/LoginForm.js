import React,{ useEffect,useState} from 'react';
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import SignupForm from './SignupForm';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'





export default function LoginForm() {
  
const loginBody = {
    username: '',
    password: '',
    name:''
  }
  const signupBody = {
    username: '',
    password: '',
    name: ''
  }
  
  //STATES
  let [loginData, setLoginData] = useState({...loginBody})
  let [signupData, setSignupData] = useState({...signupBody})
  let [user, setUser] = useState({ username: '' })
  let nav = useNavigate()
  
  /*****auto login******/
  useEffect(() => {
    let token = localStorage.getItem('token')
    console.log(token)
    if(token && !user.username ){
      fetch('http://localhost:3000/me', {
        headers: {
          token:  token,
          'content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.username){
          setUser(data.username)
        }
      })
    }
  }, [])
  /*****logout user******/
  const logout = () => {
    setUser({username: ""})
    localStorage.removeItem('token')
  }
  
  /*************FORM CHANGE AND SUBMIT************/
  //user enters login info
  function loginChange(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }
  
  /*****login******/
  
  
  const loginSubmit = (e) => {
    console.log(loginData)
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      //set user
      //set token
      setUser(data.user)
      localStorage.setItem('token', data.token)

    })
    nav("/Homepage")
  }
  
  // user enters sign up info
  const signUpChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    })
  }
  
  /*****TODO: sign up new user******/
  const signUpSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      body: JSON.stringify(signupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setUser(data.user)
      localStorage.setItem('token', data.token)
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
  <Grid textAlign='center'  verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
        
      Log-in to your account
      </Header>
      { user.username?.length === 0 ? 

      <Form size='large' onChange={e => loginChange(e)} onSubmit={e => loginSubmit(e)}>
        <Segment stacked>
          <Form.Input  onChange={e => loginChange(e)} onSubmit={e => loginSubmit(e)} name="username" type='text' fluid icon='user' iconPosition='left' placeholder='username'  value={loginData.username}/>
          <Form.Input 
          name="password"
           value = {loginData.password}
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='text'
            
          />

          <Button color='black' fluid size='large' name="submit" type='submit'>
            Login
          </Button>
        </Segment>
        <Message>
        New to us? <Link to='/SignupForm'>Sign Up</Link>
      </Message>
      </Form>
      
      :
                   <div>
                     <h1>Hi {user.name}!</h1>
                     <button onClick={logout}>Logout</button>
                  
                  
                   </div>
               }
       
   
    </Grid.Column>
  </Grid>

  </div>
)

  }

