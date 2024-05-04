import img from '../assets/reviews.png'

function IncreaseLoyalty() {
  return (
    <section className="increase-loyalty" id='loyalty'>
      <div className="container">
        <img src={img} alt='reviews image' />
        <h2 className="section-title">Increase Loyalty</h2>
        <p className="section-subtitle">Engage your customers and foster loyalty with our tailored solutions</p>
        <div className="loyalty-content">
          <div className="loyalty-card">
            <h3 className="card-title">Personalized Rewards</h3>
            <p className="card-description">Reward your customers with personalized offers and incentives based on their preferences and behavior.</p>
          </div>
          <div className="loyalty-card">
            <h3 className="card-title">Membership Programs</h3>
            <p className="card-description">Create exclusive membership programs to provide special benefits and perks to your most loyal customers.</p>
          </div>
          <div className="loyalty-card">
            <h3 className="card-title">Feedback Loop</h3>
            <p className="card-description">Establish a feedback loop to gather insights from your customers and continuously improve their experience.</p>
          </div>
        </div>
      </div>
      <a href='#get-started' className='section-cta'>
        <button className='btn' style={{margin: '50px auto', display: 'block'}}>Get FREE Demo</button>
      </a>
    </section>
  );
}

export default IncreaseLoyalty;
