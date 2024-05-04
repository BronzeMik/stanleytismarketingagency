import img from '../assets/performance.png'

function PerformanceReporting() {
    return (
      <section className="features performance" id="performance">
            <h2 className="performance-section-title">Performance Reporting</h2>
            <p className='section-subtitle'>Gain valuable insights and track your progress with our comprehensive performance reporting features</p>
        <div className="container">
          <div className="features-grid performance-grid">
            <div className="feature-card performance-card">
              <div className="icon">
                {/* Insert icon or image here */}
              </div>
              <h3 className="title">Sales Analytics</h3>
              <p className="description">Visualize sales data through graphs, charts, and dashboards to help make informed decisions about inventory management, pricing strategies, and promotional campaigns.</p>
            </div>
            <div className="feature-card">
              <div className="icon">
                {/* Insert icon or image here */}
              </div>
              <h3 className="title">Customer Engagement Metrics</h3>
              <p className="description">Monitor customer engagement metrics, such as app downloads, active users, session duration, and retention rates.</p>
            </div>
            <div className="feature-card">
              <div className="icon">
                {/* Insert icon or image here */}
              </div>
              <h3 className="title">Inventory Management Insights</h3>
              <p className="description">Integrate with inventory management systems to track inventory levels, turnover rates, and wastage metrics.</p>
            </div>
            <div className="feature-card">
              <div className="icon">
                {/* Insert icon or image here */}
              </div>
              <h3 className="title">Employee Performance Tracking</h3>
              <p className="description">Track employee performance metrics, such as order throughput, customer satisfaction ratings, and attendance records.</p>
            </div>
          </div>
          <div className="performance-img">
            <img src={img} alt='features image' />
          </div>
        </div>
        <a href='#get-started' className='section-cta'>
            <button className='btn' style={{margin: '50px auto', display: 'block'}}>Get FREE Demo</button>
        </a>
      </section>
    );
  }
  
  export default PerformanceReporting;
