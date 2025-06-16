import React, { use, useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

function TutorDetails() {
    const {user}= use(AuthContext)
const datas = useLoaderData(); 
  const [data, setdata]= useState (datas?.data || [])
  console.log(setdata);
  console.log(data)
  const {_id, image, description, language, price } = data;
  


  const handleboked =()=>{
   
        const bokedInfo ={
            tutorId:_id,
            customarEmail:user?.email,
        }
        //sseve boked info 
        axios.post(`${import.meta.env.VITE_API_URL}/place-boked/${_id}`,bokedInfo)
        .then(data=>{
            console.log(data)
        })

  }


  return (
     <div className="flex flex-col md:flex-row items-start gap-4 border rounded-xl p-4 bg-gray-100 my-5 shadow-md">
      <img
        src={image}
        alt="Tutor"
        className="w-32 h-32 rounded-lg object-cover"
      />

      <div className="flex-1 space-y-2">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Language:</span> {language}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Price:</span> ${price}
        </p>
        <p className="text-sm text-gray-600">{description}</p>

        
          <button onClick={handleboked} className="btn btn-sm btn-primary mt-2">Book now</button>
   
      </div>
    </div>
  )
}

export default TutorDetails