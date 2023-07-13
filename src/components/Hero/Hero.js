import "./Hero.scss";
import TobyIMG from "../../assets/images/toby.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__bio">
          <div> Hello,</div>
          <div className="hero__info">
            I'm <h2 className="hero__heading hero__heading--left">Toby </h2> , a
            <h2 className="hero__heading">
              Software Engineer & UI/UX Designer.
            </h2>
          </div>
          <div className="hero__subheading">
         
            <div>
        <ul class="flip">
            <li>I convert complex human problems into basic simple solutions with
            design and codes.</li>
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
