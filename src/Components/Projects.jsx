import React, { useState } from 'react';
import Footerb from './Footerb';
import { project } from './data/ProjectData';

const Projects = () => {
  const [modal, setModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleModal = (project) => {
    setActiveProject(project);
    setModal(!modal);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter projects based on the search term
  const filteredProjects = project.filter((proj) =>
    proj.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    proj["Project Name"].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full w-full mt-10">
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl font-vsoc text-red-400 pb-20'>Projects</h1>
      </div>
      <div>
        <p className='mb-2 font-semibold pl-4'>Search for projects</p>
        <input
          className='w-full h-8 border-2 rounded-xl'
          type="text"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-10 text-center py-8 px-12 sm:px-0 mt-5 m-2'>
        {filteredProjects.map((project, index) => (
          <div key={index} className="shadow-md bg-red-200 w-56 rounded-md duration-200 hover:scale-105 mb-20">
            <div className="flex justify-center items-center p-4">
              <div>
                <h1 className="font-bold text-center">{project.Name}</h1>
                <p className="font-bold text-center pt-5">{project["Project Name"]}</p>
              </div>
            </div>

            <div className="flex justify-center flex-col items-center">
              <button
                onClick={() => toggleModal(project)}
                className="bg-black text-white p-2 rounded-lg mt-5 duration-200 hover:scale-105"
              >
                About Project
              </button>

              <div className="flex justify-center items-center w-full">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a target="_blank" href={project["Github Repository"]} rel="noopener noreferrer">
                    <img className="h-8 ml-5" src="/github-sign.png" alt="GitHub" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}

        {modal && activeProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-100">
            <div className="bg-teal-50 p-8 rounded-lg max-w-lg mx-auto overflow-y-auto max-h-full shadow-lg">
              <div className="flex justify-end">
                <button onClick={() => toggleModal(null)} className="bg-red-200 p-2 rounded-lg">
                  Close
                </button>
              </div>
              <p>{activeProject["A short abstract under 100 words about your project."]}</p>
            </div>
          </div>
        )}
      </div>
      <Footerb />
    </div>
  );
};

export default Projects;
