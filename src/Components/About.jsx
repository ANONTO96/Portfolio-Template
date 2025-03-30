import React from "react";
import { Code2, Coffee, Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="pt-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200">
            About Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-purple-700 dark:bg-purple-400 mx-auto"></div>
        </div>

        <div className="mx-auto">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            DESCRIPTION ABOUT YOURSELF
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto voluptates pariatur atque repudiandae! Repellat quo sed alias sequi commodi perspiciatis minus quos delectus exercitationem, quas dolorum minima, quaerat adipisci vero.
          </p>
        </div>
        <hr  className="my-6"/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2">
          {/* Card 1 */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 dark:hover:bg-base-100 shadow-xl hover:shadow-2xl rounded-xl text-center transition">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 size={32} className="text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl text-purple-600 dark:text-purple-300 font-semibold mb-2">
              Clean Code
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Writing clean, maintainable, and efficient code is my passion
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 dark:hover:bg-base-100 shadow-xl hover:shadow-2xl rounded-xl text-center transition">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee size={32} className="text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl text-purple-600 dark:text-purple-300 font-semibold mb-2">
              Problem Solver
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Love tackling complex problems and finding elegant solutions
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 dark:hover:bg-base-100 shadow-xl hover:shadow-2xl rounded-xl text-center transition">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette size={32} className="text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl text-purple-600 dark:text-purple-300 font-semibold mb-2">
              Creative Mind
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Bringing creativity and innovation to every project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
