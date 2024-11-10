import React from 'react';
import Navbar from './components/Navbar';
import SearchFilters from './components/SearchFilters';
import JobCard from './components/JobCard';
import { Rocket, TrendingUp, Users } from 'lucide-react';

function App() {
  const featuredJobs = [
    {
      title: "Software Development Intern",
      company: "TechCorp",
      location: "Remote",
      type: "Internship",
      duration: "6 months",
      stipend: "25000",
      deadline: "March 30, 2024",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop"
    },
    {
      title: "Marketing Associate",
      company: "GrowthLabs",
      location: "Mumbai",
      type: "Full-time",
      duration: "Permanent",
      stipend: "35000",
      deadline: "April 15, 2024",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop"
    },
    {
      title: "Data Science Intern",
      company: "AnalyticsPro",
      location: "Bangalore",
      type: "Internship",
      duration: "3 months",
      stipend: "20000",
      deadline: "April 5, 2024",
      logo: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Launch Your Career with CareerBoard
          </h1>
          <p className="text-xl text-center mb-8 text-blue-100">
            Connect with the best opportunities for students and recent graduates
          </p>
          <div className="max-w-3xl mx-auto">
            <SearchFilters />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Rocket className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">1000+</h3>
            <p className="text-gray-600">Active Opportunities</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">50,000+</h3>
            <p className="text-gray-600">Registered Students</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">5000+</h3>
            <p className="text-gray-600">Successful Placements</p>
          </div>
        </div>
      </div>

      {/* Featured Opportunities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CareerBoard</h3>
              <p className="text-gray-400">Connecting students with opportunities</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Students</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Browse Opportunities</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Career Resources</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Resume Builder</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Post a Job</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Browse Candidates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">support@careerboard.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CareerBoard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;