import OfferContent from "./OfferContent";
import OfferImg from "./OfferImg";
import { useRef } from "react"
import IsVisible from "react-is-visible"


export default function HomeOffer() {
    const nodeRef = useRef();
    
    return(
        <>
            <IsVisible once>
                {(isVisible) => 
                <div className={`home-offer-container ${isVisible ? 'run-slide-right-animation' : ''}`} ref={nodeRef} id='home-offer-container'>
                    <OfferImg />
                    <OfferContent />
                </div>
                }
            </IsVisible>
            
        </>
    )
}
