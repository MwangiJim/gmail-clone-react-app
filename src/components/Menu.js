import { faDoorClosed, faDoorOpen, faTimesCircle, faTimesRectangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

function Menu() {
    let auth = getAuth()
    let[menu,setMenu] = useState(false)
    let{ UserDetails} = useSelector((state)=>state.EmailReducer)
    const HandleMenu = ()=>{
        setMenu((prevMenu)=>!prevMenu)
    }
    let styles = {
        display:menu?'none':''
    }
  return (
    <Container style={styles}>
       <TopSection>
           <FontAwesomeIcon icon={faTimesCircle} className='close' onClick={HandleMenu}/>
           <img src='/Images/5.jpg'/>
       </TopSection>
       <div className='Account'>
           <img src='/Images/5.jpg'/>
           <div className='account__details'>
                <h4>{UserDetails.Email}</h4>
                <p>{UserDetails.Username}</p>
           </div>
       </div>
       <div className='Account'>
           <img src='/Images/5.jpg'/>
           <div className='account__details'>
                <h4>example@gmail.com</h4>
                <p>J.I.M</p>
           </div>
       </div>
       <div className='Button'>
            + Add Account
       </div>
       <button onClick={()=>auth.signOut()}>
           LOGOUT
           <FontAwesomeIcon icon={faDoorClosed}/>
       </button>
    </Container>
  )
}

export default Menu
let Container = styled.div`
 width:300px;
 height:100vh;
 top:0;
 left:0px;
 position:fixed;
 z-index:30;
 background-color:#f4f4f4;
 border-radius:10px;
 .Account{
     margin:9px 0;
     padding: 14px 12px;
     display:flex;
     img{
         height:30px;
         width:30px;
         border-radius:50%;
     }
     cursor:pointer;
 }
 .Button{
     text-align:center;
     outline:none;
     border:none;
     padding:12px 30px;
     cursor:pointer;
     background:#fff;
     box-shadow:3px 3px 7px #333;
     border-radius:20px;
     width:40%;
     margin:0 3%;
 }
 button{
     margin: 80% 3%;
  display:flex;
  justify-content:center;
  align-items:center;
  outline:none;
  border:none;
  cursor:pointer;
  border-radius:20px;
  box-shadow:3px 3px 8px #333;
  color:#333;
  background:#fff;
  width:60%;
  padding:12px 45px;
 }
 .account__details{
     margin: 0 4px;
 }
`
let TopSection = styled.div`
 width:100%;
 height:20vh;
 background-image:url("/Images/6.jpg");
 background-position:center;
 background-size:cover;
 margin-bottom:1%;
 img{
     width:50px;
     height:50px;
     object-fit:contain;
     border:5px solid #fff;
     border-radius:50%;
     left:35%;
     position:relative;
     top:90px;
 }
 .close{
     top:-40px;
     left:90%;
     position:relative;
     color:#fff;
     font-size:20px;
     cursor:pointer;
 }
`