import React from 'react'
import ProjectSkills from "../Projects/ProjectSkills";
import ProjectImageCurosel from './ProjectImageCurosel';
import { useSelector } from 'react-redux';

const ReduxProject = ({ project }) => {
    const mode = useSelector(store => store.mode.isModeDark);
    let projectsBg = "bg-slate-100";
    mode ? projectsBg = "bg-slate-800" : projectsBg = "bg-gray-100";

    let projectCardBg = "";
    let textDesc = "";
    mode ? textDesc = "text-slate-400 " : textDesc = "text-slate-700 ";
    mode ? projectCardBg = "bg-slate-700 text-white " : projectCardBg = "";

    let text = "";
    mode ? text = "text-lime-300 " : text = "text-red-700 ";

    if (!project)
        return null;
    const { name, url, description, toolDescription, skillsUsed, projectLink } = project;

    return (
        <>
            <div className={projectsBg + ' w-screen pb-10'}>
                <div className='lg:flex'>
                    <div className='m-7 mb-0 lg:w-6/12 lg:order-2'>
                        <h1 className={text + 'text-xl font-extralight my-3 lg:text-4xl lg:hidden'}>{name}<hr className='w-32'></hr></h1>
                        <ProjectImageCurosel projectUrl={url} />
                    </div>
                    <div className={projectCardBg + 'm-5 p-3 lg:m-10  lg:w-6/12 lg:order-1 shadow-xl lg:p-10 rounded-3xl'}>
                        <h1 className={text + 'text-xl hidden my-4 lg:block font-extralight lg:text-4xl '} > {name} < hr ></hr></h1>

                        <p className='pb-3 text- font-normal'>{description}</p>
                        <p className={'text-xs lg:text-sm ' + textDesc}>
                            "{toolDescription}"
                        </p>
                        <div className='-mx-10 lg:flex lg:justify-center'>
                            <ProjectSkills tools={skillsUsed} projectLink={projectLink} />

                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default ReduxProject