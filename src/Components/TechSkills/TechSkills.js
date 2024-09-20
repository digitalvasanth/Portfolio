import React from 'react'
import SkillCard from './SkillCard'
import { SKILL_LIST_LOGOS, STUDY_MAN_LOGO } from '../../utils/constants';

const TechSkills = () => {

    return (
        <div id="sectionTech" className='pt-10 bg-slate-100'>
            <h1 className='text-center text-5xl lg:text-7xl font-extralight'>My Tech Stack</h1>
            <div className='w-screen flex  lg:px-40 lg:mt-24 lg:pb-14'>
                <div className='hidden lg:bg--400  lg:block lg:w-4/12'>
                    <img alt='dev'
                        className=''
                        src={STUDY_MAN_LOGO} />
                </div>
                <div className='mt-14 lg:mt-0 flex flex-wrap justify-center  lg:w-8/12'>
                    {SKILL_LIST_LOGOS.map(skill => <SkillCard key={skill.id} name={skill.name} path={skill.url} />)}
                </div>
            </div>

        </div>
    )
}

export default TechSkills