import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBarsProgress, faDisplay, faPrint, faRepeat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import EmailPost from './EmailPost'

function RightSide() {
    let[Form,setForm] = React.useState({
        checked:false
    })
    const HandleInput = ()=>{
        setForm((prevState)=>!prevState)
    }
    let { emailPost} = useSelector((state)=>state.EmailReducer)
   // console.log(emailPost)
  return (
    <Container>
        <Head>
            <LeftHead>
                <input
                type='checkbox'
                onChange={HandleInput}
                name='checked'
                value={Form.checked}
                />
                <img src='/Images/arrow.png' className='icon'/>
                <FontAwesomeIcon icon={faRepeat}/>
                <img src='/Images/more.png' className='more'/>
            </LeftHead>
            <RightHead>
                <img src='/Images/arrow.png' className='lefticon'/>
                <img src='/Images/arrow.png' className='icon'/>
                <FontAwesomeIcon icon={faPrint}/>
                <img src='/Images/setting.png' className='settings'/>
            </RightHead>
        </Head>
        <Links>
          <div className='first_link'>
              <FontAwesomeIcon icon={faDisplay} className='icons'/>
               <p>Primary</p>
          </div>
          <div className='first_link'>
               <img src='/Images/friends.png'/>
               <p>Social</p>
          </div>
          <div className='first_link'>
              <FontAwesomeIcon icon={faBookmark} className='icons'/>
               <p>Promotions</p>
          </div>
        </Links>
      {emailPost.map((post)=>{
          return(
            <EmailPost
              condition={Form.checked}
              Handler = {HandleInput}
              email = {post.email}
              message = {post.message}
              timestamp = {post.timestamp}
              time = {post.time}
            />
          )
      })}
    </Container>
  )
}

export default RightSide
let Container = styled.div`
 flex-basis:76%; 
 margin:1% 0;
`
let Head = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
`
let LeftHead = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
.icon{
    transform:rotate(90deg);
    width:7px;
    margin: 0 16px;
}
.more{
    transform:rotate(-90deg);
    width:14px;
    margin: 0 16px;
}
`
let RightHead = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 img{
     margin: 0 14px;
 }
 .lefticon{
     transform:rotate(-180deg);
     width:10px;
 }
 .icon{
     width:10px;
 }
 .settings{
     width:25px;
 }
`
let Links = styled.div`
 display:flex;
 justify-content:left;
 align-items:center;
 margin:1% -25px;
 cusor:pointer;
`