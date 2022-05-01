import { faArrowAltCircleRight, faBookmark, faClock, faSmileBeam, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft, faArrowsUpDown, faDisplay, faMailBulk, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function PostDisplay() {
    let{ postDisplay} = useSelector((state)=>state.EmailReducer)
    console.log(postDisplay)
  return (
    <Container>
        <HeadPost>
            <div className='left__side'>
               <Link to={`/`}><FontAwesomeIcon icon={faArrowLeft}/></Link>
                <FontAwesomeIcon icon={faDisplay}/>
                <FontAwesomeIcon icon={faTrashCan}/>
                <FontAwesomeIcon icon={faMailBulk}/>
                <FontAwesomeIcon icon={faClock}/>
                <FontAwesomeIcon icon={faSmileBeam}/>
                <FontAwesomeIcon icon={faBookmark}/>
                <img src='/Images/more.png'/>
            </div>
            <div className='right_side'>
                <FontAwesomeIcon icon={faArrowsUpDown}/>
                <FontAwesomeIcon icon={faPrint}/>
                <FontAwesomeIcon icon={faArrowAltCircleRight}/>
            </div>
        </HeadPost>
        <Post>
            <PostContainer>
                <div className='left__content'>
                    <h4>{postDisplay.Email}</h4>
                    <h2>{postDisplay.Message}</h2>
                </div>
                <div className='right__content'>
                    <p>{postDisplay.Date}</p>
                    <small>{postDisplay.Time}</small>
                </div>
            </PostContainer>
        </Post>
    </Container>
  )
}

export default PostDisplay
let Container = styled.div`
width:100%;
margin: 2% 0;
`
let HeadPost = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin:0 1%;
 .left__side{
     flex-basis:30%;
     display:flex;
     justify-content:space-between;
     align-items:center;
     img{
         transform:rotate(90deg);
         width:15px;
     }
 }
 .right_side{
     flex-basis:7%;
     display:flex;
     justify-content:space-between;
     align-items:center;
 }
`
let Post = styled.div`
 background-color:#f4f4f4;
 margin:1% 0;
 height:75vh;
 padding:20px;
`
let PostContainer = styled.div`
 background-color:#fff;
 height:75vh;
 padding: 5px 4px;
 box-shadow:2px 2px 5px #000;
 display:flex;
 justify-content:space-between;
 .left__content{
     h4{
         font-size:25px;
         font-weight:500;
         margin:2% 3%;
     }
     h2{
         margin:1% 3%;
         font-size:19px;
         font-weight:400;
     }
     text-align:left;
 }
 .right__content{
     display:flex;
     color:gray;
     margin: 2% 3%;
     p{
         margin: 0 3px;
     }
 }
`