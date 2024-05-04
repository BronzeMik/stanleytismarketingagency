import './App.css';
import './Marketing.css';
import Benefits from "./Benefits/Benefits";
import FooterOffer from "./FooterOffer/FooterOffer";
import FooterSocial from "./FooterSocial/FooterSocial";
import FreeTrial from "./FreeTrial/FreeTrial";
import OurGuarantee from "./Guarantee/OurGuarantee";
import Hero from "./Hero/Hero";
import HomeOffer from "./HomeOffer/HomeOffer";
import HowItWorks from "./HowItWorks/HowItWorks";
import OfferGrid from "./Offer/OfferGrid";
import NavBar from './Nav/NavBar';


export default function Home() {
    return (
        <div className='marketing-body'>
            <NavBar />
            <Hero />
            <HomeOffer />
            <FreeTrial />
            <HowItWorks />
            <OurGuarantee />
            <OfferGrid />
            <Benefits />
            <FooterOffer />
            <FooterSocial />
        </div>
    )
}
