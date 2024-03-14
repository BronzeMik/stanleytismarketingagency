import { InlineWidget } from "react-calendly";

export default function CtaBtn({style, content}) {

    return(
        <>
            
            <a href={'#popup1'}><button className={style}>{content}</button></a>
            <div id="popup1" className="overlay">
                <a className="close" href='/'>&times;</a>
                <div className="popup">
                <a className="close" href='/' style={{textAlign: 'right'}}>&times;</a>
                <h2>Schedule Your Consultation</h2>
                    <InlineWidget url="https://calendly.com/stanleytismarketing/30min" /> 
                </div>
            </div>
        </>
    )
}
