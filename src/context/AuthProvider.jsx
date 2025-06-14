import React, {  useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { AuthContext } from './AuthContext'
import Swal from 'sweetalert2';
const provider = new GoogleAuthProvider();

function AuthProvider({children}) {
  const [user, setUser] =useState(null)
  const [loading, setLoading] =useState(true)
    
   // regiser 
    const creatuser = (email,password)=>{
      setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    }
    //google register 
        const googleregister =()=>{
           setLoading(true)
        return signInWithPopup(auth,provider);
    }
    //login 
    const loginuser=(email,password)=>{
       setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }
    //logout
    const logOutUser=()=>{
        Swal.fire({
                 icon: "success",
                 title: "Your Logout  is succesfull",
                 showConfirmButton: false,
                 timer: 1500
               });
       setLoading(true)
      return signOut(auth)
    }

        const userInfo={
          creatuser, 
          googleregister,  
          loginuser ,
          logOutUser,
          user,
          loading
    }
  
//add observer
useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth,currentuser=>{
    setUser(currentuser)
     setLoading(false)
  })
  return()=>{
    unSubscribe();
  }
},[])

  return (
   <AuthContext.Provider value={userInfo} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider