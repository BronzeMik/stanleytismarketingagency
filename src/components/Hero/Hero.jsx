import HeroContent from "./HeroContent";
import { useRef } from "react"
import IsVisible from "react-is-visible"
 


export default function Hero() {
    const nodeRef = useRef();
    
    return(
        <IsVisible once>
            {(isVisible) => 
            <div className={`hero-container ${isVisible ? 'run-fade-in-animation' : ''}`} id='hero' ref={nodeRef}>
                <HeroContent />
            </div>}
        </IsVisible>
        
    )
}
