"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TeacherRegistrationForm, SchoolRegistrationForm } from "./registration-forms"

export default function RegistrationSection() {
  const [activeTab, setActiveTab] = useState<"teacher" | "school">("teacher")

  return (
    <section id="register" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-blue-900"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-600 rounded-full opacity-10 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-600 rounded-full opacity-10 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Registration</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-indigo-100 max-w-2xl mx-auto text-lg">
            Register with us to access our professional services and training opportunities.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-xl inline-flex">
            <button
              onClick={() => setActiveTab("teacher")}
              className={`px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                activeTab === "teacher" ? "bg-gradient-to-r from-indigo-500 to-blue-500 shadow-md" : "hover:bg-white/10"
              }`}
            >
              For Teachers
            </button>
            <button
              onClick={() => setActiveTab("school")}
              className={`px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                activeTab === "school" ? "bg-gradient-to-r from-indigo-500 to-blue-500 shadow-md" : "hover:bg-white/10"
              }`}
            >
              For Schools
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20">
            <AnimatePresence mode="wait">
              {activeTab === "teacher" ? (
                <motion.div
                  key="teacher-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">Teacher Registration</h3>
                  <TeacherRegistrationForm />
                </motion.div>
              ) : (
                <motion.div
                  key="school-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">School Registration</h3>
                  <SchoolRegistrationForm />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
