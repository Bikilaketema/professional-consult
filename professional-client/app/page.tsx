import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
import RegistrationSection from "@/components/registration-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-100 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-8 text-center md:text-left">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 leading-tight">
                  Professional{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                    Consultancy
                  </span>{" "}
                  & Training Services
                </h1>
                <p className="mt-6 text-xl text-gray-700 leading-relaxed">
                  Empowering educators and institutions to achieve excellence through professional development and
                  consultancy.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-6 rounded-xl text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300">
                  <Link href="#register">Register Now</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-50 px-8 py-6 rounded-xl text-lg font-medium"
                >
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-6 pt-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className="text-gray-700">drgutuprofessional@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className="text-gray-700">0912 005948</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-lg opacity-20 transform rotate-3"></div>
              <div className="relative bg-white p-6 rounded-3xl shadow-lg border border-gray-100 transform -rotate-3 transition-transform hover:rotate-0 duration-300">
                <Image
                  src="/logo.png"
                  alt="Professional Consultancy & Training Services Logo"
                  width={500}
                  height={250}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-lg shadow-md transform rotate-3">
                  <p className="text-sm font-medium">Center of Competency!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-indigo-100/50 bg-[size:20px_20px] opacity-20"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">About Us</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              We are dedicated to providing high-quality consultancy and training services to educational institutions
              and professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Vision</h3>
              <p className="text-gray-600">To envisage competent and entrepreneur generation.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Mission</h3>
              <p className="text-gray-600">
                To provide consultancy and training services in all areas to have competent and entrepreneur generation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Simplicity
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Innovation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Responsiveness
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Authentic
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">Our Goals</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              We aim to establish centers of excellence in the following areas:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-800 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Teachers Job Opportunities</h3>
              <p className="text-gray-600">
                Creating job opportunities for qualified teachers across all educational levels.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-800 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Interview & Exam Training</h3>
              <p className="text-gray-600">Preparing teachers for job interviews and professional examinations.</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-800 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Professional Development</h3>
              <p className="text-gray-600">Enhancing teachers' professional competency through specialized training.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-800 font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Language Skills Training</h3>
              <p className="text-gray-600">
                Offering training in multiple languages including English, Arabic, French, and Chinese.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-800 font-bold text-xl">
                5
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Leadership Development</h3>
              <p className="text-gray-600">Educational, personal, team, and organizational leadership training.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-800 font-bold text-xl">
                6
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Expert Leadership Skills</h3>
              <p className="text-gray-600">
                Basic and advanced leadership skills training for educational professionals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-800 font-bold text-xl">
                7
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Customer Service Training</h3>
              <p className="text-gray-600">Reception and customer service training for educational institutions.</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-800 font-bold text-xl">
                8
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Life Skills Training</h3>
              <p className="text-gray-600">Developing essential life skills for personal and professional growth.</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-800 font-bold text-xl">
                9
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">School Operations</h3>
              <p className="text-gray-600">Comprehensive training and evaluation of overall school operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-50 rounded-full opacity-70"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-50 rounded-full opacity-70"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">Our Services</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              We offer a wide range of professional services designed to enhance educational excellence and career
              development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="absolute inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-900">Training Courses</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      <span className="text-gray-700">Pedagogical</span>
                    </div>
                    <div className="flex items-center p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      <span className="text-gray-700">Psychological</span>
                    </div>
                    <div className="flex items-center p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      <span className="text-gray-700">Language</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      <span className="text-gray-700">Leadership</span>
                    </div>
                    <div className="flex items-center p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      <span className="text-gray-700">School operations</span>
                    </div>
                    <div className="flex items-center p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      <span className="text-gray-700">Research</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center">
                    View All Courses
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-900">Job Opportunities</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">For Preschool Teachers</h4>
                    </div>
                    <p className="mt-2 text-gray-600 text-sm pl-11">
                      Opportunities for early childhood educators in leading preschools.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">For Grade 1-8 Teachers</h4>
                    </div>
                    <p className="mt-2 text-gray-600 text-sm pl-11">Elementary and middle school teaching positions.</p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">For Grade 9-12 Teachers</h4>
                    </div>
                    <p className="mt-2 text-gray-600 text-sm pl-11">
                      High school teaching opportunities across various subjects.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center">
                    View All Opportunities
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-6 rounded-xl text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300">
              <Link href="#register">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <RegistrationSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-50 rounded-full opacity-70"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-50 rounded-full opacity-70"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">Contact Us</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Have questions or need more information? Reach out to us using the contact details below or fill out the
              form.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-indigo-900 mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-900 text-lg">Email</h4>
                      <p className="text-gray-700 mt-1">drgutuprofessional@gmail.com</p>
                      <a
                        href="mailto:drgutuprofessional@gmail.com"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium mt-1 inline-flex items-center"
                      >
                        Send an email
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-900 text-lg">Phone</h4>
                      <p className="text-gray-700 mt-1">0912 005948</p>
                      <a
                        href="tel:0912005948"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium mt-1 inline-flex items-center"
                      >
                        Call us
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-indigo-100">
                  <h4 className="font-semibold text-indigo-900 text-lg mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-25"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold text-indigo-900 mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
