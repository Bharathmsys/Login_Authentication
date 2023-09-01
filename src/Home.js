import React, { useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './Firebase'
import { signOut } from 'firebase/auth'
import { redirect, useNavigate } from 'react-router-dom'
const Home = ({email}) => {
  const nav = useNavigate()

useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
   if(user){
      const uid = user.uid
      // console.log("uid",uid)
      redirect('/')
    } else {
      // console.log("user is logged out")
       nav('/')

    }
  },[])
})


  const onsignout = ()=>{
     signOut(auth).then(()=>{
      console.log("logout")
      redirect("/Home")
     }).catch((e)=>{
      console.log(e)
     })

  }
 
  return (
    <center>
      <h1>{email} Your Log is sucessfully completed</h1>
      <button onClick={onsignout}>Sign out</button>
    </center>
  )
}

export default Home
