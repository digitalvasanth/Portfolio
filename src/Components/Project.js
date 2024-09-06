import React from 'react'
import ProjectSkills from './ProjectSkills'

const Project = () => {
    return (
        <>
            <hr></hr>

            <div className='bg-slate-100 w-screen pb-10'>
                <h1 className='text-center text-5xl lg:text-7xl font-extralight'>PROJECTS</h1>
                <div className='lg:flex'>
                    <div className='m-14 mb-0 lg:w-6/12 lg:order-2'>
                        <h1 className='text-xl text-red-600 font-extralight my-3 lg:text-4xl lg:hidden'>HUNTER STOP</h1>
                        <img alt='project-1' src='https://res.cloudinary.com/dc6fwvmjh/image/upload/v1725644274/s2rjl9gvbbnbrdcvxqi8.png' />

                    </div>
                    <div className='m-10 p-7 lg:m-10  lg:w-6/12 lg:order-1 shadow-xl lg:p-10 rounded-3xl'>
                        <h1 className='text-xl hidden my-4 lg:block text-red-600 font-extralight lg:text-4xl '>HUNTER STOP<hr></hr></h1>

                        <p className='pb-3 text- font-normal'>A delivery web app like Swiggy, user can search for resturant and the items can add to cart and user have their billing page.</p>
                        <p className='text-xs lg:text-sm text-slate-700'>
                            "Built a restaurant search and filter with live data from <span className='text-red-400 font-medium'>Swiggy API,</span> managed <span className='text-red-400 font-medium'>State with Redux,</span> implemented routing and error handling, and optimized build with <span className='text-red-400 font-medium'>Parcel and Babel</span>."</p>
                        <div className='-mx-10'>
                            <ProjectSkills />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project