import React, { useState } from 'react';
import { Link } from 'react-router'; 
import { useLoaderData } from 'react-router';

function MyTutor() {
  const datas = useLoaderData(); 
  const [data, setdata]= useState(datas?.data || [])
  console.log(setdata);
  console.log(data)

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">my Tutors</h2>

      {
        data.map(tutor => (
          <div
            key={tutor._id}
            className="flex flex-col md:flex-row items-start gap-4 border rounded-xl p-4 bg-gray-300 my-5 shadow-md"
          >
            <img
              src={tutor.image}
              alt="Tutor"
              className="w-32 h-32 rounded-lg object-cover"
            />

            <div className="flex-1 space-y-2">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Language:</span> {tutor.language}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Price:</span> ${tutor.price}
              </p>
              <p className="text-sm text-gray-600">{tutor.description}</p>

              <Link to={`/tutordetails/${tutor._id}`}>
                <button className="btn btn-sm btn-primary mt-2">Details</button>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default MyTutor;
