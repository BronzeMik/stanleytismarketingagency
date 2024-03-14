import offerImg from '../../../public/offer-img.png'

export default function OfferImg() {
    return(
        <>
            <div className='offer-img-container'>
                <div className='shape'></div>
                <div className='offer-img'>
                    <img src={offerImg} alt='' />
                </div>
            </div>
        </>
    )
}
