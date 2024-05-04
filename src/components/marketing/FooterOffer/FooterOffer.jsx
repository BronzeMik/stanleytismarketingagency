import CtaBtn from "../CtaBtn";


export default function FooterOffer() {
    return(
        <>
            <div className="footer-offer-container" id='consultation'>
                <div className="footer-offer">
                    <h2>Learn How To Grow Your Business</h2>
                    <p>Schedule a call to learn more about how we can help grow your business</p>
                    <CtaBtn
                    style='hero-btn'
                    url='#free-consultation'
                    content='Get Started'
                    />
                </div>
            </div>
        </>
    )
}
