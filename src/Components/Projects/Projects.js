import React from 'react'
import ReduxProject from './ReduxProject'
import { useSelector } from 'react-redux'

const Projects = () => {

    const projects = useSelector(store => store.project.projectDetails);
    if (!projects)
        return null;

    return (
        <div id="sectionProjects" className='bg-slate-100'>
            <hr></hr>
            <h1 className='text-center text-5xl lg:text-7xl font-extralight'>PROJECTS</h1>
            {projects.map(project => <ReduxProject key={project.id} project={project} />)}
        </div>
    )
}

export default Projects