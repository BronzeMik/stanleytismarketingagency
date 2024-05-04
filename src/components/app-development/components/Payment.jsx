import img from '../assets/payment-img.png'

function Payment() {
    return (
      <section className="features" id="payment">
            <h2 className="section-title">Payment Processing</h2>
            <p className='section-subtitle'>Easily process and track payments using our integration with point of sale (POS) systems.</p>
        <div className="container">
        <div className="features-grid payment-grid">
            <div className="feature-card">
              <div className="icon">
                {/* Insert icon or image here */}
              </div>
              <h3 className="title">Order-Ahead and Pay-in-App</h3>
              <p className="description">Enable users to browse menus, place orders, and make payments directly within the app before arriving at the restaurant.</p>
            </div>
            <div className="feature-card">
              <div className="icon">
                {/* Insert icon or image here */}
              </div>
              <h3 className="title">Automatic Payment Processing</h3>
              <p className="description">Implement automatic payment processing for subscription renewals, recurring orders, or scheduled payments, reducing friction in the checkout process.</p>
            </div>
            <div className="feature-card payment-3">
              <div className="icon">
                {/* Insert icon or image here */}
              </div>
              <h3 className="title">Integration with Third-Party Payment Providers</h3>
              <p className="description">Support seamless integration with payment service providers to streamline payment processing.</p>
            </div>
            
          </div>
          <div className="payment-img">
            <img src={img} alt='payment image' />
          </div>
          
        </div>
        <a href='#get-started' className='section-cta'>
            <button className='btn' style={{margin: '50px auto', display: 'block'}}>Get FREE Demo</button>
        </a>
      </section>
    );
  }
  
  export default Payment;
