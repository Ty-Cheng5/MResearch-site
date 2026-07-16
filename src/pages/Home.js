import Navbar from '../components/Navbar';
import Picture from '../images/picture.png';
import latO from '../images/latest-one.png';
import latN from '../images/latest-two.png';
import latE from '../images/latest-three.jpg';
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
          <div className="hide">
            <h1>*</h1>
          </div>
          <div className="title2">
            <h1>Bigger Ideas,</h1>
            <img src={Picture} alt=""></img>
          </div>
          <div className="title3">
            <h1>Backed by Scale</h1>
          </div>
        </div>

        <div className="annual-report">
          <div className="annual-report-text">
            <h1>The Public University,<br/> Built for Research.</h1>
            <p>At the University of Michigan,
              we advance scientific progress by publishing hundreds of
              papers each year to signify the change in technology
              and overall the world itself.

            </p>
          </div>
          <iframe width="1000" height="600"
           src="https://www.youtube.com/embed/MoftsbPdNss"
            title="video" frameBorder="0" allowFullScreen>
          </iframe>
        </div>

        <div className="quote-board">
          <h1>Quote Section</h1>
        </div>

        <div className="recent">
          <div className="recent-header">
            <div>
              <h2>Read the latest</h2>
            </div>
            <div>
              <p>See more publications</p>
              <p>See more blog posts</p>
            </div>
          </div>
          <div className="recent-container">
            <a 
              href="https://cse.engin.umich.edu/stories/new-way-to-catch-errors-early-reduces-llm-debugging-time-from-days-to-minutes"
              className="recent-card">
              <img src={latO} alt=""></img>
              <p className="recent-card-meta">June 19, 2026 · Blog</p>
              <h3>New way to catch errors early reduces LLM debugging time from days to minutes</h3>
            </a>
            <a 
              href="https://cse.engin.umich.edu/stories/u-m-researchers-receive-laude-moonshots-funding-for-ai-driven-glucose-management"
              className="recent-card">
              <img src={latN} alt=""></img>
              <p className="recent-card-meta">May 14th, 2026 · Blog</p>
              <h3>U-M researchers receive Laude Moonshots funding for AI-driven glucose management</h3>
            </a>
            <a 
              href="https://mcity.umich.edu/shuttle/"
              className="recent-card">
              <img src={latE} alt=""></img>
              <p className="recent-card-meta">December 2019 · Research</p>
              <h3>Mcity Driverless Shuttle</h3>
            </a>
          </div>
          <div className="recent-scroll">
            <h1>{'<'}</h1>
            <h1>{'>'}</h1>
          </div>
        </div>

        <h1>Featured Research</h1>
        <h1>Learn More</h1>




      </div>

    </div>
  );
}

export default Home;