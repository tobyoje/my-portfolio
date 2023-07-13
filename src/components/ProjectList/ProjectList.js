import "./ProjectList.scss";
import pcs from "../../assets/images/works/pcs.gif";
import redCalc from "../../assets/images/works/red-calculator.gif";
import quickProfile from "../../assets/images/works/quick-profile.jpg";
import topeAnderson from "../../assets/images/works/tope-anderson.jpg";
import finaQore from "../../assets/images/works/finaqore.jpeg";
import kaywise from "../../assets/images/works/kaywise.jpeg";
import foodtribe from "../../assets/images/works/foodtribe.gif";
import dash from "../../assets/images/works/dashboard.jpg";

const ProjectList = () => {
  return (
    <>
    <div className="projects">
      <div className="project-list" id="projects">
        <h2 className="project-list__heading">Some of my works </h2>

        <div className="works-box">
          <div className="work-box">
            <img
              className="work-img"
              src={redCalc}
              alt="Red-themed Calculator"
            />
            <div className="work-info">
              <p className="work-info__name">Red-themed Calculator</p>
              <p className="work-info__desc">Utility app</p>
              <a
                className="work-info__link"
                href="https://github.com/tobyoje/calculator"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="work-box">
            <img className="work-img" src={quickProfile} alt="QuickProfile" />
            <div className="work-info">
              <p className="work-info__name">Quick Profile</p>
              <p className="work-info__desc">Profile page making app</p>
              <a
                className="work-info__link"
                href="https://github.com/tobyoje/profile-builder-client"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        <div className="works-box">
          <div className="work-box">
            <img className="work-img" src={foodtribe} alt="Tope Anderson" />
            <div className="work-info">
              <p className="work-info__name">Foodtribe</p>
              <p className="work-info__desc">Product & UI Design</p>
              {/* <a className="work-info__link" href="#">
                View Project
              </a> */}
            </div>
          </div>

          <div className="work-box">
            <img className="work-img" src={pcs} alt="Purple Care Solutions" />
            <div className="work-info">
              <p className="work-info__name">Purple Care Solutions</p>
              <p className="work-info__desc">Web Design & Brand Identity</p>
              {/* <a className="work-info__link" href="#">
                View Project
              </a> */}
            </div>
          </div>
        </div>

        <div className="works-box">
          <div className="work-box">
            <img className="work-img" src={topeAnderson} alt="Tope Anderson" />
            <div className="work-info">
              <p className="work-info__name">Tope Anderson</p>
              <p className="work-info__desc">Web Design & Brand Identity</p>
              {/* <a className="work-info__link" href="#">
                View Project
              </a> */}
            </div>
          </div>

          <div className="work-box">
            <img className="work-img" src={dash} alt="Dashboard" />
            <div className="work-info">
              <p className="work-info__name">Doctors Portal</p>
              <p className="work-info__desc">UI Design</p>
              {/* <a className="work-info__link" href="https://finaqore.com/">
                View Project
              </a> */}
            </div>
          </div>
        </div>

        <div className="works-box">
          <div className="work-box">
            <img className="work-img" src={kaywise} alt="Dj Kaywise" />
            <div className="work-info">
              <p className="work-info__name">Kaywise Entertainment</p>
              <p className="work-info__desc">Web Design</p>
              {/* <a className="work-info__link" href="#">
                View Project
              </a> */}
            </div>
          </div>

          <div className="work-box">
            <img className="work-img" src={finaQore} alt="Finaqore" />
            <div className="work-info">
              <p className="work-info__name">FinaQore</p>
              <p className="work-info__desc">Web Design & Brand Identity</p>
              <a className="work-info__link" href="https://finaqore.com/">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ProjectList;
