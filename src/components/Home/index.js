import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-g.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from "react";
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeout = setTimeout(() => {
           setLetterClass("text-animate-hover");
         }, 4000);
       
         return () => {
           clearTimeout(timeout);
         };
       }, []);

    return (
        <>
            <div className="container home-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass}
                strArray={Array.from("Hi")}
                idx={12} />
                <AnimatedLetters letterClass={letterClass}
                strArray={Array.from(", ")}
                idx={13} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={Array.from("I'm")}
                idx={14} />
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={Array.from("eorge")}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={Array.from("Software Engineer.")}
                idx={15} />
                </h1>
                <h2>FullStack Developer / DevOps / ML Ops</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                <Logo />
            </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home