import React, { useRef, useState } from 'react'
import { Validate } from '../utils/validation';
import { EMAIL_LOGO, MSG_SENT_ICON_LIGHT, MSG_SENT_ICON_DARK, SOCIAL_MEDIA_LOGOS } from '../utils/constants';
import { useSelector } from 'react-redux';


const ContactMe = () => {
    const [alret, setAlert] = useState(false)
    const mode = useSelector(store => store.mode.isModeDark);
    let contactBg = "";
    mode ? contactBg = "bg-gray-800 text-white " : contactBg = "bg-slate-100 ";
    let text = "";
    let border = "";
    mode ? text = "text-lime-300 " : text = "text-red-600 ";
    mode ? border = "border-lime-400 " : border = " border-red-600 ";

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
            setAlert(true);
            setInterval(() => { setAlert(false); }, 5000);
        }

    };
    return (
        <div id="sectionContact" className='w-[102.5vw] lg:w-full'>
            <hr></hr>
            <div className={contactBg + 'pb-1'}>
                <h1 className='text-center text-4xl lg:text-7xl font-extralight pt-16 mb-10 lg:mb-14'>Connect with me<hr className='m-auto w-0 lg:w-2/6'></hr></h1>
                <div className='lg:flex'>
                    <div className='lg:w-6/12 my-5 mx-5 lg:p-20'>
                        {
                            (SOCIAL_MEDIA_LOGOS).map(logo =>
                                <a className='flex items-center hover:cursor-pointer hover:animate-bounce' key={logo.id} href={logo.refer}>
                                    <img className='w-10 mx-5 my-2' alt={logo.logoName} src={logo.url} />
                                    <span>{logo.logoName}</span>
                                </a>)
                        }

                        <a className='flex items-center hover:animate-bounce' href='https://mail.google.com/mail/u/5/#sent'>
                            <img className='w-10 mx-5 my-2 bg-white rounded-full' alt='email' src={EMAIL_LOGO} />
                            <span>digitalvasanth01@gmail.com</span></a>

                    </div>
                    <div className='lg:w-6/12 m-5 p-5'>
                        <h1 className='text-4xl lg:text-7xl font-extralight'>Say, <span className={'animate-pulse ' + text}>Hola</span></h1>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input ref={name} type='text' className='border border-slate-500 rounded-xl w-full p-3 my-4' placeholder='Name* ' />
                            <input ref={email} type='text' className='border border-slate-500 rounded-xl w-full p-3 my-4' placeholder='Email* ' />
                            <p className={text}>{error}</p>
                            <textarea ref={message} type='text' className='border border-slate-500 rounded-xl w-full p-3 my-4' placeholder='Message ' />
                            <div className='flex'>
                                <button type='submit' onClick={handleForm} className={'  mr-5 h-10 px-4 flex p-1 text-lg border ' + border + text}>Send<img className='w-6 ml-2 mt-0.5 h-7' alt='send' src={mode ? MSG_SENT_ICON_DARK : MSG_SENT_ICON_LIGHT} /></button>
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