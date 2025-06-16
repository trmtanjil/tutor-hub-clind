import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios';

function Myboked() {
    const {user}=use(AuthContext)
    const [boked, setboked]= useState([]);

    useEffect(()=>{
        axios(`${import.meta.env.VITE_API_URL}/my-boked/${user?.email}`)
        .then(data=>{
            console.log(data?.data)
            setboked(data?.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[user])
  return (
    <div>
        {
            boked.map(bok =><>
            <p>{bok._id}</p>
            </>)
        }
    </div>
  )
}

export default Myboked