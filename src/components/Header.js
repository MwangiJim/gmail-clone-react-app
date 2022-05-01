import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faBoxesAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import EmailPost from './EmailPost'

function Header(props) {
    let{emailPost}=useSelector((state)=>state.EmailReducer)
    let[Input,setInput] = useState({
        searchresult:''
    })
  //  console.log(emailPost)
    const HandleInput =(e)=>{
      setInput((prevInput)=>{
          return{
              ...prevInput,
              [e.target.name]:e.target.value
          }
      })
    }
    //console.log(Input)
    let EmptyArray = []
    if(Input.searchresult){
        EmptyArray = emailPost.filter((data)=>{
            return data.email.includes(Input.searchresult)
        })
        //console.log(EmptyArray)
        let MapArray = EmptyArray.map((data)=>{
            return (
                <EmailPost
                    email = {data.email}
                    message = {data.message}
                    timestamp = {data.timestamp}
                    time = {data.time}
                />
            )
            })
       console.log(MapArray)
    }
  return (
    <Container>
        <div className='left__side'>
            <FontAwesomeIcon icon={faBars} className='menu' onClick={props.Handler}/>
            <img src='/Images/gmailpng.png'/>
            <h2>Gmail</h2>
        </div>
        <div className='input__section'>
           <FontAwesomeIcon icon={faSearch}/>
           <input
           type='text'
             placeholder='Search Mail'
             value={Input.searchresult}
             name='searchresult'
             onChange={HandleInput}
           />
           <div className='autocomplete__box'>
              <li>Kingongo@gmail.com</li>
           </div>
        </div>
        <div className='right__side'>
            <FontAwesomeIcon icon={faBoxesAlt}/>
            <FontAwesomeIcon icon={faBell} className='icon'/>
            <img src='/Images/5.jpg'/>
        </div>
    </Container>
  )
}

export default Header

let Container = styled.div`
 width:100%;
 display:flex;
 padding:10px 0;
 top:0;
 left:0;
 position:absolute;
 background-color:#fff;
 z-index:20;
 justify-content:space-between;
 .left__side{
     display:flex;
     justify-content:left;
     align-items:center;
     img{
         width:80px;
         object-fit:contain;
         margin:0;
     }
     h2{
         font-size:35px;
         font-weight:400;
         margin:0 2px;
         color:gray;
     }
     .menu{
         color:gray;
         margin-left:10px;
         cursor:pointer;
     }
 }
 .input__section{
     width:800px;
     height:45px;
     border-radius:15px;
     background-color:#f4f4f4;
     padding:0 20px;
     display:flex;
     justify-content:left;
     align-items:center;
     input{
        width:100%;
        height:45px;
        outline:none;
        border:none;
        color:gray;
        background:transparent;
     }
     .autocomplete__box{
         background-color:#fff;
         height:max-content;
        box-shadow:0 0 5px 5px #333;
         width:60%;
         top:65%;
         left:23%;
         position:absolute;
         border-radius:7px;
         padding:20px 12px;
         margin:2% 0;
     }
 }
 .right__side{
     display:flex;
     justify-content:space-between;
     align-items:center;
     img{
         width:25px;
         height:25px;
         object-fit:contain;
         border-radius:50%;
         border:5px solid #000;
         margin:0 5px;
     }
     .icon{
         margin:0 10px;
     }
 }
`