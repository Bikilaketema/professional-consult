import { useState } from "react";
import axios from "axios";

interface TeacherData {
  fname: string;
  mname: string;
  lname: string;
  subject: string;
  zone: string;
  town: string;
  phoneNumber: string;
}

const TeacherRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<TeacherData>({
    fname: "",
    mname: "",
    lname: "",
    subject: "",
    zone: "",
    town: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post("https://gutu.bikilaketema.com/api/teachers", formData);
      setSuccess(true);
      setFormData({
        fname: "",
        mname: "",
        lname: "",
        subject: "",
        zone: "",
        town: "",
        phoneNumber: "",
      });
    } catch (err) {
      setError("Failed to register teacher. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 pt-6">
      <div className="w-full max-w-lg bg-white p-8 shadow-md rounded-lg relative">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Register Teacher</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="fname" value={formData.fname} onChange={handleChange} placeholder="First Name" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />

          <input type="text" name="mname" value={formData.mname} onChange={handleChange} placeholder="Middle Name" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />

          <input type="text" name="lname" value={formData.lname} onChange={handleChange} placeholder="Last Name" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />

          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />

          <input type="text" name="zone" value={formData.zone} onChange={handleChange} placeholder="Zone" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />

          <input type="text" name="town" value={formData.town} onChange={handleChange} placeholder="Town" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />

          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />

          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-all">
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {success && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-bold text-green-600">Success!</h3>
            <p className="text-gray-700">Teacher registered successfully.</p>
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

export default TeacherRegistrationForm;
