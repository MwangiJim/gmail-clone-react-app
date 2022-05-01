import { faArrowAltCircleDown, faArrowAltCircleRight, faBook, faClock, faDisplay, faPaperclip, faPaperPlane, faPeopleArrows, faPerson, faPhoneAlt, faPlus, faStar, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import PopUpGmail from './PopUpGmail'
function LeftSide() {
    let{emailPost,starredPost} = useSelector((state)=>state.EmailReducer)
    let[Display,setDisplay] = React.useState(false)

    const ShowComposer =()=>{
        setDisplay((prevForm)=>!prevForm)
    }
  return (
    <Section>
      <button onClick={ShowComposer} className='button'>
          <FontAwesomeIcon icon={faPlus}/>
          Compose
      </button>
      <div className='line active'>
          <LeftLine>
              <FontAwesomeIcon icon={faDisplay}/>
              <h4>Inbox</h4>
          </LeftLine>
          <span>54</span>
      </div>
      <div className='line'>
          <LeftLine>
              <FontAwesomeIcon icon={faStar}/>
              <h4>Starred</h4>
          </LeftLine>
          <span>{starredPost.length}</span>
      </div>
      <div className='line'>
          <LeftLine>
              <FontAwesomeIcon icon={faClock}/>
              <h4>Snoozed</h4>
          </LeftLine>
          <span>4</span>
      </div>
      <div className='line'>
          <LeftLine>
              <FontAwesomeIcon icon={faBook}/>
              <h4>Important</h4>
          </LeftLine>
          <span>30</span>
      </div>
      <div className='line'>
          <LeftLine>
              <FontAwesomeIcon icon={faPaperPlane}/>
              <h4>Sent</h4>
          </LeftLine>
          <span>{emailPost.length}</span>
      </div>
      <div className='line'>
          <LeftLine>
              <FontAwesomeIcon icon={faPaperclip}/>
              <h4>Drafts</h4>
          </LeftLine>
          <span>40</span>
      </div>
      <div className='more'>
          <FontAwesomeIcon icon={faArrowAltCircleDown}/>
          <h3>More</h3>
      </div>
      <div className='more_contacts'>
          <FontAwesomeIcon icon={faPerson}/>
          <FontAwesomeIcon icon={faVideoCamera} className='contact'/>
          <FontAwesomeIcon icon={faPhoneAlt}/>
      </div>
     {Display? <PopUpGmail/>:''}
    </Section>
  )
}

export default LeftSide
let Section = styled.div`
 flex-basis:21%;
 margin:2% 0;
.button{
     background-color:#fff;
     outline:none;
     border:none;
     cursor:pointer;
     box-shadow:4px 4px 12px #000;
     border-radius:25px;
     padding:15px 35px;
     display:flex;
     justify-content:space-between;
     align-items:center;
     color:#000;
     margin:10px 0;
 }
 .line{
     display:flex;
     justify-content:space-between;
     align-items:center;
     margin:10px 0;
     padding:10px 12px;
     color:gray;
     :hover{
         background-color:rgba(255, 0, 0, 0.164);
         color:#f44336;
     }
     h4{
         font-size:17px;
         font-weight:400;
         margin: 0 7px;
     }
     span{
         opacity:0;
     }
     :hover span{
         opacity:1;
     }
 }
 .more{
     display:flex;
     justify-content:left;
     align-items:center;
     color:gray;
     margin:0 4%;
     h3{
         font-weight:300;
         font-size:17px;
         margin: 0 3px;
     }
 }
 .more_contacts{
     display:flex;
     justify-content:center;
     align-items:center;
     color:gray;
     font-size:19px;
     .contact{
         margin:0 13px;
     }
 }
`
let LeftLine = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
`