import React from 'react'
import { SKILL_LIST_LOGOS } from '../../utils/constants';

const ProjectSkills = ({ tools }) => {
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
        </div>
    )
}

export default ProjectSkills