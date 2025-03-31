import { useState } from "react";
import axios from "axios";

interface SchoolData {
  schoolName: string;
  gradeLevel: string;
  subjectsNeeded: string;
  numberOfTeachersNeeded: string;
  trainingType: string;
  phoneNumber: string;
}

const gradeLevels = [
  "KG 1", "KG 2", "KG 3", 
  "Grade 0", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", 
  "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"
];

const SchoolRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<SchoolData>({
    schoolName: "",
    gradeLevel: "",
    subjectsNeeded: "",
    numberOfTeachersNeeded: "",
    trainingType: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = () => {
    setFormData(prev => ({
      ...prev,
      subjectsNeeded: prev.subjectsNeeded
        .split(",")
        .map(subject => subject.trim())
        .filter(subject => subject)
        .join(", "),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post("https://gutu.bikilaketema.com/api/schools", {
        ...formData,
        subjectsNeeded: formData.subjectsNeeded.split(",").map(subject => subject.trim()),
      });
      setSuccess(true);
      setFormData({
        schoolName: "",
        gradeLevel: "",
        subjectsNeeded: "",
        numberOfTeachersNeeded: "",
        trainingType: "",
        phoneNumber: "",
      });
    } catch (err) {
      setError("Failed to register school. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white p-8 shadow-md rounded-lg relative">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Register School</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} placeholder="School Name" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary outline-none" />

          <select name="gradeLevel" value={formData.gradeLevel} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary outline-none">
            <option value="" disabled>Select Grade Level</option>
            {gradeLevels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>

          <input type="text" name="subjectsNeeded" value={formData.subjectsNeeded} onChange={handleChange} onBlur={handleBlur} placeholder="Subjects Needed (Comma separated)" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary outline-none" />

          <input type="number" min="1" name="numberOfTeachersNeeded" value={formData.numberOfTeachersNeeded} onChange={handleChange} placeholder="Number of Teachers Needed" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary outline-none" />

          <input type="text" name="trainingType" value={formData.trainingType} onChange={handleChange} placeholder="Training Type" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary outline-none" />

          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary outline-none" />

          <button type="submit" disabled={loading} className="w-full bg-primary text-white p-3 rounded-md hover:bg-secondary transition-all">
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {success && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-bold text-green-600">Success!</h3>
              <p className="text-gray-700">School registered successfully.</p>
              <button onClick={() => setSuccess(false)} className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all">
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolRegistrationForm;
