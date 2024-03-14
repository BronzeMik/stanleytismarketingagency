import CtaBtn from "../CtaBtn";



export default function BenefitsComponent({style, img, title1, title2, par}) {
    return(
        <>
            <div className="benefits-component-container">
                <div className={`benefits-component-${style}`}>

                    <div className={`benefit-img-${img}`}></div>
                    <div className={`benefit-content-${style}`}>
                        <div>
                        <h2><span className='color-word'>{title1}</span> {title2}</h2> 
                        <p>{par}</p>
                        </div>
                        <div className='offer-cta'>
                            <CtaBtn
                            style='hero-btn'
                            url='#free-consultation'
                            content='Schedule FREE Consultation'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
