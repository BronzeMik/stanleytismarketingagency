

export default function MenuItems() {
    return(
        <>
            <ul className='nav-menu'>
                <li><a href='#home' onClick={() => document.getElementById('guarantee')?.scrollIntoView()}>Our Guarantee</a></li>
                <li><a href='#services' onClick={() => document.getElementById('how-it-works')?.scrollIntoView()}>How It Works</a></li>
                <li><a href='#consultation' onClick={() => document.getElementById('consultation')?.scrollIntoView()}>Free Consultation</a></li>
            </ul>
        </>
        
    )
}
