import React from 'react'
import SkillCard from './SkillCard'
import { SKILL_LIST_LOGOS } from '../utils/constants'

const TechSkills = () => {

    //const skillList = ["React", "Java Script", "My Sql", "Java", "Tailwind", "Bootstrap", "Redux Toolkit"]

    return (
        <div className='pt-10 bg-slate-100'>
            <h1 className='text-center text-5xl lg:text-7xl font-extralight'>My Tech Stack</h1>
            <div className='w-screen flex  lg:px-40 lg:mt-24 lg:pb-14'>
                <div className='hidden lg:bg--400  lg:block lg:w-4/12'>
                    <img alt='dev'
                        className=''
                        src='https://res.cloudinary.com/dc6fwvmjh/image/upload/v1725642145/mtsl4mfvynhx7hcavm4u.png' />
                </div>
                <div className='mt-14 lg:mt-0 flex flex-wrap justify-center  lg:w-8/12'>
                    {SKILL_LIST_LOGOS.map(skill => <SkillCard key={skill.id} name={skill.name} path={skill.url} />)}
                </div>
            </div>

        </div>
    )
}

export default TechSkills