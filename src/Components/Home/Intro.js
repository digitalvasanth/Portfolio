import React from 'react'
import { RESUME_CDN, SOCIAL_MEDIA_LOGOS } from '../../utils/constants';
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';

const Intro = () => {
    const mode = useSelector(store => store.mode.isModeDark);
    let cardBg = "";
    let text = "";
    mode ? cardBg = "bg-gray-900 " : cardBg = " lg:bg-gradient-to-r from-white ";
    mode ? text = "text-white " : text = "";

    return (
        <div className={cardBg + 'lg:absolute lg:mt-16 lg:rounded-2xl  lg:w-4/12 lg:mx-20 p-4 lg:p-9'
        }>
            <h1 className={text + 'mt-28 my-4  lg:my-4 text-7xl lg:text-7xl font-extralight'}><span className='text-red-600'>Hi,</span> I'm Rakesh</h1>
            <p className={text + 'text-3xl mt-7 mb-5 lg:text-3xl lg:my-5'}>A Full Stack developer</p>
            <span className={text + 'text-base lg:text-base'}>I enjoy solving complex problems. Frequently praised as detail-oriented by my peers, I can be relied upon to help your company achieve its goals by providing sustainable and scalable solutions.</span>
            <div className='flex my-3 '>
                {SOCIAL_MEDIA_LOGOS.map(logo => <a key={logo.id} href={logo.refer}><img className='w-12 h-12 lg:w-14 lg:h-14 lg:mb-10 mx-5 hover:cursor-pointer  hover:animate-bounce' alt={logo.logoName} src={logo.url} /></a>)}
            </div>
            <div className='flex text-base mb-12'>
                <a href={RESUME_CDN}><button className='bg-red-600 font-medium rounded-md text-white p-1 lg:p-2 lg:h-12 lg:w-40 h-10 w-full px-7 mr-3 hover:animate-pulse '> RESUME  </button></a>
                <Link spy={true}
                    smooth={true}
                    duration={500} to="sectionContact"><button className={'border border-red-600  text-red-600 p-1 lg:p-2 lg:h-12 lg:w-40 h-10 w-full px-7 ml-3 hover:animate-pulse ' + text}>GET IN TOUCH</button></Link>
            </div>
        </div >
    )
}

export default Intro

