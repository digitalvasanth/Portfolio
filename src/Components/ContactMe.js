import React, { useRef, useState } from 'react'
import { Validate } from '../utils/validation';
import { EMAIL_LOGO, MSG_SENT_ICON, SOCIAL_MEDIA_LOGOS } from '../utils/constants';
//import { db } from '../utils/firebase';
//import { collection, addDoc } from 'firebase/firestore';
//import { getFirestore } from 'firebase/firestore/lite'

const ContactMe = () => {
    //const db = getFirestore();
    const name = useRef(null);
    const email = useRef(null);
    const message = useRef(null);

    const [error, setError] = useState(null);

    //console.log('Firestore DB:', db); // Check if db is correctly initialized
    const handleForm = async () => {
        //validation
        const data = Validate(name.current.value, email.current.value, message.current.value);
        setError(data);
        if (data === null) {
            // try {
            //     await addDoc(collection(db, "contacts"), {
            //         name: name.current.value,
            //         email: email.current.value,
            //         message: message.current.value,
            //         createdAt: new Date()
            //     });
            //     alert('Message sent successfully!');
            // } catch (error) {
            //     console.error('Error adding document:', error);
            //     setError('Failed to send message. Please try again.');
            // }
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
                            (SOCIAL_MEDIA_LOGOS.reverse()).map(logo =>
                                <div className='flex items-center' key={logo.id}>
                                    <img className='w-10 mx-5 my-2' alt={logo.logoName} src={logo.url} />
                                    <span>{logo.logoName}</span>
                                </div>)
                        }
                        <div className='flex items-center'>
                            <img className='w-10 mx-5 my-2' alt='email' src={EMAIL_LOGO} />
                            <span>rakeshkosireddy6@gmail.com</span>
                        </div>
                    </div>
                    <div className='lg:w-6/12 m-5 p-5'>
                        <h1 className='text-4xl lg:text-7xl font-extralight'>Say, Hola</h1>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input ref={name} type='text' className='border border-slate-500 rounded-xl w-full p-3 my-4' placeholder='Name* ' />
                            <input ref={email} type='text' className='border border-slate-500 rounded-xl w-full p-3 my-4' placeholder='Email* ' />
                            <p className='text-red-600'>{error}</p>
                            <textarea ref={message} type='text' className='border border-slate-500 rounded-xl w-full p-3 my-4' placeholder='Message ' />
                            <button type='submit' onClick={handleForm} className='border border-red-600 px-4 flex text-red-600 p-1'>Send<img className='w-6' alt='send' src={MSG_SENT_ICON} /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe