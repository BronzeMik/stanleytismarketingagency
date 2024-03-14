import GuaranteeContent from "./GuaranteeContent";
import GuaranteeList from "./GuaranteeList";
import IsVisible from 'react-is-visible'


export default function OurGuarantee() {
    return(
        <>
            <IsVisible once>
                {(isVisible) => 
                    <div className={`our-guarantee-container ${isVisible ? 'run-fade-in-animation' : ''}`}>
                        <div className='our-guarantee'>
                            <GuaranteeContent />
                            <GuaranteeList />
                        </div>
                    </div>
                }
            </IsVisible>
            
        </>
    )
}
