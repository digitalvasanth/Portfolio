import React from 'react'
import Intro from './Intro';
import Header from './Header';
import { BG_IMG } from '../../utils/constants';
import { PROFILE_PIC } from '../../utils/constants';
const Body = () => {
    return (
        <div id="sectionHome">
            <div className='hidden lg:block'><Header /></div>
            <div className='lg:h-[103vh] lg:bg-black lg:-z-50 relative'>
                <div className='block lg:hidden'><Header /></div>
                <div className='h-1/2 lg:flex justify-center lg:h-screen'>
                    <img alt='bg' className='hidden lg:block  opacity-95 absolute -z-10' src={BG_IMG} />
                    <div className='lg:w-6/12 flex items-center '>
                        <Intro />
                    </div>

                    <div className='lg:w-6/12  flex lg:flex-col items-end justify-center lg:mr-14'>
                        <div className='h-96 w-72  flex items-end  '>
                            <img alt='profile'
                                className='bottom-0 h-5/6 object-cover mx-auto '
                                src={PROFILE_PIC} />
                            <div className='bg-gradient-to-b from-red-600 opacity-75 w-72 h-80 rounded-t-full  object-fill mx-auto -my-20 absolute -z-10'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Body
