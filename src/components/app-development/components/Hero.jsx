import img from '../assets/hero-app-img.png'


function Hero() {
    return (
      <section className="hero" id="home">
        <div className="app-hero-content">
          <h1 className="app-hero-title"><span className='color'>Increase</span>  Sales <br /> <span className='color'>Boost</span> Online Reviews</h1>
          <p className="hero-subtitle">Help your customers discover your <span className='color'><b>local</b></span> restaurant and seamlessly place orders</p>
          <div className="cta-buttons">
            <a href="#online-ordering"><button className="app-hero-btn">Online ordering</button></a>
            <a href="#payment"><button className="app-hero-btn">Payment processing</button></a>
            <a href="#customer-reviews-features"><button className="app-hero-btn">Customer reviews</button></a>
            <a href="#performance"><button className="app-hero-btn">Performance reporting</button></a>
            <a href="#branding"><button className="app-hero-btn">Customized Branding</button></a>
            <a href="#loyalty"><button className="app-hero-btn">Increased Loyalty</button></a>
          </div>
        </div>
        <div className="hero-img">
            <img src={img} alt='' />
        </div>
      </section>
    );
  }
  
  export default Hero;
