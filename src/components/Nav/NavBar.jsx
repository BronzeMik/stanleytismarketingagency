import CtaBtn from "../CtaBtn";
import MenuItems from "./MenuItems";
import logo from '../../../public/stanley-marketing-logo.png'

export default function NavBar() {
    return(
        <>
            <nav className='navbar'>
                <div className='nav-logo'>
                    <img src={logo} alt='Stanley T Is Marketin' />
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
