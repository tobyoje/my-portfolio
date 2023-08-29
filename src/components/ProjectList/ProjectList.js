import "./ProjectList.scss";
import pcs from "../../assets/images/works/pcs.gif";
import redCalc from "../../assets/images/works/red-calculator.gif";
import projectMgt from "../../assets/images/works/project-mgt.gif";
import quickProfile from "../../assets/images/works/quick-profile.jpg";
import femag from "../../assets/images/works/femag.png";
import topeAnderson from "../../assets/images/works/tope-anderson.jpg";
import finaQore from "../../assets/images/works/finaqore.jpeg";
import kaywise from "../../assets/images/works/kaywise.jpeg";
import foodtribe from "../../assets/images/works/foodtribe.gif";
import dash from "../../assets/images/works/dashboard.jpg";
import { Link, useNavigate } from "react-router-dom";

const ProjectList = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="projects">
        <div className="project-list" id="projects">
          <h2 className="project-list__heading">Some of my works </h2>

          <div className="works-box">
            <div className="work-box">
              <img
                className="work-img"
                src={projectMgt}
                alt="Project Management App"
              />
              <div className="work-info">
                <p className="work-info__name">Project Management App</p>
                <p className="work-info__desc">Tracking projects and tasks</p>
                <Link
                  className="work-info__link"
                  to="/work/project-management"
                  onClick={scrollToTop}
                >
                  View Project
                </Link>
              </div>
            </div>

            <div className="work-box">
              <img className="work-img" src={quickProfile} alt="QuickProfile" />
              <div className="work-info">
                <p className="work-info__name">Quick Profile</p>
                <p className="work-info__desc">Profile page making app</p>
                <Link
                  className="work-info__link"
                  to="/work/quick-profile"
                  onClick={scrollToTop}
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>

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
                <Link
                  className="work-info__link"
                  to="/work/calculator/"
                  onClick={scrollToTop}
                >
                  View Project
                </Link>
              </div>
            </div>

            <div className="work-box">
              <img className="work-img" src={foodtribe} alt="Food Tribe" />
              <div className="work-info">
                <p className="work-info__name">Foodtribe</p>
                <p className="work-info__desc">Product & UI Design</p>
                <Link
                  className="work-info__link"
                  to="/work/foodtribe"
                  onClick={scrollToTop}
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>

          <div className="works-box">
            <div className="work-box">
              <img className="work-img" src={femag} alt="Femagpay" />
              <div className="work-info">
                <p className="work-info__name">FemagPay</p>
                <p className="work-info__desc">Product & UI Design</p>
              </div>
            </div>

            <div className="work-box">
              <img className="work-img" src={pcs} alt="Purple Care Solutions" />
              <div className="work-info">
                <p className="work-info__name">Purple Care Solutions</p>
                <p className="work-info__desc">Web Design & Brand Identity</p>
                {/* <a className="work-info__link" href="#" target="_blank">
                View Project
              </a> */}
              </div>
            </div>
          </div>

          <div className="works-box">
            <div className="work-box">
              <img
                className="work-img"
                src={topeAnderson}
                alt="Tope Anderson"
              />
              <div className="work-info">
                <p className="work-info__name">Tope Anderson</p>
                <p className="work-info__desc">Web Design & Brand Identity</p>
                {/* <a className="work-info__link" href="#" target="_blank">
                View Project
              </a> */}
              </div>
            </div>

            <div className="work-box">
              <img className="work-img" src={dash} alt="Dashboard" />
              <div className="work-info">
                <p className="work-info__name">Doctors Portal</p>
                <p className="work-info__desc">UI Design</p>
                {/* <a className="work-info__link" href="https://finaqore.com/" target="_blank">
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
                {/* <a className="work-info__link" href="#" target="_blank">
                View Project
              </a> */}
              </div>
            </div>

            <div className="work-box">
              <img className="work-img" src={finaQore} alt="Finaqore" />
              <div className="work-info">
                <p className="work-info__name">FinaQore</p>
                <p className="work-info__desc">Web Design & Brand Identity</p>
                {/* <a
                  className="work-info__link"
                  href="https://finaqore.com/"
                  target="_blank"
                >
                  View Project
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
