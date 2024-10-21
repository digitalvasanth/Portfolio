import React, { useState } from 'react'
import { LEFT_RIGHT_ARROW } from '../../utils/constants';
const ProjectImageCurosel = ({ projectUrl }) => {

    const url = projectUrl;
    const [num, setNum] = useState(0);

    const handleLeft = () => {
        if (num > 0)
            setNum(num - 1)
        else
            setNum(4)
    }
    const handleRight = () => {
        if (num < 4)
            setNum(num + 1)
        else
            setNum(0)
    }

    return (
        <div className='relative mt-10'>
            {
                url.map(item => num === item.id ?
                    <div className=' mb-20 bg-gray-700 h-32 lg:h-80'>
                        <img alt='img' className='absolute ' src={item.url} />
                        <div className='flex justify-between lg:h-72 '>
                            <button onClick={handleLeft}><img alt='left' className=' z-0 mt-3 absolute animate-pulse rounded-full lg:h-14 h-10 hover:cursor-pointer' src={LEFT_RIGHT_ARROW} /></button>
                            <button onClick={handleRight}><img alt='right' className='z-10 mt-14 lg:mt-20 animate-pulse rounded-full lg:h-14 h-10 hover:cursor-pointer rotate-180' src={LEFT_RIGHT_ARROW} /></button>
                        </div>
                    </div>
                    : "")
            }
        </div>
    )
}

export default ProjectImageCurosel