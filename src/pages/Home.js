import Navbar from '../components/Navbar';
import Picture from '../images/picture.png'
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
            <div className="recent-card">
              <h1>h</h1>
              <h1>h</h1>
              <h1>h</h1>
            </div>
            <div className="recent-card">
              <h1>h</h1>
              <h1>h</h1>
              <h1>h</h1>
            </div>
            <div className="recent-card">
              <h1>h</h1>
              <h1>h</h1>
              <h1>h</h1>
            </div>
          </div>
          <div className="recent-scroll">
            <h1>{'<'}</h1>
            <h1>{'>'}</h1>
          </div>
        </div>

        <div className ="vader">

        </div>

      </div>

    </div>
  );
}

export default Home;