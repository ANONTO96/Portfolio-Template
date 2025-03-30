import React from "react";
import {
  Code2,
  Brain,
  Terminal,
  Puzzle,
  Users,
  Clock,
  Bug as Bulb,
  Target,
} from "lucide-react";

const Skills = () => {
  const skills = {
    technical: [
      {
        icon: <Code2 size={24} className="text-purple-700 dark:text-purple-400" />,
        name: "Title",
        skills: ["", "", "", ""],
      },
      {
        icon: <Terminal size={24} className="text-purple-700 dark:text-purple-400" />,
        name: "Title",
        skills: ["", "", "", ""],
      },
      {
        icon: <Brain size={24} className="text-purple-700 dark:text-purple-400" />,
        name: "Title",
        skills: ["", "", "", ""],
      },
      {
        icon: <Puzzle size={24} className="text-purple-700 dark:text-purple-400" />,
        name: "Title",
        skills: ["", "", "", ""],
      },
    ],
    soft: [
      {
        icon: <Users size={24} className="text-purple-700 dark:text-purple-400" />,
        name: "Skill 1",
        description: "Description",
      },
      {
        icon: <Clock size={24} className="text-purple-700 dark:text-purple-400" />,
        name: "Skill 2",
        description: "Description",
      },
      {
        icon: <Bulb size={24} className="text-purple-700 dark:text-purple-400" />,
        name: "Skill 3",
        description: "Description",
      },
      {
        icon: <Target size={24} className="text-purple-700 dark:text-purple-400" />,
        name: "Skill 4",
        description: "Description",
      },
    ],
  };

  return (
    <section id="skills" className="pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200">Skills</h2>
          <div className="mt-2 h-1 w-20 bg-purple-700 dark:bg-purple-400 mx-auto"></div>
        </div>

        <div className="space-y-10">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-6 text-center">
              " Technical Skills "
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.technical.map((category, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 dark:hover:bg-base-100 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200">{category.name}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-700 dark:bg-purple-400 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-6 text-center">
              " Soft Skills "
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.soft.map((skill, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 dark:hover:bg-base-100 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    {skill.icon}
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200">{skill.name}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
