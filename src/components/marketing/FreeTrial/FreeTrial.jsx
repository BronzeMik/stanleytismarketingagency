import FreeTialContent from "./FreeTrialContent";
import FreeTrialForm from "./FreeTrialForm";



export default function FreeTrial() {
    return(
        <div className="free-trial-section" id='free-trial'>
            <div className="free-trial-container">
                <FreeTialContent />
                <FreeTrialForm />
            </div>
        </div>
    )
}
