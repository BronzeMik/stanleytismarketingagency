import { useState } from "react";
import PricingCard from "./PricingCard";



export default function PricingGrid() {
    const [pricing, setPricing] = useState(true);

    const handleClick = () => {
        if(pricing) {
            setPricing(false)
        } else{
            setPricing(true)
        }
    }
    return(
        <div className="pricing-grid-section" id='pricing'>
            <div className="pricing-grid-container">
            <header className="pricing-page-header">
                <h1>Choose Your Plan</h1>
                <div className='pricing-btn-container'>
                    <button onClick={handleClick} className={pricing ? 'selected' : ''}>Monthly</button>
                    <button onClick={handleClick} className={!pricing ? 'selected' : ''}>Annual</button>
                </div>
            </header>
            <div className="pricing-grid">
                <PricingCard
                packageName='Starter'
                description='Custom app design and development'
                price={pricing ? '$199/mo' : '$1,800/yr'}
                btn='Start Now'
                featureOne='Custom app design to match restaurant branding and logo'
                featureTwo='Integration with point of sale (POS) systems'
                featureThree='Insight to customer ordering habits and preferences'
                recommended={false}
                />
                <PricingCard
                packageName='Pro'
                description='Everything in the Silver Plan and MORE'
                price={pricing ? '$350/mo' : '$2,900/yr'}
                btn='Start Now'
                featureOne='Promote special offers, discounts and events'
                featureTwo='Integration with third party delivery.'
                featureThree='Customer account and order history'
                recommended={true}
                />
                <PricingCard
                packageName='Business'
                description='Monthly business review and analytics reporting.'
                price={pricing ? '$499/mo' : '$5,000/yr'}
                btn='Get Started'
                featureOne='Priority access to new features and updates'
                featureTwo='Table reservations and management'
                featureThree='Dedicated account manager'
                recommended={false}
                />
            </div>
            </div>
        </div>
    )
}
