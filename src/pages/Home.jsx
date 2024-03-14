import Benefits from "../components/Benefits/Benefits";
import FooterOffer from "../components/FooterOffer/FooterOffer";
import FooterSocial from "../components/FooterSocial/FooterSocial";
import OurGuarantee from "../components/Guarantee/OurGuarantee";
import Hero from "../components/Hero/Hero";
import HomeOffer from "../components/HomeOffer/HomeOffer";
import HowItWorks from "../components/HowItWorks/HowItWorks";


export default function Home() {
    return (
        <>
            <Hero />
            <HomeOffer />
            <HowItWorks />
            <OurGuarantee />
            <Benefits />
            <FooterOffer />
            <FooterSocial />
        </>
    )
}
