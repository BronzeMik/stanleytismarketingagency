import img from '../assets/features-image.png'

function Features() {
    return (
      <section className="features" id="online-ordering">
            <h2 className="section-title">Online Ordering</h2>
            <p className='section-subtitle'>When it comes to your business, every detail is important. From the first order to the final bite, offer a memorable experience to your customers.</p>
        <div className="container">
          <div className="features-img">
            <img src={img} alt='features image' />
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">
                {/* Insert icon or image here */}
              </div>
              <h3 className="title">Order History and Favorites</h3>
              <p className="description">
                <ul>
                  <li>
                  Maintain a history of users&apos; past orders for easy reordering or reference.
                  </li>
                  <li>
                  Allow users to mark favorite items or restaurants for quick access during future orders.
                  </li>
                </ul>
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">
                {/* Insert icon or image here */}
              </div>
              <h3 className="title">Real-Time Order Tracking</h3>
              <p className="description">
                <ul>
                  <li>
                  Implement a feature that allows users to track their orders in real-time on a map, providing updates on order preparation, dispatch, and estimated delivery time.
                  </li>
                  <li>
                  Send push notifications or SMS updates at various stages of the order process to keep users informed.
                  </li>
                </ul>
              </p>
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
  
  export default Features;
