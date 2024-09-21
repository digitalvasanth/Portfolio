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
        <div className='flex'>
            {
                num === 0 ?
                    <div>
                        <img src={url[0].url} />
                        <div className='flex justify-between'>
                            <button onClick={handleLeft}><img alt='left' className='-mt-24 lg:-mt-40 h-14 hover:cursor-pointer' src={LEFT_RIGHT_ARROW} /></button>
                            <button onClick={handleRight}><img alt='right' className='-mt-24 lg:-mt-40 h-14 hover:cursor-pointer rotate-180' src={LEFT_RIGHT_ARROW} /></button>
                        </div>
                    </div>
                    : ""
            }
            {
                num === 1 ?
                    <div>
                        <img src={url[1].url} />
                        <div className='flex justify-between'>
                            <button onClick={handleLeft}><img alt='left' className='-mt-24 lg:-mt-40 h-14 hover:cursor-pointer' src={LEFT_RIGHT_ARROW} /></button>
                            <button onClick={handleRight}><img alt='right' className='-mt-24 lg:-mt-40 h-14 hover:cursor-pointer rotate-180' src={LEFT_RIGHT_ARROW} /></button>
                        </div>
                    </div>
                    : ""
            }
            {
                num === 2 ?
                    <div>
                        <img src={url[2].url} />
                        <div className='flex justify-between'>
                            <button onClick={handleLeft}><img alt='left' className='-mt-24 lg:-mt-40 h-14 hover:cursor-pointer' src={LEFT_RIGHT_ARROW} /></button>
                            <button onClick={handleRight}><img alt='right' className='-mt-24 lg:-mt-40 h-14 hover:cursor-pointer rotate-180' src={LEFT_RIGHT_ARROW} /></button>
                        </div>
                    </div>
                    : ""
            }
            {
                num === 3 ?
                    <div>
                        <img src={url[3].url} />
                        <div className='flex justify-between'>
                            <button onClick={handleLeft}><img alt='left' className='-mt-24 lg:-mt-40 h-14 hover:cursor-pointer' src={LEFT_RIGHT_ARROW} /></button>
                            <button onClick={handleRight}><img alt='right' className='-mt-24 lg:-mt-40 h-14 hover:cursor-pointer rotate-180' src={LEFT_RIGHT_ARROW} /></button>
                        </div>
                    </div>
                    : ""
            }
            {
                num === 4 ?
                    <div>
                        <img src={url[4].url} />
                        <div className='flex justify-between'>
                            <button onClick={handleLeft}><img alt='left' className='-mt-24 lg:-mt-40 h-14 hover:cursor-pointer' src={LEFT_RIGHT_ARROW} /></button>
                            <button onClick={handleRight}><img alt='right' className='-mt-24 lg:-mt-40 h-14 hover:cursor-pointer rotate-180' src={LEFT_RIGHT_ARROW} /></button>
                        </div>
                    </div>
                    : ""
            }
        </div>
    )
}

export default ProjectImageCurosel
