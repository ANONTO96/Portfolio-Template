import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Project1 from '../assets/matilda-alloway-21mUU21Z20Q-unsplash.jpg'
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Title",
      image: Project1,
      description: "Bistro Boss is a comprehensive restaurant management website built using the MERN stack (MongoDB, Express.js, React with Node.js...",
      fullDescription: "Bistro Boss is a comprehensive restaurant management website built using the MERN stack (MongoDB, Express.js, React with Node.js, and Vite). This application aims to streamline restaurant operations, providing an intuitive interface for managing reservations, orders, menus, and staff.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Redux", "Socket.io"],
      liveLink: "",
      githubLink: "",
      challenges: "The platform offers secure user authentication using JWT, along with reservation, order, and menu management for seamless restaurant operations. Staff roles, schedules, and performance metrics are easily managed through a dynamic dashboard, enhancing the overall user experience.",
      feature: "Ensuring secure authentication and smooth data management across reservations, orders, and staff schedules while providing real-time updates. Additionally, handling large amounts of data efficiently and maintaining performance while managing multiple user roles and dynamic content."
    },
    {
      title: "Title",
      image: Project1,
      description: "Pair Promise is a platform designed to connect individuals with shared interests and goals, helping them build meaningful...",
      fullDescription: "Pair Promise is a platform designed to connect individuals with shared interests and goals, helping them build meaningful connections and achieve mutual success.",
      tech: ["React", "Axios", "MongoDB", "Recharts", "JWT", "React Helmet", "SweetAlert2", "Swiper"],
      liveLink: "",
      githubLink: "",
      challenges: "Managing seamless integration between multiple libraries, handling sensitive data securely (e.g., API keys), and ensuring smooth user experience across devices and offline states while maintaining performance.",
      feature: "The app leverages a range of libraries and tools, including Axios for API requests, Firebase for backend services, and Localforage for offline storage. React and related libraries enable dynamic UIs, navigation, and real-time feedback through features like toasts, charts, and customizable alerts."
    },
    {
      title: "Title",
      image: Project1,
      description: "Assign Hub is a modern web application designed to help users manage assignments and tasks efficiently...",
      fullDescription: "Assign Hub is a modern web application designed to help users manage assignments and tasks efficiently. Built with React and Vite, the website offers a high-performance environment for developing React-based applications. It features fast development builds, live previews, and a user-friendly interface.",
      tech: ["React", "Vite", "Localstorage", "React Router", "Firebase", "Dark-mode"],
      liveLink: "",
      githubLink: "",
      challenges: "Managing data synchronization between online and offline states, ensuring smooth performance with multiple features, and handling secure user authentication and session management effectively.",
      feature: "The application offers streamlined assignment management, real-time toast notifications, fast development with Vite, offline storage, seamless routing with React Router, and secure authentication using Firebase."
    },
    {
      title: "Title",
      image: Project1,
      description: "The Unity Pledge project is designed to bring individuals and communities together by fostering collaboration...",
      fullDescription: "The Unity Pledge project is designed to bring individuals and communities together by fostering collaboration, mutual understanding, and collective growth. Users can take pledges, engage in community-driven initiatives, and track their contributions to building a more unified society.",
      tech: ["React", "Firebase", "TailwindCss", "Animate.css", "React-hot-toast", "Dark-Mode"],
      liveLink: "",
      githubLink: "",
      challenges: "Managing user progress and pledge data, ensuring smooth user experience across devices, and securely handling user authentication and data synchronization across different platforms.",
      feature: "The app allows users to create personalized pledges, track progress, and receive instant feedback with toast notifications. It’s built with a fully responsive design using TailwindCSS, Firebase for secure authentication, and additional libraries for routing and animations."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition">Projects</h2>
          <div className="mt-2 h-1 w-20 bg-purple-700 mx-auto"></div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 mx-2 sm:mx-8 lg:w-[90%] 2xl:w-full lg:mx-auto 2xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 dark:hover:bg-base-100 dark:text-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition h-full flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />

              {/* Details */}
              <div className="px-6 pb-6 flex flex-col flex-grow">
                <h3 className="text-xl text-gray-700 dark:text-white font-semibold my-2 transition">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description} 
                  <span className="text-blue-500 cursor-pointer" onClick={() => setSelectedProject(project)}> More</span>
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 hover:bg-indigo-200 dark:bg-indigo-200 dark:hover:bg-indigo-100 dark:text-indigo-700 transition rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-600 
                  hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 transition">
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-900 transition rounded-3xl shadow-lg p-6 max-w-lg w-full top-7 relative">
            <button 
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 text-xl"
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </button>
            <h3 className="text-2xl text-center text-gray-700 dark:text-gray-200 transition font-bold mb-4">{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-52 object-cover rounded-lg mb-4" />
            <p className="text-gray-700 dark:text-gray-400 transition mb-4">{selectedProject.fullDescription}</p>
            <p className="text-gray-800 dark:text-gray-200 font-semibold">Features:</p>
            <p className="text-gray-700 dark:text-gray-400 transition mb-4">{selectedProject.feature}</p>
            <p className="text-gray-800 dark:text-gray-200 transition font-semibold">Challenges:</p>
            <p className="text-gray-700 dark:text-gray-400 transition mb-4">{selectedProject.challenges}</p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-indigo-100 hover:bg-indigo-200 text-indigo-600 dark:bg-indigo-200 dark:text-indigo-700 dark:hover:bg-indigo-100 rounded-full text-sm transition">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-end gap-4">
              <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition">
                <ExternalLink size={16} /> Live Demo
              </a>
              <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 transition">
                <Github size={16} /> Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
