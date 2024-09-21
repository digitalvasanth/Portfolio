import React, { useRef, useState } from 'react'
import { Validate } from '../utils/validation';
import { EMAIL_LOGO, MSG_SENT_ICON, SOCIAL_MEDIA_LOGOS } from '../utils/constants';


const ContactMe = () => {
    const [alret, setAlert] = useState(false)

    const name = useRef(null);
    const email = useRef(null);
    const message = useRef(null);

    const [error, setError] = useState(null);

    const handleForm = async () => {
        //validation
        const data = Validate(name.current.value, email.current.value, message.current.value);
        setError(data);
        if (data === null) {
            name.current.value = ""
            email.current.value = ""
            message.current.value = ""
            setAlert(true)
        }

    };
    return (
        <div id="sectionContact">
            <hr></hr>
            <div className='bg-slate-100 pb-1'>
                <h1 className='text-center text-4xl lg:text-7xl font-extralight'>Connect with me</h1>
                <div className='lg:flex'>
                    <div className='lg:w-6/12 my-5 mx-5 lg:p-20'>
                        {
                            (SOCIAL_MEDIA_LOGOS).map(logo =>
                                <a className='flex items-center hover:cursor-pointer' key={logo.id} href={logo.refer}>
                                    <img className='w-10 mx-5 my-2' alt={logo.logoName} src={logo.url} />
                                    <span>{logo.logoName}</span>
                                </a>)
                        }

                        <a className='flex items-center' href='https://mail.google.com/mail/u/5/#sent'>
                            <img className='w-10 mx-5 my-2' alt='email' src={EMAIL_LOGO} />
                            <span>rakeshkosireddy6@gmail.com</span></a>

                    </div>
                    <div className='lg:w-6/12 m-5 p-5'>
                        <h1 className='text-4xl lg:text-7xl font-extralight'>Say, Hola</h1>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input ref={name} type='text' className='border border-slate-500 rounded-xl w-full p-3 my-4' placeholder='Name* ' />
                            <input ref={email} type='text' className='border border-slate-500 rounded-xl w-full p-3 my-4' placeholder='Email* ' />
                            <p className='text-red-600'>{error}</p>
                            <textarea ref={message} type='text' className='border border-slate-500 rounded-xl w-full p-3 my-4' placeholder='Message ' />
                            <div className='flex'>
                                <button type='submit' onClick={handleForm} className='border mr-5 border-red-600 h-10 px-4 flex text-red-600 p-1'>Send<img className='w-6' alt='send' src={MSG_SENT_ICON} /></button>
                                {alret === true ?
                                    <div className='rounded-lg lg:block text-center py-3  w-full  text-xl bg-green-500  h-14'>Message sent succesfully</div> : ""
                                }
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe