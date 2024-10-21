import React from 'react'
import SkillCard from './SkillCard'
import { SKILL_LIST_LOGOS, STUDY_MAN_LOGO } from '../../utils/constants';
import { useSelector } from 'react-redux';

const TechSkills = () => {
    const mode = useSelector(store => store.mode.isModeDark);

    let techBg = "bg-slate-100";
    mode ? techBg = "bg-gray-800 text-white" : techBg = "bg-slate-100 ";

    return (
        <div id="sectionTech" className={'pt-10 lg:-mt-6 ' + techBg}>
            <h1 className='text-center text-5xl lg:text-7xl font-extralight'>My Tech Stack<hr className='w-0 lg:w-2/6 m-auto'></hr></h1>
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