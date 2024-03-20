import CtaBtn from "../CtaBtn";
import video from '../../assets/hero-video.mp4'


export default function HeroContent() {
    return(
        <>
        <div className='hero-inner-container grid-2-left'>
            
            <div className='hero-content'>
                <h2><span className='color-word'>Increase</span> Reach, <span className='color-word'>Grow</span> Awareness, and <span className='color-word'>Convert</span> More Leads </h2>
                <p>Want a customized plan to launch your high converting campaign? Schedule a FREE call today! </p>
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
