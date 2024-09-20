import React from 'react'
import { SOCIAL_MEDIA_LOGOS } from '../../utils/constants';

const Intro = () => {
    const seeMyWorkBtn = "< > SEE MY WORK";
    return (
        <div className='lg:absolute bg-gradient-to-r from-white rounded-2xl w-full lg:w-4/12   lg:mx-20 p-9'>
            <h1 className='mt-16 my-4  lg:my-4 text-5xl lg:text-7xl font-extralight'><span className='text-red-600'>Hi,</span> I'm Rakesh</h1>
            <p className='text-xl my-2 lg:text-3xl lg:my-5'>A fullstack developer</p>
            <span className='text-sm lg:text-base'>I enjoy solving complex problems. Frequently praised as detail-oriented by my peers, I can be relied upon to help your company achieve its goals by providing sustainable and scalable solutions.</span>
            <div className='flex my-5'>
                {SOCIAL_MEDIA_LOGOS.map(logo => <img key={logo.id} className='w-7 h-7 lg:w-10 lg:h-10 mx-5' alt={logo.logoName} src={logo.url} />)}
            </div>
            <div className='flex text-sm'>
                <button className='bg-red-600 font-medium rounded-md text-white p-1 lg:p-2 mr-4 '>GET IN TOUCH</button>
                <button className='border border-red-600 text-red-600 p-1 lg:p-2 '>{seeMyWorkBtn}</button>
            </div>
        </div>
    )
}

export default Intro