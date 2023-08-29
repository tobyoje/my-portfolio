import "./Foodtribe.scss";
import React from "react";
import ReactPlayer from "react-player/lazy";
import foodtribe1 from "../../assets/images/works/foodtribe1.png";
import foodtribe2 from "../../assets/images/works/foodtribe2.png";

const Foodtribe = () => {
  return (
    <>
      <div className="project">
        <h1 className="project__title">Foodtribe.</h1>
        <img className="project__img" src={foodtribe1} alt="Foodtribe" />
        <div>
          <h1 className="project__sub-title">Overview</h1>
          <p className="project__description">
            Foodtribe App aims to provide a seamless and user-friendly platform
            for customers to order authentic Nigerian meals, make payments,
            manage their wallet, track deliveries, and even schedule meals in
            advance. The project's focus was on creating an intuitive UI design
            that reflects the rich culture of Nigeria while ensuring a smooth
            user experience.
          </p>

          <h1 className="project__sub-title"> Problem Statement</h1>
          <p className="project__description">
            Nigeria's diverse culinary scene lacked a consolidated online
            platform for users to order traditional meals conveniently. The
            existing apps often had cluttered interfaces and lacked features
            like meal scheduling and wallet management. The challenge was to
            design an app that celebrated Nigerian cuisine and simplified the
            entire process for users.
          </p>

          <h1 className="project__sub-title"> Goals</h1>

          <p className="project__description">
            <ul>
              <li>
                Create a visually appealing UI that resonates with the essence
                of Nigerian culture.
              </li>

              <li>
                Design a user flow that allows easy ordering, payment, wallet
                management, delivery tracking, and meal scheduling.
              </li>

              <li>
                Ensure a responsive and intuitive interface for both Android and
                iOS platforms.
              </li>

              <li>
                Maintain a consistent and easily recognizable design language
                throughout the app.
              </li>
            </ul>
          </p>

          <img
            className="project__img foodtribe_img"
            src={foodtribe2}
            alt="Foodtribe App"
          />

          <h1 className="project__sub-title">Process</h1>
          <p className="project__description">
            <ol>
              <li>
                Research and Inspiration: Conducted extensive research on
                Nigerian culture, cuisine, and design elements to incorporate
                into the app's visual identity. Explored competitor apps to
                understand their strengths and weaknesses.
              </li>
              <li>
                Wireframing: Created wireframes that mapped out the user
                journey, from signing up to placing an order and tracking
                deliveries. Prioritized simplicity and intuitive navigation.
              </li>
              <li>
                Visual Design: Chose a color palette in sync with the brand's
                motive and identity. Designed custom icons and graphics to
                infuse the app with an authentic feel. Employed a mix of modern
                and traditional typography for clear communication.
              </li>
              <li>
                Ordering Process: Designed a user-friendly interface for
                browsing meals, selecting customization options, and adding
                items to the cart. Implemented a seamless payment process that
                supports various payment methods.
              </li>

              <li>
                Wallet Management: Devised a wallet system that allows users to
                fund their accounts, providing convenience for quicker
                checkouts. Ensured transparency in displaying wallet balances.
              </li>

              <li>
                Delivery Tracking: Designed a real-time tracking interface that
                lets users monitor the progress of their orders on a map.
                Implemented push notifications for order status updates.
              </li>

              <li>
                Meal Scheduling: Created a feature that enables users to
                schedule meals in advance, catering to those who plan their
                orders.
              </li>

              <li>
                Testing and Iteration: Conducted usability testing with a
                diverse group of potential users to gather feedback on the app's
                functionality and design. Incorporated user insights to refine
                the UI and enhance the user experience.
              </li>
            </ol>
          </p>

          <h1 className="project__sub-title">Results</h1>
          <p className="project__description">
            Foodtribe App UI design successfully addressed the challenges of
            creating an intuitive and culturally relevant platform for ordering
            Nigerian meals. The visually appealing design, combined with
            user-centered features like meal scheduling and wallet management,
            sets the app apart in the market. Usability testing feedback was
            overwhelmingly positive, confirming that the app effectively meets
            user needs.
          </p>

          <div className="player-wrapper">
            <ReactPlayer
              url="https://player.vimeo.com/video/858851956"
              playing={true}
              muted={true}
              width="100%"
              height="100%"
            />
          </div>
          <h1 className="project__sub-title">Key Takeaways:</h1>
          <p className="project__description">
            Through this project, I gained valuable experience in:
            <ul>
              <li>
                Incorporating cultural elements into UI design to create a
                unique identity.
                <li>
                  Designing for a seamless user experience in e-commerce and
                  food delivery apps.
                </li>
                <li>
                  Creating intuitive interfaces for complex processes like
                  payment, wallet management, and delivery tracking.
                </li>
                <li>
                  Iterative design based on user feedback to optimize the app's
                  functionality and usability.
                </li>
              </li>
            </ul>
          </p>

          <h1 className="project__sub-title">Future Steps:</h1>
          <p className="project__description">
            In the future, enhancements could be made to include a customer
            review system, integration with social media platforms, and further
            refinement of the app's performance based on user analytics.
          </p>
        </div>
      </div>
    </>
  );
};

export default Foodtribe;
