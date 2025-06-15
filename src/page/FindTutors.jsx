import React, { useEffect, useState } from 'react';

function FindTutors() {
  const [search, setSearch] = useState("");
  const [alltutor, setAlltutor] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tutor')
      .then(res => res.json())
      .then(data => setAlltutor(data));
  }, [search]);

  return (
    <div className="p-5">
      {/* Optional: Search Input */}
      <input
        type="text"
        placeholder="Search Tutor..."
        className="input input-bordered w-full max-w-xs mb-5"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ✅ Grid container (fixed) */}
      
        {
          alltutor.map((tutor) => (
          <div className="flex flex-col md:flex-row items-start gap-4 border rounded-xl p-4 bg-gray-300 my-5 shadow-md">
      {/* Left Side: Image */}
      <img
        src={tutor.image }
        alt="Tutor"
        className="w-32 h-32 rounded-lg object-cover"
      />

      {/* Right Side: Info */}
      <div className="flex-1 space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{tutor.username}</h2>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Language:</span> {tutor.language}
        </p>
        <p className="text-sm text-gray-700">{tutor.description}</p>
        <button className="mt-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition">
          View Details
        </button>
      </div>
    </div>
  
          ))
        }
      </div>
    
  )
}

export default FindTutors;
