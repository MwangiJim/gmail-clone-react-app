import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { AddPost } from '../redux/reducers/reducer'

function PopUpGmail() {
    let dispatch = useDispatch()
    let date = new Date()
    let aDate = date.toLocaleDateString()
    let atime = date.toLocaleTimeString()
    let[Form,setForm] = useState({
        email:'',
        subject:''
    })
    const HandleInput =(e)=>{
        setForm((prevForm)=>{
            return {
                ...prevForm,
                [e.target.name]:e.target.value
            }
        })
    }
    const HandleForm=(event)=>{
        event.preventDefault()
        if(Form.email,Form.subject){
            //console.log(Form)
            setFormDisplay((prevState)=>!prevState)
            dispatch(AddPost({
                id:1,
                email:Form.email,
                message:Form.subject,
                timestamp:aDate,
                time:atime
            }))
        }
    }
    let [FormDisplay,setFormDisplay] = useState(false)
    let styleForm = {
        display:FormDisplay?'none':''
    }
  return (
        <Section style={styleForm}>
             <Container>
               <h4>New Message</h4>
                <input
                    type='email'
                    placeholder='To'
                    value={Form.email}
                    name='email'
                    onChange={HandleInput}
                />
                <input
                  type='text'
                  placeholder="Subject"
                  value={Form.subject}
                  name='subject'
                  onChange={HandleInput}
                />
               <Footer>
                  <button  type ='submit' onClick={HandleForm}className='SendBtn'>Send</button>
               </Footer>
            </Container>
        </Section>
  )
}

export default PopUpGmail

let Container = styled.div`
 width:500px;
 height:350px;
 border-radius:10px;
 box-shadow:0 0 2px 2px #333;
 bottom:0;
 right:0;
 overflow:hidden;
 position:absolute;
 background-color:#fff;
 h4{
     background-color:#333;
     width:100%;
     color:#fff;
     padding:15px 4px;
 }
     input{
         width:100%;
         height:40px;
         outline:none;
         border:0;
         padding: 0 15px;
         color:gray;
         margin: 10px 2px;
     }
     .SendBtn{
         background-color:blue;
         padding:10px 25px;
         color:#fff;
         border-radius:10px;
         outline:none;
         border:none;
         cursor:pointer;
         margin: 0 5px;
     }
`
let Section = styled.div`
 width:100%;
 height:100vh;
 top:0;
 left:0;
 position:absolute;
 background-color:rgb(77,76,76,0.3);
 -webkit-backdrop-filter:blur(10px);
 z-index:50;
`
let Footer = styled.div`
 width:100%;
 background-color:#333;
 padding:8px 0;
 bottom:0%;
 left:0;
 position:absolute;
`