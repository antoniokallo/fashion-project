import React from 'react'
import './Homepage.css'
import { useState} from 'react';

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
      // useEffect(() => {
      //   let token = localStorage.getItem('token')
      //   if(token && !user.username){
      //     fetch('http://localhost:3000/me', {
      //       headers: {
      //         'Authorization': `Bearer ${token}`
      //       }
      //     })
      //     .then(res => res.json())
      //     .then(data => {
      //       console.log(data)
      //       if(data.user){
      //         setUser(data.user)
      //       }
      //     })
      //   }
      // }, [])
     /*****logout user******/
      const logout = () => {
        setUser({username: ''})
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
            'content-type': 'application/json'
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
        
           { user.username?.length === 0 ? 
               <div>
                <h1>Login</h1>
           <form onChange={e => loginChange(e)} onSubmit={e => loginSubmit(e)}>
             <input type="text" name="username" placeholder="username" value={loginData.username}  />
             <input type="text" name="password" placeholder="password" value={loginData.password} />
             <input type="submit" name="submit"/>
           </form>
           </div>
                   :
                   <div>
                     <h1>Hi {user.name}</h1>
                     <button onClick={logout}>Logout</button>
                   </div>
               }
       
                 <h1>Signup</h1>
                 <form onSubmit={e => signUpSubmit(e)}>
                   <input onChange={e => signUpChange(e)} type="text" name="username" placeholder="username" value={signupData.username} />
                   <input onChange={e => signUpChange(e)} type="text" name="name" placeholder="name" value={signupData.name}/>
                   <input onChange={e => signUpChange(e)} type="text" name="password" placeholder="password" value={signupData.password} />
                   <input type="submit" name="submit" />
                 </form>
            
               </div>
       
    )
   
  
}
