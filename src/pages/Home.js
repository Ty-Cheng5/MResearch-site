import Navbar from '../components/Navbar';
import './Home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <div className ="page">
        
        <div className="hide">
          <h1>*</h1>
        </div>

        <div className="title">
          <h1>Research,</h1>
        </div>

        <div className="recent">
          <div className="recent-title">
            <div>
              <h2>Read the latest</h2>
            </div>
            <div>
              <p>See more publications</p>
              <p>See more blog posts</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;