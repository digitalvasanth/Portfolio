import React from 'react'

const SkillCard = ({ name, path }) => {

    return (
        <div className='w-2/12  lg:w-[17%] text-center lg:flex lg:flex-col lg:items-center lg:mx-auto m-5'>
            <div><h1 className='mb-3 px-4'>{name}</h1></div>
            <img className='lg:w-24 ' alt={name} src={path} />
        </div>
    )
}

export default SkillCard