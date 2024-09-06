import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toogleMenu } from '../utils/navSlice';

const Header = () => {
    const name = "< Rakesh />"
    const dispatch = useDispatch();
    const toogle = useSelector(store => store.nav.isMenuOpen)


    const handleToogleMenu = () => {
        dispatch(toogleMenu());
    }
    return (
        <nav className='fixed top-0 w-full bg-white shadow-lg px-2'>
            <div className='container mx-auto py-5 flex items-center text-sm uppercase font-semibold justify-between'>
                <div className='md:text-lg cursor-pointer'>{name}</div>
                <ul className='hidden md:flex space-x-10'>
                    <li className='hover:text-gray-500 hover:cursor-pointer'>Home</li>
                    <li className='hover:text-gray-500 hover:cursor-pointer'>Tools & Skills</li>
                    <li className='hover:text-gray-500 hover:cursor-pointer'>Featured Projects</li>
                    <li className='hover:text-gray-500 hover:cursor-pointer'>Contact Me</li>
                </ul>
                <img className='w-7 cursor-pointer hidden md:block' alt='mode' src='https://cdn-icons-png.flaticon.com/128/17645/17645417.png' />
                <div onClick={handleToogleMenu} className='space-y-1 md:hidden cursor-pointer'>
                    <div className='w-5 h-0.5 bg-black'></div>
                    <div className='w-5 h-0.5 bg-black'></div>
                    <div className='w-5 h-0.5 bg-black'></div>
                </div>

            </div>
            {toogle && <div>
                <hr></hr>
                <ul className='bg-slate-50 shadow-lg underline absolute left-0  w-full p-4 rounded-b-3xl space-y-10 text-center'>
                    <li>Home</li>
                    <li>Tools & Skills</li>
                    <li>Featured Projects</li>
                    <li>Contact Me</li>
                </ul></div>}
        </nav>
    );
}

export default Header

