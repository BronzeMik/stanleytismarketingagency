import IsVisible from 'react-is-visible'
import HowGrid from './HowGrid'
import { useRef } from 'react'


export default function HowItWorks() {
    const nodeRef = useRef()
    return(
        <>
            <IsVisible once>
                {(isVisible) =>
                    <div className={`how-it-works ${ isVisible ? 'run-slide-left-animation' : ''}`} ref={nodeRef}>
                        <div className='how-it-works-content-container'>
                            <h1>Here&apos;s <span className='color-word'>how it works</span></h1>
                        </div>
                        <HowGrid />
                        
                        
                    </div>

                }
            </IsVisible>
        </>
    )
}
