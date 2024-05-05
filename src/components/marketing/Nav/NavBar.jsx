import CtaBtn from "../CtaBtn";
import MenuItems from "./MenuItems";
import logo from '../../../assets/stanley-t-is-marketing-logo.png';
import { useState } from "react";


export default function NavBar() {
    const [isHidden, setIsHidden] = useState(true);
    return(
        <>
            <nav className='navbar'>
                <ul className={`${isHidden ? 'slideUp hidden' : 'slideDown'} mobile-nav`}>
                        <li><a href='#trial' onClick={() => document.getElementById('free-trial')?.scrollIntoView()}>FREE Trial</a></li>
                        <li><a href='#home' onClick={() => document.getElementById('guarantee')?.scrollIntoView()}>Our Guarantee</a></li>
                        <li><a href='#services' onClick={() => document.getElementById('how-it-works')?.scrollIntoView()}>How It Works</a></li>
                        <li><a href='#consultation' onClick={() => document.getElementById('consultation')?.scrollIntoView()}>Free Consultation</a></li>
                </ul>
                <div className='nav-logo'>
                    <img src={logo} alt='Stanley T Is Marketin' />
                    
                    <a href="#" className="marketing-icon" id='hamburger' onClick={() => isHidden ? setIsHidden(false) : setIsHidden(true)}>
                        <i className="fa fa-bars"/>
                    </a>
                </div>
                
                <div>
                    <MenuItems />
                    
                </div>
                <div className='nav-cta-btn'>
                    <CtaBtn
                    style='nav-cta'
                    content='Get Started'
                    url='#consultation'
                    />
                </div>
            </nav>
        </>
    )
}
