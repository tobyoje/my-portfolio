import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer" id="contact">
        <h2 className="footer__heading">Connect with me </h2>

        <div class="connect">
          <div className="connect__button">
            <Link to="mailto:hello@connecttoby.com" target="_blank">
              Email
            </Link>
          </div>

          <div className="connect__button">
            <Link to="https://github.com/tobyoje" target="_blank">
              Github
            </Link>
          </div>

          <div className="connect__button">
            <Link
              to="https://www.linkedin.com/in/oluwatobiojelabi"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
