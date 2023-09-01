import './index.scss';
import LogoS from '../../../assets/images/logo-s.png'
import { useRef } from 'react'
// import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
    const bgRef = useRef();
    // const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    // useEffect(() => {
    //     gsap.registerPlugin(DrawSVGPlugin)
    
    //     gsap
    //       .timeline()
    //       .to(bgRef.current, {
    //         duration: 1,
    //         opacity: 1,
    //       })
    //       .from(outlineLogoRef.current, {
    //         drawSVG: 0,
    //         duration: 20,
    //       })
    
    //     gsap.fromTo(
    //       solidLogoRef.current,
    //       {
    //         opacity: 0,
    //       },
    //       {
    //         opacity: 1,
    //         delay: 4,
    //         duration: 4,
    //       }
    //     )
    //   }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img 
                className='solid-logo'
                ref={solidLogoRef} 
                src= {LogoS} 
                alt ='JavaScript, Developer' 
            />
            {/* <svg
                width='559pt'
                height='897pt'
                version='1.0'
                viewBox='0 0 559 897'
                xmlns='http://www.w3.org/2000/svg'>
                <g
                    className="svg-container"
                    transform='translate(0 457) scale(.1 -.1)'
                    fill='none'>
                    <path
                        ref={outlineLogoRef}
                        stroke="green"
                        d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,
               10 10,40 Q10,70 45,70 Q70,70 75,50"
                    />
                </g>
            </svg> */}
        </div>
    )
}

export default Logo