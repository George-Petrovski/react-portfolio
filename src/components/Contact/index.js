import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders';
import React, { useEffect, useState } from "react";

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeout = setTimeout(() => {
           setLetterClass("text-animate-hover");
         }, 3000);
       
         return () => {
           clearTimeout(timeout);
         };
       }, []);

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={Array.from('Contact me')} 
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm interested in freelance opportunities - especially ambitious or 
                        large projects. However, if you have other requests or questions, 
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'></input>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact