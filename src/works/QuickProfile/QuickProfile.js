import "./QuickProfile.scss"

import quickProfile from "../../assets/images/works/quick-profile.jpg";
import quickProfile2 from "../../assets/images/works/quick-profile.png";

const QuickProfile = () => {
  return (
    <>
      <div className="project">
        <h1 className="project__title">QuickProfile.</h1>
        <img
          className="project__img"
          src={quickProfile}
          alt="Quick Profile App"
        />
        <div>
          <h1 className="project__sub-title">Overview</h1>
          <p className="project__description">
            Quickprofile is a profile/bio page making app where users can make
            beautiful personal profile pages in no time with different designs
            to choose from and share the links across their network.
          </p>


          <div className="project__links">

          <a
            className="project__link"
            href="https://quickprofile.vercel.app/"
            target="_blank"
          >
            View Live Project
          </a>
          <a
            className="project__link"
            href="https://github.com/tobyoje/profile-builder-client"
            target="_blank"
          >
            Front-end on Github
          </a>
          <a
            className="project__link"
            href="https://github.com/tobyoje/profile-builder-server"
            target="_blank"
          >
            Back-end on Github
          </a>
          </div>
          <h1 className="project__sub-title"> Problem</h1>
          <p className="project__description">
            Professionals from various sectors occasionally find it challenging
            to set up a personal profile website due to the technical
            requirements and associated costs of setup and maintenance. The
            majority of them only require something unique and beautiful to
            demonstrate their persona, which they can then share with their
            network together with any pertinent work links, social media
            accounts, and other crucial information.
          </p>

          <img
            className="project__img quickprofile_img"
            src={quickProfile2}
            alt="Quick Profile App"
          />

          <h1 className="project__sub-title"> User Profile</h1>
          <p className="project__description">
            Professionals from different fields can use my app
          </p>

          <h1 className="project__sub-title"> Tech Stacks</h1>
          <p className="project__description">
            React js, JSX, Axios, Node js, Express js, SASS, MySQL, KNEX
          </p>

          <h1 className="project__sub-title"> Features</h1>

          <p className="project__description">
            The development phase involved translating the designed interfaces
            into functional components and building a robust backend to support
            the app's functionalities. The following technologies were utilized:
            <ul>
              <li>Create an account on the app</li>

              <li>
                Setup your profile page by filling up required fields; Bio text,
                name among others.
              </li>

              <li>Choose from the available design styles, colors and fonts</li>

              <li>Add a profile and hero image</li>

              <li>Add social links</li>

              <li>Add external links and image cards</li>

              <li>Add a gallery.</li>
            </ul>
          </p>

          <h1 className="project__sub-title">Features to add (later):</h1>
          <p className="project__description">
            <ul>
              <li>
                Profile barcode which they can share to thier networks. This
                will be scanned to access thier pages
              </li>
              <li>On-page styling live edits</li>
              <li>More styles and compostions</li>
              <li>Subscriptions plans with different level of features.</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default QuickProfile;
