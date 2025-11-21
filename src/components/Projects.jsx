import React from 'react'
import ProjectData from './ProjectData'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <div className="text-center">
      {ProjectData.map((project) => (
        <ProjectsCard
          key={project.id}
          title={project.title}
          description={project.description}
          link={project.link}
          code={project.code}
        />
      ))}
    </div>
  )
}

export default Projects
