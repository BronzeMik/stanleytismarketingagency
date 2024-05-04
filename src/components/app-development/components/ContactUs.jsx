function ContactUs() {
    return (
      <section className="contact-us" id='contact'>
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Have questions? We&apos;re here to help!</p>
          <div className="contact-info">
            <div className="info-item">
              <h3>Email:</h3>
              <a href='mailto:info@stanleytismarketing.com' style={{color: '#fff', textDecoration: 'none'}}>info@stanleytismarketing.com</a>
            </div>
            <div className="info-item">
              <h3>Phone:</h3>
              <a href='tel:2165532564' style={{color: '#fff', textDecoration: 'none'}}>(216) 553-2564</a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default ContactUs
