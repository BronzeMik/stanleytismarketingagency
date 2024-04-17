

export default function OfferCard({num, title, style, popupTitle, popupItemOne, popupItemTwo, popupItemThree}) {
    return(
        <div className="offer-card-container">
            <div className="offer-card">
                <h1>{num}</h1>
                <h6>{title}</h6>
                <a href={'#popup2'}><button className={style ? style : ''}>Learn More</button></a>
            </div>
            <div id="popup2" className="overlay">
                <div className="popup">
                <a className="close" href='/' style={{textAlign: 'right'}}>&times;</a>
                <h2>{popupTitle}</h2>
                <ul>
                    <li>{popupItemOne}</li>
                    <li>{popupItemTwo}</li>
                    <li>{popupItemThree}</li>
                </ul>     
                </div>
            </div>
        </div>
    )
}
