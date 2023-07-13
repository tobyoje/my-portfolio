import "./Hero.scss";
import TobyIMG from "../../assets/images/toby.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__bio">
          <div> Hello,</div>
          <div className="hero__info">
            I'm &nbsp;
            <span style={{ color: "#006cff", fontWeight: 500 }}>Toby</span>, a &nbsp;
            <span style={{ color: "#006cff", fontWeight: 500 }}>
              Software Engineer &nbsp;
            </span>
            &  &nbsp;
            <span style={{ color: "#006cff", fontWeight: 500 }}>
              UI/UX Designer.
            </span>
          </div>
          <div className="hero__subheading">
            <div>
              <ul class="flip">
                <li>
                  I convert complex human problems into simple solutions with
                  design and codes.
                </li>
                <li>I am a creative thinker and a problem solver.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <p className="hero__bio">
          Hello,
          I am a creative thinker and a problem solver. I convert complex human
          problems into basic simple solutions with design and codes applying my
          knowledge and skills towards continuous improvement of self, people
          and brands.
        </p> */}

        {/* <p className="hero__stacks">
          HTML5, CSS, JavaScript, React.js, Node.js, Express.js, Web APIs,
          MySQL, Figma, Sketch, Adobe Photoshop, Wordpress, Webflow.
        </p> */}
      </div>
    </>
  );
};

export default Hero;
