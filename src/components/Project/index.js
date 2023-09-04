import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import React, { useEffect, useState } from "react";
import Loader from 'react-loaders';

const Project = () => {
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
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={Array.from("Projects")}
                            idx={15}
                        />
                    </h1>

                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Project