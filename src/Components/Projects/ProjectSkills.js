import React from 'react'
import { SKILL_LIST_LOGOS } from '../../utils/constants';

const ProjectSkills = ({ tools, projectLink }) => {

    if (!tools)
        return null;
    return (
        <div className='flex flex-wrap justify-center'>
            {SKILL_LIST_LOGOS.map(skill =>
                tools.includes(skill.name) &&

                <div key={skill.name} className='mt-5 mx-5 flex flex-col items-center'>
                    <h1 className='text-sm pb-5'>{skill.name}</h1>
                    <img className='w-10' alt={skill.name} src={skill.url} />
                </div>
            )}
            <a href={projectLink}><div className='bg-zinc-300 hover:cursor-pointer h-10 w-28 rounded-xl mt-14 p-2 px-7 text-red-400'>🔗 Link</div></a>
        </div>
    )
}

export default ProjectSkills