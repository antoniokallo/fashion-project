import React from 'react'
import './Homepage.css'
import { useEffect,useState} from 'react';
import {
  Form, Image, Message, Segment,
  Button,
 Container,
 Divider,
 Dropdown,
 Grid,
 Header,
 List,
 Menu,
} from 'semantic-ui-react'



export default function Homepage() {
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
      }
    
      //user enters sign up info
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
    
 
    

    return(


        <div className="App">
        
        <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Fashion Forward</Header>
      
      <h3>A website to see if brands are sustainable or not.</h3>
      <p>
        A text container is used for the main container, which is useful for single column layouts.
      </p>

      <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
   
    </Container>
  
           
  
               </div>
       
    )
   
  
}
