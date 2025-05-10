"use client"

import type React from "react"

import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, AlertCircle } from "lucide-react"

// School Registration Form
interface SchoolData {
  schoolName: string
  gradeLevel: string
  subjectsNeeded: string
  numberOfTeachersNeeded: string
  trainingType: string
  phoneNumber: string
}

const gradeLevels = [
  "KG 1",
  "KG 2",
  "KG 3",
  "Grade 0",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
]

export const SchoolRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<SchoolData>({
    schoolName: "",
    gradeLevel: "",
    subjectsNeeded: "",
    numberOfTeachersNeeded: "",
    trainingType: "",
    phoneNumber: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSelectChange = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleBlur = () => {
    setFormData((prev) => ({
      ...prev,
      subjectsNeeded: prev.subjectsNeeded
        .split(",")
        .map((subject) => subject.trim())
        .filter((subject) => subject)
        .join(", "),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      await axios.post("https://gutu.bikilaketema.com/api/schools", {
        ...formData,
        subjectsNeeded: formData.subjectsNeeded.split(",").map((subject) => subject.trim()),
      })
      setSuccess(true)
      setFormData({
        schoolName: "",
        gradeLevel: "",
        subjectsNeeded: "",
        numberOfTeachersNeeded: "",
        trainingType: "",
        phoneNumber: "",
      })
    } catch (err) {
      setError("Failed to register school. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Input
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            placeholder="School Name"
            required
            className="w-full p-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-800 placeholder:text-gray-500"
          />
        </div>

        <div>
          <Select value={formData.gradeLevel} onValueChange={(value) => handleSelectChange(value, "gradeLevel")}>
            <SelectTrigger className="w-full p-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-800">
              <SelectValue placeholder="Select Grade Level" />
            </SelectTrigger>
            <SelectContent>
              {gradeLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Input
            type="text"
            name="subjectsNeeded"
            value={formData.subjectsNeeded}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Subjects Needed (Comma separated)"
            required
            className="w-full p-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-800 placeholder:text-gray-500"
          />
        </div>

        <div>
          <Input
            type="number"
            min="1"
            name="numberOfTeachersNeeded"
            value={formData.numberOfTeachersNeeded}
            onChange={handleChange}
            placeholder="Number of Teachers Needed"
            required
            className="w-full p-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-800 placeholder:text-gray-500"
          />
        </div>

        <div>
          <Input
            type="text"
            name="trainingType"
            value={formData.trainingType}
            onChange={handleChange}
            placeholder="Training Type"
            required
            className="w-full p-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-800 placeholder:text-gray-500"
          />
        </div>

        <div>
          <Input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full p-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-800 placeholder:text-gray-500"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white py-6 rounded-xl text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
        >
          {loading ? "Registering..." : "Register School"}
        </Button>
      </form>

      {success && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md mx-4">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Success!</h3>
            <p className="text-gray-600 mb-6">School registered successfully.</p>
            <Button
              onClick={() => setSuccess(false)}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all"
            >
              OK
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

// Teacher Registration Form
interface TeacherData {
  fname: string
  mname: string
  lname: string
  subject: string
  zone: string
  town: string
  phoneNumber: string
}

export const TeacherRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<TeacherData>({
    fname: "",
    mname: "",
    lname: "",
    subject: "",
    zone: "",
    town: "",
    phoneNumber: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      await axios.post("https://gutu.bikilaketema.com/api/teachers", formData)
      setSuccess(true)
      setFormData({
        fname: "",
        mname: "",
        lname: "",
        subject: "",
        zone: "",
        town: "",
        phoneNumber: "",
      })
    } catch (err) {
      setError("Failed to register teacher. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="w-full p-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-800 placeholder:text-gray-500"
          />
        </div>

        <div>
          <Input
            type="text"
            name="mname"
            value={formData.mname}
            onChange={handleChange}
            placeholder="Middle Name"
            required
            className="w-full p-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-800 placeholder:text-gray-500"
          />
        </div>

        <div>
          <Input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="w-full p-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-800 placeholder:text-gray-500"
          />
        </div>

        <div>
          <Input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full p-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-800 placeholder:text-gray-500"
          />
        </div>

        <div>
          <Input
            type="text"
            name="zone"
            value={formData.zone}
            onChange={handleChange}
            placeholder="Zone"
            required
            className="w-full p-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-800 placeholder:text-gray-500"
          />
        </div>

        <div>
          <Input
            type="text"
            name="town"
            value={formData.town}
            onChange={handleChange}
            placeholder="Town/District"
            required
            className="w-full p-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-800 placeholder:text-gray-500"
          />
        </div>

        <div>
          <Input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full p-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-800 placeholder:text-gray-500"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white py-6 rounded-xl text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
        >
          {loading ? "Registering..." : "Register Teacher"}
        </Button>
      </form>

      {success && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md mx-4">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Success!</h3>
            <p className="text-gray-600 mb-6">Teacher registered successfully.</p>
            <Button
              onClick={() => setSuccess(false)}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all"
            >
              OK
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
