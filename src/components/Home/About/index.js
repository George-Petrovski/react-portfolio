import AnimatedLetters from '../../AnimatedLetters';
import './index.scss';

const About = () => {

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={Array.from("About Me")}
                        idx={15}
                    />
                </h1>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    )
}

export default About