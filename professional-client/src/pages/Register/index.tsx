import React from "react";

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Are you a teacher or a school?
      </h1>
      <div className="flex flex-col sm:flex-row gap-4">
      <button
          onClick={() => (window.location.href = "/teacher-registration")}
          className="px-6 py-3 text-lg font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-opacity-80 transition"
        >
          I am a teacher
        </button>

        <button
          onClick={() => (window.location.href = "/school-registration")}
          className="px-6 py-3 text-lg font-semibold text-white bg-secondary rounded-lg shadow-md hover:opacity-80 transition"
        >
          I am a School
        </button>
      </div>
    </div>
  );
};

export default Register;
