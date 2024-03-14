import CtaBtn from "../CtaBtn";



export default function OfferContent() {
    
    
    return(
        <>
            <div className='offer-content-container'>
                <div className='offer-content'>
                    <p><span className='color-word'>From strategic social media campaigns to search engine optimization</span>, we offer a comprehensive suite of services to enhance your visibility, engage your audience, and drive conversions. With our team of experienced professionals, cutting-edge tools, and data-driven approach, we&apos;ll help you unlock the full potential of digital marketing to achieve your business goals.</p>
                </div>
                <div className='offer-cta'>
                    <CtaBtn
                    style='hero-btn'
                    url='#free-consultation'
                    content='Schedule A Call'
                    />
                </div>
                
            </div>
        </>
    )
}
