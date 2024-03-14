import BenefitsComponent from "./BenefitsComponent";
import IsVisible from "react-is-visible";



export default function Benefits() {
    return(
        <>
        <IsVisible once>
            {(isVisible) => 
            <div className={`benefits-container ${isVisible ? 'run-fade-in-animation' : ''}`}>
            <BenefitsComponent
            style='1'
            img='1'
            title1='No Pressure'
            title2='Or Committment'
            par='As a customer-first company and our goal is to educate and inspire, not sell. If you decide that a Stanley T Is Marketing isn&apos;t for you after you get your consultation, no problem.'
            />
            <BenefitsComponent
            style='2'
            img='2'
            title1='Unwavering Commitment'
            title2='To Excellence,'
            par='Unlike cookie-cutter solutions, we take the time to understand your unique business needs. This deep understanding forms the foundation of our tailored strategies, ensuring that every campaign is crafted to deliver maximum impact.'
            />
        </div>
            }
        </IsVisible>
        
            
        </>
    )
}
