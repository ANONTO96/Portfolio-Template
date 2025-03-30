import React from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Degree Name",
      institution: "Institution Name",
      year: "Year",
      description: "Brief description about the degree or coursework.",
    },
    {
      degree: "Degree Name",
      institution: "Institution Name",
      year: "Year",
      description: "Brief description about the degree or coursework.",
    },
    {
      degree: "Degree Name",
      institution: "Institution Name",
      year: "Year",
      description: "Brief description about the degree or coursework.",
    },
  ];

  return (
    <section id="education" className="pt-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200">Education</h2>
          <div className="mt-2 h-1 w-20 bg-purple-700 dark:bg-purple-400 mx-auto"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-4 border-purple-600 dark:border-purple-400 ml-6">
          {education.map((edu, index) => (
            <div key={index} className="mb-10 ml-6">
              {/* Icon */}
              <div className="absolute -left-6 w-12 h-12 bg-purple-100 dark:bg-purple-400 rounded-full flex items-center justify-center">
                <GraduationCap size={24} className="text-purple-700 dark:text-purple-800" />
              </div>

              {/* Education Details */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">{edu.degree}</h3>
                <p className="text-purple-700 dark:text-purple-400 font-medium">{edu.institution}</p>
                <p className="text-gray-500 dark:text-gray-400 mt-1">{edu.year}</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
