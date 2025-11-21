import React, { Component } from 'react'
import axios from 'axios'
import ProjectsCard from './ProjectsCard'

const url = import.meta.env.VITE_MONGODB_REALM_API

class FetchProjects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: [],
    }
  }

  componentDidMount() {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data)
        this.setState({ projects: response.data })
      })
      .catch((error) => console.log(error))
  }

  render() {
    const { projects } = this.state
    return (
      <>
        <div className="text-center">
          {projects.length > 0
            ? projects.map((project) => (
                <ProjectsCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  code={project.code}
                />
              ))
            : null}
        </div>
      </>
    )
  }
}

export default FetchProjects
