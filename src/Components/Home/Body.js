import React from 'react'
import Intro from './Intro';
import { BG_IMG } from '../../utils/constants';
import { PROFILE_PIC } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll';
const Body = () => {
    const mode = useSelector(store => store.mode.isModeDark)
    let opacity = "opacity-95";
    let bodyBg = "";
    let navIcon = ""


    mode ? bodyBg = " bg-gray-800 " : bodyBg = "";
    mode ? opacity = "opacity-55" : opacity = "opacity-95";
    mode ? navIcon = " bg-white " : navIcon = " bg-black text-white ";
    return (
        <div id="sectionHome">
            <div className='lg:h-[103vh] lg:bg-gray-800 w-[102.5vw] lg:w-full'>
                <div className={bodyBg + 'h-1/2 lg:flex justify-center lg:h-screen'}>
                    <img alt='bg' className={'hidden h-screen w-screen lg:block absolute ' + opacity} src={BG_IMG} />
                    <div className='lg:w-6/12 flex items-center'>
                        <Intro />
                    </div>
                    <Link to="sectionTech"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        <div className='lg:hidden   flex justify-center text-center -mt-10'><div className='bg-white w-12 h-12 rounded-full font-bold text-4xl'>&#8964;</div></div></Link>
                    <div className='lg:w-7/12 flex items-center  lg:pl-72'>
                        <img alt='profile'
                            className=' object-cover relative mt-14'
                            src={PROFILE_PIC} />

                    </div>

                </div>
                <Link to="sectionTech"
                    spy={true}
                    smooth={true}
                    duration={500}>
                    <div className=' hidden  lg:flex lg:justify-center text-center -mt-12'><div className={'z-10 animate-bounce hover:bg-slate-400  w-14 h-14 rounded-full font-bold text-4xl' + navIcon}>&#8964;</div></div></Link>
            </div>

        </div>

    );

}

export default Body
