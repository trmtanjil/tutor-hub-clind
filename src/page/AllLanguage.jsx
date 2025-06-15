import { ArrowRight, Book, Landmark, Globe, School, Library, Languages, BookOpen, BookText, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router";

const AllLanguage = () => {
  const navigate = useNavigate();

   const languages = [
    {
      name: "English",
      icon: <Book className="w-8 h-8 text-blue-600" />,
      count: "20,156",
    },
    {
      name: "Spanish",
      icon: <Landmark className="w-8 h-8 text-red-500" />,
      count: "6,250",
    },
    {
      name: "French",
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      count: "2,056",
    },
    {
      name: "German",
      icon: <School className="w-8 h-8 text-yellow-600" />,
      count: "1,934",
    },
    {
      name: "Italian",
      icon: <Library className="w-8 h-8 text-green-600" />,
      count: "1,754",
    },
    {
      name: "Chinese",
      icon: <Languages className="w-8 h-8 text-red-600" />,
      count: "4,258",
    },
    {
      name: "Arabic",
      icon: <BookOpen className="w-8 h-8 text-green-800" />,
      count: "2,238",
    },
    {
      name: "Japanese",
      icon: <BookText className="w-8 h-8 text-indigo-600" />,
      count: "1,954",
    },
    {
      name: "Portuguese",
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      count: "1,043",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Language Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {languages.map((lang, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 border rounded-lg shadow hover:shadow-lg cursor-pointer transition"
            onClick={() => navigate(`/find-tutors/${lang.name.toLowerCase()}`)}
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl">{lang.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{lang.name} Tutors</h3>
                <p className="text-sm text-gray-500">{lang.count} teachers</p>
              </div>
            </div>
            <ArrowRight />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllLanguage;
