import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toogleMenu } from '../../utils/navSlice';
import { navLinks, RESUME_CDN } from '../../utils/constants';
import { Link } from 'react-scroll';
const Header = () => {
    const name = "< Rakesh />"
    const dispatch = useDispatch();
    const toogle = useSelector(store => store.nav.isMenuOpen)
    const handleToogleMenu = () => {
        dispatch(toogleMenu());
    }
    return (
        <nav className='fixed z-10 top-0 w-full bg-white shadow-lg px-2'>
            <div className='container mx-auto py-5 flex items-center text-sm uppercase font-semibold justify-between'>
                <div className='md:text-lg cursor-pointer'>{name}</div>
                <ul className='hidden md:flex space-x-10'>
                    <a href={RESUME_CDN}><li className='hover:text-gray-500 hover:cursor-pointer'>Resume</li></a>

                    {navLinks.map(item =>
                        <Link key={item.id} to={item.navSection}
                            spy={true}
                            smooth={true}
                            duration={500}>
                            <li className='hover:text-gray-500 hover:cursor-pointer'>{item.navItem}</li></Link>
                    )}
                </ul>
                {/*<img className='w-7 cursor-pointer hidden md:block' alt='mode' src={DARK_MODE_ICON} />*/}
                <div onClick={handleToogleMenu} className='space-y-1 md:hidden cursor-pointer'>
                    <div className='w-5 h-0.5 bg-black'></div>
                    <div className='w-5 h-0.5 bg-black'></div>
                    <div className='w-5 h-0.5 bg-black'></div>
                </div>
            </div>
            {toogle && <div>
                <hr></hr>
                <div className='bg-slate-50 shadow-lg  absolute left-0  w-full p-4 rounded-b-3xl space-y-10 text-center flex flex-col'>
                    {navLinks.map(item =>
                        <Link key={item.id} to={item.navSection}
                            spy={true}
                            smooth={true}
                            duration={500}>
                            <button className='hover:text-gray-500 hover:cursor-pointer'>{item.navItem}</button></Link>
                    )}
                    <a href={RESUME_CDN}><button className='hover:text-gray-500 hover:cursor-pointer'>Resume</button></a>
                </div></div>}
        </nav>
    );
}

export default Header

