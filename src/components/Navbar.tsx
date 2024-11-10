import React from 'react';
import { BookOpen, BriefcaseIcon, LogIn, Menu, UserPlus } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">CareerBoard</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="/internships" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Internships</a>
            <a href="/jobs" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Jobs</a>
            <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </a>
            <a href="/register" className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <UserPlus className="h-4 w-4 mr-2" />
              Register
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/internships" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Internships</a>
            <a href="/jobs" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Jobs</a>
            <a href="/login" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Login</a>
            <a href="/register" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Register</a>
          </div>
        </div>
      )}
    </nav>
  );
}