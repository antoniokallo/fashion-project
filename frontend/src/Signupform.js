import React,{ useEffect,useState} from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


export default function SignupForm() {

    const signupBody = {
        username: '',
        password: '',
        name: ''
      }
      
 
      let [signupData, setSignupData] = useState({...signupBody})
      let [user, setUser] = useState({ username: '' })

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

      const signUpChange = (e) => {
        setSignupData({
          ...signupData,
          [e.target.name]: e.target.value
        })
      }
  return (
    <div>
<Grid textAlign='center'  verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>

                 <h1>Signup</h1>
                 <Form onSubmit={e => signUpSubmit(e)}>
                    <Segment stacked>
                   <Form.Input onChange={e => signUpChange(e)}name="username" type='text' fluid icon='user' iconPosition='left' placeholder='username'  value={signupData.username} />
                   <Form.Input onChange={e => signUpChange(e)} type="text" name="name" fluid icon='user' iconPosition='left' placeholder='name'  value={signupData.name}/>
                   <Form.Input onChange={e => signUpChange(e)} type="text" name="password"fluid icon='user' iconPosition='left' placeholder='password'  value={signupData.password} />
                   <Form.Input type="submit" name="submit" />
                   </Segment>
                 </Form>
                 </Grid.Column>
                 </Grid>
    </div>
  )
}
