import React, { useState } from 'react'
import styled from 'styled-components'
import{createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { db } from '../firebase'
import { useDispatch } from 'react-redux'
import { DetailsView } from '../redux/reducers/reducer'
import { useSelector } from 'react-redux'

function UserDetails() {
    let auth = getAuth()
    let dispatch = useDispatch()
    let provider = new GoogleAuthProvider()
    let[Form,setForm] = useState({
        email:'',
        password:'',
        checked:false
    })
    let[RegForm,setRegForm] = useState({
        email:'',
        password:'',
        username:'',
        checked:false
    })
    const HandleInput = (e)=>{
         const{type,name,value,checked} = e.target;

         setForm((prevState)=>{
             return{
                 ...prevState,
                 [name]:type === 'checkbox'?checked:value
             }
         })
    }
    const handleinput =(e)=>{
        const{type,name,value,checked} = e.target;

        setRegForm((prevState)=>{
            return{
                ...prevState,
                [name]:type === 'checkbox'?checked:value
            }
        })
    }
    const HandleForm = (event)=>{
        event.preventDefault()
        if(Form.email,Form.password){
            signInWithEmailAndPassword(auth,Form.email,Form.password)
        .catch((error)=>{
            alert(error.message)
        })
        }
    }
    const HandleRegForm =(event)=>{
        event.preventDefault()
       if(RegForm.email,RegForm.password,RegForm.username){
        createUserWithEmailAndPassword(auth,RegForm.email,RegForm.password)
        .then((AuthUser)=>{
            return AuthUser.user.updateProfile({
                displayName:RegForm.username
            })
        })
        .catch((error)=>{
            alert(error.message)
        })
       }
    }
    let styles = {
        display:Form.checked?'block':'none'
    }
    let regStyles = {
        display:RegForm.checked?'block':'none'
    }
    const LoginWithGoogle =()=>{
      signInWithPopup(auth,provider)
      .then((data)=>{
         dispatch(DetailsView({
             Email:data.user.email,
             Username:data.user.displayName,
             PhotoImg:data.user.photoURL
         }))
      })
      .catch((error)=>{
          alert(error.message)
      })
    }
    //console.log(UserDetails)
  return (
    <Container>
        <Login>
           <h2>Login</h2>
           <hr/>
           <form onSubmit={HandleForm}>
               <label>Email</label>
               <br/>
               <input
                type='email'
                placeholder='Email'
                onChange={HandleInput}
                name='email'
                value={Form.email}
                className='input'
               />
               <br/>
               <label>Password</label>
               <br/>
               <input
                type='password'
                placeholder='Password'
                onChange={HandleInput}
                name='password'
                value={Form.password}
                className='input'
               />
               <br/>
               <input
                type='checkbox'
                onChange={HandleInput}
                name='checked'
                value={Form.checked}
               />
               <label>I Agree With The Terms And Conditions Provided By Google Mail</label>
               <br/>
               <button style={styles}>Login</button>
           </form>
           <p>or</p>
           <button style={styles} onClick={LoginWithGoogle}>
           <img src='/Images/G.png'/>
               Sign Up With Google
           </button>
        </Login>
        <Registration>
            <h2>Registration</h2>
            <hr/>
            <form onSubmit={HandleRegForm}>
                <input
                 type='text'
                 placeholder='Username'
                 onChange={handleinput}
                 name='username'
                 value={RegForm.username}
                 className='input'
                />
                <br/>
                <input
                type='email'
                placeholder='Email'
                onChange={handleinput}
                className='input'
                name='email'
                value={RegForm.email}
                />
                <br/>
                <input
                 type='password'
                 placeholder='Password'
                 onChange={handleinput}
                 className='input'
                 name='password'
                 value={RegForm.password}
                />
                <br/>
                <input
                 type='checkbox'
                 onChange={handleinput}
                 name='checked'
                 value={RegForm.checked}
                />
                <label>I Agree With The Terms And Conditions Provided By Google Mail</label>
                <button style={regStyles}>Create Gmail Account</button>
            </form>
            <p>or</p>
            <button style={regStyles}>
              <img src='/Images/G.png'/>
               Sign Up With Google
           </button>
        </Registration>
    </Container>
  )
}

export default UserDetails

let Container = styled.div`
 width:100%;
 top:0;
 left:0;
 position:fixed;
 height:100vh;
 background-color:#f4f4f4;
`
let Login = styled.div`
 width:350px;
 height:400px;
 background-color:#fff;
 border-radius:10px;
 top:20%;
 left:100px;
 position:absolute;
 box-shadow:3px 3px 8px #333;
 padding:15px;
 hr{
    margin:5px 0;
 }
 form{
    .input{
        width:90%;
        height:45px;
        border-radius:8px;
        border:2px solid #333;
        padding:0 15px;
        color:#000;
        margin:3% 0;
    }
    label{
        text-align:left;
    }
 }
 button{
     width:100%;
     cursor:pointer;
     margin-top:5px;
     height:45px;
     outline:none;
     border:none;
     display:flex;
     background:transparent;
     justify-content:center;
     align-items:center;
     box-shadow:3px 3px 6px #333;
     border-radius:10px;
     img{
         width:20px;
         object-fit:contain;
         margin: 2px 3px;
     }
 }
 p{
     text-align:center;
     margin:2% 0;
 }
`
let Registration = styled.div`
width:400px;
height:430px;
background-color:#fff;
border-radius:10px;
top:20%;
right:100px;
position:absolute;
padding:15px;
box-shadow:3px 3px 8px #333;
hr{
    margin:5px 0;
}
form{
    .input{
        width:90%;
        height:45px;
        border-radius:8px;
        border:2px solid #333;
        padding:0 15px;
        color:#000;
        margin:3% 0;
    }
    label{
        text-align:left;
    }
 }
 button{
    width:100%;
    cursor:pointer;
    margin-top:5px;
    height:45px;
    outline:none;
    border:none;
    display:flex;
    background:transparent;
    justify-content:center;
    align-items:center;
    box-shadow:3px 3px 6px #333;
    border-radius:10px;
    img{
        width:20px;
        object-fit:contain;
        margin: 0 3px;
    }
}
p{
    text-align:center;
    margin:2% 0;
}
`