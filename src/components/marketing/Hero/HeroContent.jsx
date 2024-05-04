import CtaBtn from "../CtaBtn";
import video from '../../../assets/hero-video.mp4';


export default function HeroContent() {
    return(
        <>
        <div className='hero-inner-container grid-2-left'>
            
            <div className='marketing-hero-content'>
                <h2><span className='color-word'>Increase</span> Reach, <span className='color-word'>Grow</span> Awareness, and <span className='color-word'>Convert</span> More Leads </h2>
                <p>From seamless online ordering to immersive loyalty programs, we&apos;re here to empower restaurants of all sizes to thrive in the digital age. Join us in revolutionizing the way diners and restaurants connect – one delicious app at a time! </p>
                <CtaBtn
                style='hero-btn'
                url='#consultation'
                content='Start Increasing Conversions!'
                />
            </div>
            <div className='hero-video-container'>
                <video controls >
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
            
        </div>
        
        </>
    )
}
