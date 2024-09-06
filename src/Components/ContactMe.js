import React from 'react'

const ContactMe = () => {
    return (
        <>
            <hr></hr>
            <div className='bg-slate-100 pb-1'>
                <h1 className='text-center text-4xl lg:text-7xl font-extralight'>Connect with me</h1>
                <div className='lg:flex'>
                    <div className='lg:w-6/12 my-5 mx-5 lg:p-20'>
                        <div className='flex items-center'>
                            <img className='w-10 mx-5 my-2' alt='git-hub' src='https://cdn-icons-png.flaticon.com/128/5968/5968896.png' />
                            <span>Git hub</span>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-10 mx-5 my-2' alt='Linked-in' src='https://cdn-icons-png.flaticon.com/128/15707/15707782.png' />
                            <span>Linked in</span>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-10 mx-5 my-2' alt='Twitter' src='https://cdn-icons-png.flaticon.com/128/15707/15707824.png' />
                            <span>Twitter</span>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-10 mx-5 my-2' alt='email' src='https://cdn-icons-png.flaticon.com/128/6244/6244710.png' />
                            <span>rakeshkosireddy6@gmail.com</span>
                        </div>

                    </div>
                    <div className='lg:w-6/12 m-5 p-5'>
                        <h1 className='text-4xl lg:text-7xl font-extralight'>Say, Hola</h1>
                        <input type='text' className='border border-slate-500 rounded-xl w-full p-3 my-4' placeholder='Name* ' />
                        <input type='text' className='border border-slate-500 rounded-xl w-full p-3 my-4' placeholder='Email* ' />
                        <input type='text' className='border border-slate-500 rounded-xl w-full p-3 my-4' placeholder='Message ' />
                        <button className='border border-red-600 px-4 flex text-red-600 p-1'>Send<img className='w-6' alt='send' src='https://cdn-icons-png.flaticon.com/128/10135/10135168.png' /></button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe