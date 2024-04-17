import Benefits from "../components/Benefits/Benefits";
import FooterOffer from "../components/FooterOffer/FooterOffer";
import FooterSocial from "../components/FooterSocial/FooterSocial";
import FreeTrial from "../components/FreeTrial/FreeTrial";
import OurGuarantee from "../components/Guarantee/OurGuarantee";
import Hero from "../components/Hero/Hero";
import HomeOffer from "../components/HomeOffer/HomeOffer";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import OfferGrid from "../components/Offer/OfferGrid";


export default function Home() {
    return (
        <>
            <Hero />
            <HomeOffer />
            <FreeTrial />
            <HowItWorks />
            <OurGuarantee />
            <OfferGrid />
            <Benefits />
            <FooterOffer />
            <FooterSocial />
        </>
    )
}
