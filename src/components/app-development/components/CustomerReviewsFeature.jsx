import { IoShieldCheckmarkSharp, IoShareSocial  } from "react-icons/io5";
import { MdOutlineMarkChatRead } from "react-icons/md";

function CustomerReviewsFeatures() {
  return (
    <section className="customer-reviews-features" id='customer-reviews-features'>
      <div className="container">
        <h2 className="section-title">Customer Reviews</h2>
        <p className="section-subtitle">Enable users to share their reviews and ratings on social media platforms directly from the app, amplifying word-of-mouth recommendations and increasing visibility.</p>
        <div className="info-cards-row">
          <div className="info-card">
            <IoShieldCheckmarkSharp />
            <h3 className="info-title">Verified Reviews</h3>
            <p className="info-summary">Display a verified badge or indicator next to reviews from authenticated users to increase trust and credibility.</p>
          </div>
          <div className="info-card">
            <MdOutlineMarkChatRead />
            <h3 className="info-title">Review Response Management</h3>
            <p className="info-summary">Respond to user reviews directly within the app, addressing concerns, expressing gratitude, or offering resolutions.</p>
          </div>
          <div className="info-card">
            <IoShareSocial />
            <h3 className="info-title">Review Sharing and Social Integration</h3>
            <p className="info-summary">Share reviews and ratings on social media platforms directly from the app, amplifying word-of-mouth recommendations and increasing visibility.</p>
          </div>
          
        </div>
      </div>
      <a href='#get-started' className='section-cta'>
            <button className='btn' style={{margin: '50px auto', display: 'block'}}>Get FREE Demo</button>
      </a>
    </section>
  );
}

export default CustomerReviewsFeatures;
