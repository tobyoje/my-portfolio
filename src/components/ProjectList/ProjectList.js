import "./ProjectList.scss";
import workIMG from "../../assets/images/works/purple-care.jpg";

const ProjectList = () => {
  return (
    <>
      <div className="project-list">
        <h2 className="project-list__heading">Some of my works </h2>

        <div className="works-box">
          <div className="work-box">
            <img className="work-img" src={workIMG} alt="" />
            <div className="work-info">
              <p className="work-info__name">Purple Care Solutions</p>
              <p className="work-info__desc">Web Design & Brand Identity</p>
              <a className="work-info__link" href="#">
                View Project
              </a>
            </div>
          </div>

          <div className="work-box">
            <img className="work-img" src={workIMG} alt="" />
            <div className="work-info">
              <p className="work-info__name">Purple Care Solutions</p>
              <p className="work-info__desc">Web Design & Brand Identity</p>
              <a className="work-info__link" href="#">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
