import React from 'react'
import styled from 'styled-components'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import PostDisplay from './PostDisplay'

function Home() {
  return (
      <Container>
        <BrowserRouter>
           <LeftSide/>
           <Routes>
            <Route path='/postdisplay' element={<PostDisplay/>}></Route>
            <Route path='/' element={<RightSide/>}></Route>
           </Routes>
        </BrowserRouter>
      </Container>
  )
}

export default Home

let Container = styled.div`
margin:5% 0;
 display:flex;
 justify-content:space-between;
 overflow:hidden;
`