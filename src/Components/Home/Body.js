import React from 'react'
import Intro from './Intro';
import { BG_IMG } from '../../utils/constants';
import { PROFILE_PIC } from '../../utils/constants';
import { useSelector } from 'react-redux';
const Body = () => {
    const mode = useSelector(store => store.mode.isModeDark)
    let opacity = "opacity-95";
    let bodyBg = "";

    mode ? bodyBg = " bg-gray-800 " : bodyBg = "";
    mode ? opacity = "opacity-55" : opacity = "opacity-95";
    return (
        <div id="sectionHome">
            <div className='lg:h-[103vh] lg:bg-gray-800'>
                <div className={bodyBg + 'h-1/2 lg:flex justify-center lg:h-screen'}>
                    <img alt='bg' className={'hidden h-screen w-screen lg:block absolute ' + opacity} src={BG_IMG} />
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
