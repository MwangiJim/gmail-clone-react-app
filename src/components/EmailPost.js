
import { faBookmark, faStar } from '@fortawesome/free-regular-svg-icons'
import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PostView, RemoveStarredPost, StarredPost } from '../redux/reducers/reducer'

function EmailPost(props) {
    let[Star,setStar] = useState(true)
    let{starredPost} = useSelector((state)=>state.EmailReducer)
    let dispatch = useDispatch()
    // let[Form,setForm] = useState({
    //     checked:false
    // })
    // const HandleInput =(e)=>{
    //     setForm((prevForm)=>{
    //         return {
    //             ...prevForm,
    //             [e.target.name]:e.target.value
    //         }
    //     })
    // }
    const StarredMessage =()=>{
      Star? dispatch(StarredPost({
        id:props.time,
        email:props.email,
        message:props.message,
        timestamp:props.timestamp,
        time:props.time
    })):dispatch(RemoveStarredPost(props.time))
       setStar((prevStar)=>!prevStar)
    }
    const ShowInPost =()=>{
        dispatch(PostView({
            Message:props.message,
            Date:props.timestamp,
            Time:props.time,
            Email:props.email
        }))
    }
  return (
    <Link to={`/postdisplay`}>
    <Container onClick={ShowInPost} key={1}>
       <div className='left__side'>
          <input
           type='checkbox'
           onChange={props.Handler}
            value={props.condition}
          />
          <FontAwesomeIcon icon={Star?faStar:faStarHalfStroke} className='star' onClick={StarredMessage}/>
          <FontAwesomeIcon icon={faBookmark} className='bookmark'/>
          <h3>{props.email}</h3>
       </div>
       <div className='center'>
           <h4>{props.message}</h4>
       </div>
       <div className='rightside'>
          <h3>{props.timestamp}</h3>
          <p>{props.time}</p>
       </div>
    </Container>
    </Link>
  )
}

export default EmailPost
let Container = styled.div`
text-decoration:none;
 display:flex;
 juestify-content:space-between;
 align-items:center;
 padding:15px 10px;
 cursor:pointer;
 width:100%;
 :hover{
     background-color:#f4f4f4;
 }
 .left__side{
     flex-basis:30%;
     display:flex;
     justify-content:left;
     align-items:center;
     text-align:left;
     .star{
         margin: 0 3%;
         cursor:pointer;
     }
     .bookmark{
         margin:0 2%;
     }
     h3{
         font-size:15px;
     }
 }
 .center{
     margin-left:5%;
     flex-basis:45%;
     text-align:left;
 }
 .rightside{
     flex-basis:20%;
     text-align:left;
     margin-left:3%;
     display:flex;
     justify-content:left;
     align-items:center;
     color:gray;
     h3{
         font-weight:300;
         margin: 0 4px;
     }
 }
`