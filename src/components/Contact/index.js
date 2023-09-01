import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders';
import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        let timeout = setTimeout(() => {
           setLetterClass("text-animate-hover");
         }, 3000);
       
         return () => {
           clearTimeout(timeout);
         };
       }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_uuwwypi',
                'template_b706pmg',
                form.current,
                process.env.REACT_APP_EMAILJS_PUB_KEY
            )
            .then(() => {
                alert('Message Successfully sent!')
                window.location.reload(false)
            })
            .catch(() => {
                alert('Failed to send the message, please try again')
            });
    }

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
                        I'm interested in various opportunities - especially ambitious or 
                        large projects. However, if you have other requests or questions, 
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
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
                <div className='info-map'>
                    George Petrovski,
                    <br />
                    Toronto, ON, Canada
                    <br />
                    <span>ge0403p@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[43.653226, -79.383184]} zoom={13} >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[43.653226, -79.383184]}>
                            <Popup>George lives here, let's grab a cup of coffee and chat!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact