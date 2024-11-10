import React from 'react';
import { Building2, MapPin, Clock, Briefcase } from 'lucide-react';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  stipend: string;
  deadline: string;
  logo: string;
}

export default function JobCard({
  title,
  company,
  location,
  type,
  duration,
  stipend,
  deadline,
  logo,
}: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <img
          src={logo}
          alt={company}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center mt-2 text-gray-600">
            <Building2 className="w-4 h-4 mr-2" />
            <span>{company}</span>
          </div>
          <div className="flex items-center mt-2 text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center text-gray-600">
              <Briefcase className="w-4 h-4 mr-2" />
              <span>{type}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span>{duration}</span>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-green-600 font-semibold">₹{stipend}/month</span>
            <div className="text-sm text-gray-500">
              Apply by: {deadline}
            </div>
          </div>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}