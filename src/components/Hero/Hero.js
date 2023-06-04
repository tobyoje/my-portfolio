import "./Hero.scss";
import TobyIMG from "../../assets/images/toby.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-inner">
          <div className="hero1">
            <img className="hero__image" src={TobyIMG} alt="Toby" />
          </div>
          <div className="hero2">
            <h2 className="hero__heading">Oluwatobi Ojelabi</h2>
            <p className="hero__subtitle">Software Engineer & UI/UX Designer</p>
          </div>
        </div>

        <p className="hero__bio">
          I am a creative thinker and a problem solver. I convert complex human
          problems into basic simple solutions with design and codes applying my
          knowledge and skills towards continuous improvement of self, people
          and brands.
        </p>

        <p className="hero__stacks">
          HTML5, CSS, JavaScript, React.js, Node.js, Express.js, Web APIs,
          MySQL, Figma, Sketch, Adobe Photoshop, Wordpress, Webflow.
        </p>
      </div>
    </>
  );
};

export default Hero;
