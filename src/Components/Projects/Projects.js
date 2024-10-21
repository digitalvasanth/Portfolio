import React from 'react'
import ReduxProject from './ReduxProject'
import { useSelector } from 'react-redux'

const Projects = () => {

    const project = useSelector(store => store);
    let projects = project.project.projectDetails;
    let mode = project.mode.isModeDark;
    let projectsBg = ""
    let text = ""
    mode ? projectsBg = "bg-gray-800 " : projectsBg = "bg-slate-100";
    mode ? text = "text-white " : text = "";

    if (!projects)
        return null;

    return (
        <div id="sectionProjects" className={projectsBg}>
            <hr></hr>
            <h1 className={text + 'text-center text-5xl lg:text-7xl font-extralight mt-16 lg:mb-10'}>PROJECTS<hr className='m-auto w-0 lg:w-2/6'></hr></h1>
            {projects.map(project => <ReduxProject key={project.id} project={project} />)}
        </div>
    )
}

export default Projects