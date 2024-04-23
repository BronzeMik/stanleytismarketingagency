import OfferCard from "./OfferCard";



export default function OfferGrid() {
    return(
        <div className="offer-grid">
            <div className="offer-grid-header">
                <h2>What&apos;s included in our services?</h2>
                <p>We offer a full range of services to attract customers for your business</p>
            </div>
            <div className="offer-grid-container">
            <OfferCard
            num={1}
            title='Lead Generation Landing Page'
            popupTitle='1. Landing Page to convert leads'
            popupItemOne='Your landing page will clearly communicate the value proposition of your offer. Visitors will immediately understand what they will gain by providing their information.'
            popupItemTwo='We will include a clear and easy-to-use lead capture form where visitors can enter their information.'
            popupItemThree='We will continuously test different elements of your landing page, such as headlines, copy, and CTAs, to optimize for conversions over time.'
            style='offer-card-btn'
            />
            <OfferCard
            num={2}
            title='Lead Converting Funnel'
            popupTitle='2. Convert laser targeted audience into customers'
            popupItemOne='Understanding your target audience&apos;s needs, preferences, and pain points is crucial for creating a lead generation funnel that resonates with them.'
            popupItemTwo='Keep your lead capture form simple and only ask for essential information. The fewer fields you have, the higher the chance of conversion. However, make sure you collect enough information to qualify leads effectively.'
            popupItemThree='Set up an automated email sequence to nurture leads and move them through the funnel. Provide valuable content, address common objections, and gradually introduce them to your products or services.'
            style='offer-card-btn'
            />
            <OfferCard
            num={3}
            title='Online Reviews Management'
            popupTitle='3. Manage your online reputation'
            popupItemOne='Utilize online monitoring tools or platforms to keep track of reviews across various review sites, social media platforms, and other relevant channels.'
            popupItemTwo=' Actively encourage satisfied customers to leave positive reviews by providing clear instructions on how and where to leave feedback. This can be done through follow-up emails, in-store signage, or through your website.'
            popupItemThree='Regularly review and refine your online review management strategy based on feedback and insights gathered from customer reviews.'
            style='offer-card-btn'
            />
            <OfferCard
            num={4}
            title='Video Content'
            popupTitle='4. Increase conversions with video content'
            popupItemOne='Video content tends to capture viewers&apos; attention more effectively than text or images alone. Explainer videos can engage audiences by presenting information in an engaging and visually appealing format, keeping viewers interested and increasing the likelihood that they will consume the entire message.'
            popupItemTwo=' Compelling explainer videos can help raise awareness of your brand and its offerings. When shared on social media, websites, or other digital channels, they can attract new audiences and generate buzz around your products or services.'
            popupItemThree='Showcase the unique features, benefits, and use cases of your products or services. By demonstrating how your offering can solve your audience&apos;s problems or meet their needs, you can build credibility and trust, ultimately leading to more conversions and customer loyalty.'
            style='offer-card-btn'
            />
            <OfferCard
            num={5}
            title='Targeted Social Media Ads'
            popupTitle='5. Increase Awareness with Facebook Ads'
            popupItemOne='Create attention-grabbing visuals and compelling ad copy that resonate with your target audience. Use high-quality images or videos that showcase your product or service in action and highlight its unique selling points.'
            popupItemTwo='Monitor your ad spend closely and adjust your budget allocation as needed to maximize results and ROI.'
            popupItemThree='Use A/B testing to optimize your ads for maximum effectiveness and improve campaign performance over time.'
            style='offer-card-btn'
            />
            </div>
        </div>
    )
}
