import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function FindTutors() {
  const { language } = useParams(); // get language from URL
  const [alltutor, setAlltutor] = useState([]);

  useEffect(() => {
     let url =`${import.meta.env.VITE_API_URL}/tutor`;
    if (language) {
      url = `${import.meta.env.VITE_API_URL}/tutor/bylanguage?language=${language}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setAlltutor(data));
  }, [language]);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4 capitalize">Tutors for "{language}"</h2>

      {
        alltutor.map((tutor) => (
          <div key={tutor._id} className="flex flex-col md:flex-row items-start gap-4 border rounded-xl p-4 bg-gray-300 my-5 shadow-md">
            <img
              src={tutor.image}
              alt="Tutor"
              className="w-32 h-32 rounded-lg object-cover"
            />
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
  );
}

export default FindTutors;
