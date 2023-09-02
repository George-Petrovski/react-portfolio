import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import React, { useEffect, useState } from "react";
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
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
                            strArray={Array.from("About Me")}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am a very ambitious software engineer who is looking for a role in a 
                        transformational organization that is using technology to solve challenges.
                    </p>
                    <p>
                        Having multiple degrees from University of Waterloo and Seneca, I am confident 
                        in my knowledge to deliver lasting results. I have had a few years of experience 
                        as a Teaching Assistant and have honed my knowledge transfer skills so that 
                        collaboration becomes simple and effortless. Finally, I am an expert communicator 
                        from my experience working in sales and understand that it is imperative to 
                        listen attentively so that results can be delivered as expected.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a family person, 
                        a tech enthusiast, nature lover, adventurer, and a life long learner.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About