import React from 'react'
import Intro from './Intro'
import Header from './Header';

const Body = () => {
    return (
        <div className='h-[110vh]'>
            <Header />
            <div className='h-1/2 lg:flex justify-center lg:h-screen'>
                <img alt='bg' className='hidden lg:block  absolute -z-10' src='https://res.cloudinary.com/dc6fwvmjh/image/upload/v1725525622/xu2bkeidopsvt2e0clds.avif' />

                <div className='lg:w-6/12 flex items-center'>
                    <Intro />
                </div>

                <div className='lg:w-6/12  flex lg:flex-col items-end justify-center lg:mr-14'>
                    <div className='h-96 w-72  flex items-end  '>
                        <img alt='image'
                            className='bottom-0 h-5/6 object-cover mx-auto '
                            src='https://res.cloudinary.com/dc6fwvmjh/image/upload/v1725605781/oz7vlpceaiv2yr2hsybw.png' />
                        <div className='bg-gradient-to-b from-red-600 opacity-75 w-72 h-80 rounded-full  object-fill mx-auto mt-20 absolute -z-10'></div>

                    </div>

                </div>
            </div>
        </div>


    );

}

export default Body


{/* <div className='bg-black h-screen'>
            <img alt='bg'
                className=' absolute h-screen opacity-80 object-contain'
                src='https://res.cloudinary.com/dc6fwvmjh/image/upload/v1725525622/xu2bkeidopsvt2e0clds.avif' />
            <div className='flex'>
                <div className='flex flex-col justify-center h-screen w-6/12'>
                    <Intro />
                </div>
                <div className='w-6/12'>

                </div>
            </div>
        </div>



                                <div className='hidden lg:block absolute -b-14 h-[500px] w-[500px] rounded-full bg-indigo-900 left-0 mx-auto'></div>

    ) */}