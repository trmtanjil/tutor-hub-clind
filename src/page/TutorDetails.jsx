import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router'

function TutorDetails() {
const datas = useLoaderData(); 
  const [data, setdata]= useState (datas?.data || [])
  console.log(setdata);
  console.log(data)
  const { _id, image, description, language, price } = data;
  
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

        <Link to={`/tutordetails/${_id}`}>
          <button className="btn btn-sm btn-primary mt-2">Book now</button>
        </Link>
      </div>
    </div>
  )
}

export default TutorDetails