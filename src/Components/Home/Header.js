import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toogleMenu } from '../../utils/navSlice';
import { toogleMode } from '../../utils/darkModeSlice';
import { navLinks } from '../../utils/constants';
import { Link } from 'react-scroll';
import { DARK_MODE_ICON } from '../../utils/constants';
import { LIGHT_MODE_ICON } from '../../utils/constants';

const Header = () => {
    const name = "< Vasanth Kumar />"
    const dispatch = useDispatch();
    const { nav, mode } = useSelector(store => store);
    const toogle = nav.isMenuOpen;
    const darkMode = mode.isModeDark;
    const handleToogleMenu = () => {
        dispatch(toogleMenu());
    }

    const handleMode = () => {
        dispatch(toogleMode());
    }
    let nav_bg = "bg-white";
    let menu = "bg-black";
    darkMode ? nav_bg = "bg-gray-900 text-white" : nav_bg = "bg-white";
    darkMode ? menu = "bg-white" : menu = "bg-black";
    return (
        <nav className={"fixed left-0 z-50 top-0 w-full shadow-lg px-2 " + nav_bg} >
            <div className='container mx-auto py-5 flex items-center text-sm uppercase font-semibold justify-between'>
                <Link to={navLinks[0].navSection}
                    spy={true}
                    smooth={true}
                    duration={500}>
                    <div className='md:text-lg cursor-pointer'>{name}</div></Link>
                <ul className='hidden md:flex space-x-10'>

                    {navLinks.map(item =>
                        <Link key={item.id} to={item.navSection}
                            spy={true}
                            smooth={true}
                            duration={500}>
                            <li className='hover:text-gray-500 hover:cursor-pointer'>{item.navItem}</li></Link>
                    )}
                </ul>
                {darkMode ? <img onClick={handleMode} className='w-8 animate-bounce cursor-pointer ml-auto mr-8 lg:ml-0 lg:mr-0' alt='mode' src={LIGHT_MODE_ICON} /> :
                    <img onClick={handleMode} className='w-8 animate-bounce cursor-pointer ml-auto mr-8 lg:ml-0 lg:mr-0' alt='mode' src={DARK_MODE_ICON} />}
                <div onClick={handleToogleMenu} className='space-y-1 md:hidden cursor-pointer mr-3'>
                    <div className={'w-8 h-1 ' + menu}></div>
                    <div className={'w-8 h-1 ' + menu}></div>
                    <div className={'w-8 h-1 ' + menu}></div>
                </div>
            </div>
            {
                toogle && <div>
                    <hr></hr>
                    <div className={nav_bg + ' shadow-lg absolute left-0 w-5/6 ml-16 rounded-b-3xl space-y-5 p-7 text-center flex flex-col'}>
                        {navLinks.map(item =>
                            <Link key={item.id} to={item.navSection}
                                spy={true}
                                smooth={true}
                                duration={500}>
                                <button className='hover:text-gray-500 hover:cursor-pointer'>{item.navItem}<hr></hr></button></Link>
                        )}
                    </div></div>
            }
        </nav >
    );
}

export default Header

