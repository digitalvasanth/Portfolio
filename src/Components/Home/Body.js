import React from 'react'
import Intro from './Intro';
import { BG_IMG } from '../../utils/constants';
import { PROFILE_PIC } from '../../utils/constants';
const Body = () => {
    return (
        <div id="sectionHome">
            <div className='lg:h-[103vh] lg:bg-black '>
                <div className='h-1/2 lg:flex justify-center lg:h-screen'>
                    <img alt='bg' className='hidden lg:block  opacity-95 absolute ' src={BG_IMG} />
                    <div className='lg:w-6/12 flex items-center'>
                        <Intro />
                    </div>

                    <div className='lg:w-7/12 flex items-center  lg:pl-72'>
                        <img alt='profile'
                            className=' object-cover relative mt-14'
                            src={PROFILE_PIC} />
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Body
