import React from 'react'
import { useLoaderData } from 'react-router'

function TutorDetails() {
  const  data = useLoaderData();
    console.log(data)
  return (
    <div>TutorDetails</div>
  )
}

export default TutorDetails