import img from '../assets/branding.png'

function CustomizedBranding() {
    return (
      <section className="features" id="branding">
            <h2 className="section-title">Customized Branding</h2>
            <p className='section-subtitle'>When it comes to your business, every detail is important. From the first order to the final bite, offer a memorable experience to your customers.</p>
        <div className="container">
          <div className="branding-img">
            <img src={img} alt='features image' />
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">
                {/* Insert icon or image here */}
              </div>
              <h3 className="title">Customizable Loyalty Programs</h3>
              <p className="description">Create and manage branded loyalty programs within the app, rewarding users for their engagement, purchases, and referrals.</p>
            </div>
            <div className="feature-card">
              <div className="icon">
                {/* Insert icon or image here */}
              </div>
              <h3 className="title">Customizable Branding Elements</h3>
              <p className="description">Customize the app&apos;s branding elements such as logo, color scheme, fonts, and imagery to reflect their brand identity</p>
            </div>
            {/* Add more feature cards as needed */}
          </div>
        </div>
        <a href='#get-started' className='section-cta'>
            <button className='btn' style={{margin: '50px auto', display: 'block'}}>Get FREE Demo</button>
        </a>
      </section>
    );
  }
  
  export default CustomizedBranding;
