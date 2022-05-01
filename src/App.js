import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import UserDetails from './components/UserDetails';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  let auth = getAuth()
  let[menu,setMenu] = useState(false)
  const MoveMenu =()=>{
      setMenu((prevMenu)=>!prevMenu)
  }
  let[user,setUser] = useState(null)

  useEffect(()=>{
     onAuthStateChanged(auth,(AuthUser)=>{
       if(AuthUser){
         setUser(AuthUser)
         console.log(AuthUser)
         console.log('You Are Logged In!!!')
       }
       else{
         setUser(null)
         console.log('You Are Logged Out!!!')
       }
     })
  },[])
  return (
    <div className="App">
       <Header Handler = {MoveMenu}/> 
      {user? <Home/>: <UserDetails/> }   
      {menu?<Menu/>:''}         
    </div>
  );
}

export default App;
