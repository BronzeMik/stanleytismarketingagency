
import './AppDevelopment.css'
import './indexDevelopment.css'
import ContactUs from './components/ContactUs'
import CustomerReviewsFeatures from './components/CustomerReviewsFeature'
import CustomizedBranding from './components/CustomizedBranding'
import Features from './components/Features'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'
import Hero from './components/Hero'
import IncreaseLoyalty from './components/IncreaseLoyalty'
import Payment from './components/Payment'
import PerformanceReporting from './components/PerformanceReporting'
import PricingGrid from './components/PricingGrid'
// import ReviewSlider from './components/ReviewSlider'
import Header from './components/header/header'

function App() {

  return (
    <div style={{backgroundColor: '#fff'}}>
      <Header />
      <Hero />
      <PricingGrid />
      <Features />
      <Payment />
      <CustomerReviewsFeatures />
      <PerformanceReporting />
      <CustomizedBranding />
      <IncreaseLoyalty />
      <ContactUs />
      <GetStarted />
      {/* <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fhomeserviceconnectus%2Fposts%2Fpfbid0g3paVcdBHTihH7i2bBhrpqN9xHX4fU9NzcU3Zk69nKv9W9EzhhXATpwqmQ9fHDLvl&show_text=true&width=500&is_preview=true" width="500" height="442" style={{border:'none', overflow:'hidden'}} scrolling="no" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
      <Footer />
    </div>
  )
}

export default App
