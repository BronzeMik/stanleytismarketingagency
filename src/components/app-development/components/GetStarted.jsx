import img from '../assets/get-started.gif'

function GetStarted() {
  return (
    <section className="get-started" id='get-started'>
      <div className="container">
        
        <div className="get-started-content">
            <div className="get-started-text">
                <img src={img} alt='' />
                <p>
                Our leading custom apps help you to engage your restaurant or cafe&apos;s customers and increase repeat orders.<br/><br/>

                Schedule a demo to find out how easy it is to launch your own app.
                </p>
            </div>
            <div className='form-container'>
                <h2 className="app-section-title">Get a Custom App for your Restaurant or Coffee Shop</h2>
                <p className="section-subtitle">Book your demo today!</p>
                <form className="get-started-form" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="8dadd288-9210-40e6-ad7b-51d8a4759866" />
                <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
                <input type="hidden" name="app-development" value="Stanley T Is Marketing" />
                    <input type="text" name="first-name" className='fname' placeholder="First Name" required/>
                    <input type="text" name="last-name" className='lname' placeholder="Last Name" required/>
                    <input type="email" name="email" className='email' placeholder="Your Email" required/>
                    <input type="tel" name="phone" className='phone' placeholder="Your Phone Number" required/>
                    <input type='text' name='restaraunt name' placeholder='Restaurant Name' className='restaurant-name'required/>
                    <select id="locations" name="locations" placeholder='Number of locations' style={{width: '96%'}} required>
                        <option value="" disabled selected hidden>Select Number of Locations</option>
                        <option value="none">No Location</option>
                        <option value="1">1 Location</option>
                        <option value="2">2 Locations</option>
                        <option value="3">3 Locations</option>
                        <option value="4">4 Locations</option>
                        <option value="5+">5+ Locations</option>
                    </select>
                    <input type='text' name='website' placeholder='Restaurant Website' className='website' />
                    
                    <div className='consent'>
                        <input type='checkbox' name='consent' id='consent' required/><span>I understand that by submitting this form Stanley T Is Marketing may contact me*</span></div>
                    <button type="submit">Submit</button>
                </form>
            </div>
           
        </div>
        
      </div>
    </section>
  );
}

export default GetStarted;
