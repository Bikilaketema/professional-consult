import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getSchools, getTeachers } from "../services/api";

// Define TypeScript interfaces for schools and teachers
interface School {
  schoolName: string;
  gradeLevel: string;
  subjectsNeeded: string[];
  numberOfTeachersNeeded: string;
  trainingType: string;
  phoneNumber: string;
  createdAt: string; // Add createdAt attribute
}

interface Teacher {
  fname: string;
  mname: string;
  lname: string;
  subject: string;
  zone: string;
  town: string;
  phoneNumber: string;
  createdAt: string; // Add createdAt attribute
}

const Dashboard = () => {
  const { token, logout } = useAuth();
  const [schools, setSchools] = useState<School[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [activeTab, setActiveTab] = useState<"schools" | "teachers">("schools");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"); // State for sorting order

  useEffect(() => {
    const fetchData = async () => {
      setSchools(await getSchools(token!));
      setTeachers(await getTeachers(token!));
    };
    fetchData();
  }, [token]);

  // Sort function
  const sortByCreatedAt = <T extends { createdAt: string }>(data: T[]) => {
    return [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      } else {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-md">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-200"
        >
          Logout
        </button>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          className={`px-4 py-2 rounded-md text-white transition duration-200 ${
            activeTab === "schools" ? "bg-blue-600" : "bg-gray-400 hover:bg-gray-500"
          }`}
          onClick={() => setActiveTab("schools")}
        >
          Schools
        </button>
        <button
          className={`px-4 py-2 rounded-md text-white transition duration-200 ${
            activeTab === "teachers" ? "bg-blue-600" : "bg-gray-400 hover:bg-gray-500"
          }`}
          onClick={() => setActiveTab("teachers")}
        >
          Teachers
        </button>
      </div>

      {/* Sort Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition duration-200"
        >
          Sort by Date ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>

      {/* Display Active List */}
      <div className="mt-6 p-6 bg-white shadow-md rounded-md">
        {activeTab === "schools" ? (
          <div>
            <h2 className="text-lg font-bold text-blue-700 mb-4">Registered Schools</h2>
            <ul className="space-y-4">
              {sortByCreatedAt(schools).map((school, index) => (
                <li key={index} className="p-4 bg-gray-50 border-l-4 border-blue-500 shadow rounded-md">
                  <p><strong className="text-gray-700">Name:</strong> {school.schoolName}</p>
                  <p><strong className="text-gray-700">Grade Level:</strong> {school.gradeLevel}</p>
                  <p><strong className="text-gray-700">Subjects Needed:</strong> {school.subjectsNeeded.join(", ")}</p>
                  <p><strong className="text-gray-700">Teachers Needed:</strong> {school.numberOfTeachersNeeded}</p>
                  <p><strong className="text-gray-700">Training Type:</strong> {school.trainingType}</p>
                  <p><strong className="text-gray-700">Phone:</strong> {school.phoneNumber}</p>
                  <p><strong className="text-gray-700">Created At:</strong> {new Date(school.createdAt).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-bold text-blue-700 mb-4">Registered Teachers</h2>
            <ul className="space-y-4">
              {sortByCreatedAt(teachers).map((teacher, index) => (
                <li key={index} className="p-4 bg-gray-50 border-l-4 border-green-500 shadow rounded-md">
                  <p><strong className="text-gray-700">Name:</strong> {teacher.fname} {teacher.mname} {teacher.lname}</p>
                  <p><strong className="text-gray-700">Subject:</strong> {teacher.subject}</p>
                  <p><strong className="text-gray-700">Zone:</strong> {teacher.zone}</p>
                  <p><strong className="text-gray-700">Town:</strong> {teacher.town}</p>
                  <p><strong className="text-gray-700">Phone:</strong> {teacher.phoneNumber}</p>
                  <p><strong className="text-gray-700">Created At:</strong> {new Date(teacher.createdAt).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;