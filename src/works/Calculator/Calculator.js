import redCalc from "../../assets/images/works/red-calculator.gif";

const Calculator = () => {
  return (
    <>
      <div className="project">
        <h1 className="project__title">Red-themed Calculator.</h1>

        <img
          className="project__img"
          src={redCalc}
          alt="Red-themed Calculator"
        />

        <div>
          <h1 className="project__sub-title">Overview</h1>

          <p className="project__description">
            Introducing a simple red-themed calculator app – a user-friendly and
            mobile-responsive utility app for easy and efficient calculations.
            Its minimalist design and vibrant red color make it a visually
            pleasing and functional addition to your device. Crunch numbers
            effortlessly wherever you are, with a calculator that's as
            straightforward as it is stylish.
          </p>

          <div className="project__links">

          <a
            className="project__link"
            href="https://toby-calculator.vercel.app/"
            target="_blank"
          >
            View Live Project
          </a>

          <a
            className="project__link"
            href="https://github.com/tobyoje/calculator"
            target="_blank"
          >
            View Project on Github
          </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
