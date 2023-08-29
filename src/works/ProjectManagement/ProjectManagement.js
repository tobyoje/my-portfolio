import projectMgt from "../../assets/images/works/project-mgt.png";
import projectMgt2 from "../../assets/images/works/project-mgt2.png";


const ProjectManagement = () => {
  return (
    <>
      <div className="project">
        <h1 className="project__title">Project Management App.</h1>
        <img
          className="project__img"
          src={projectMgt}
          alt="Project Management App"
        />
        <div>
          <h1 className="project__sub-title">Overview</h1>
          <p className="project__description">
            Streamline your projects with our intuitive project management app.
            From task assignment to progress tracking, our app empowers teams to
            collaborate seamlessly and achieve their goals efficiently.
          </p>

          <div className="project__links">

          <a
            className="project__link"
            href="https://project-management-toby.vercel.app/"
            target="_blank"
          >
            View Live Project
          </a>
          <a
            className="project__link"
            href="https://github.com/tobyoje/project-management-client"
            target="_blank"
          >
            Front-end on Github
          </a>
          <a
            className="project__link"
            href="https://github.com/tobyoje/project-management-server"
            target="_blank"
          >
            Back-end on Github
          </a>
          </div>
        
          <h1 className="project__sub-title"> 1. Introduction:</h1>
          <p className="project__description">
            In this case study, we will explore the design and development
            process of a comprehensive project management application. The
            application allows users to create projects, organize tasks within
            those projects, and track task progress through three stages: To Do,
            In Progress, and Completed. Each task and project can be assigned a
            priority level (Low, Medium, or High). The design phase utilized
            Figma for both mobile and desktop interfaces, while the development
            phase was carried out using React for the frontend and Node.js
            (Express.js) for the backend. Various technologies including Axios,
            SASS, JWT token authentication, Bcrypt.js, Knex, MySQL, and UUID
            were incorporated to enhance the app's functionality and security.
          </p>



<img
          className="project__img"
          src={projectMgt2}
          alt="Project Management App"
        />
       




          <h1 className="project__sub-title"> 2. Design Phase:</h1>
          <p className="project__description">
            The project commenced with thorough planning and design to establish
            the app's user interface and experience. Figma, a popular design
            tool, was employed to create visually appealing and user-friendly
            interfaces for both mobile and desktop users. Key design features
            included:
            <ul>
              <li>
                Responsive Layouts: Designing responsive layouts to ensure
                optimal user experience across various devices.
              </li>

              <li>
                Intuitive Navigation: Implementing an easy-to-navigate interface
                that enables users to seamlessly create projects and manage
                tasks.
              </li>

              <li>
                Color and Typography: Selecting a suitable color scheme and
                typography that aligns with the app's purpose and enhances
                readability.
              </li>

              <li>
                Task Progress Visualization: Designing a visual representation
                of task progress, utilizing the To Do, In Progress, and
                Completed categories.
              </li>

              <li>
                Priority Indicator: Incorporating priority indicators for tasks
                and projects to easily identify their importance.
              </li>
            </ul>
          </p>

          <h1 className="project__sub-title"> 3. Development Phase:</h1>

          <p className="project__description">
            The development phase involved translating the designed interfaces
            into functional components and building a robust backend to support
            the app's functionalities. The following technologies were utilized:
            <ul>
              <li>
                Frontend (React): Utilizing React to create dynamic and
                interactive user interfaces. The use of components and state
                management ensured a modular and maintainable codebase.
              </li>

              <li>
                Dependencies (Axios, SASS): Integrating Axios for making HTTP
                requests to the backend and using SASS for enhanced styling
                capabilities.
              </li>

              <li>
                Backend (Node.js + Express.js): Developing the backend using
                Node.js and Express.js to handle incoming requests, manage
                routes, and execute core business logic.
              </li>

              <li>
                Authentication (JWT): Implementing JSON Web Tokens (JWT) for
                user authentication, enhancing security and ensuring secure
                access to the app's features.
              </li>

              <li>
                Encryption (Bcrypt.js): Using Bcrypt.js to securely hash and
                store user passwords in the database.
              </li>

              <li>
                Database (MySQL, Knex): Setting up a MySQL database and
                utilizing Knex as a query builder to interact with the database,
                manage migrations, and handle seeding.
              </li>

              <li>
                Data Integrity (UUID): Employing UUID (Universally Unique
                Identifier) to ensure data integrity and avoid data duplication.
              </li>
            </ul>
          </p>

          <h1 className="project__sub-title"> 4. Backend Implementation:</h1>

          <p className="project__description">
            The backend was developed using Express.js, providing a RESTful API
            for communication with the frontend. Key backend features included:
            <ul>
              <li>
                Authentication and Authorization: Implementing JWT token-based
                authentication for secure user access and ensuring that only
                authorized users can manage their projects and tasks.
              </li>

              <li>
                API Endpoints: Creating API endpoints for user registration,
                login, project creation, task management, and task status
                updates.
              </li>

              <li>
                Database Schema (Migrations): Using Knex to define and manage
                the database schema through migrations, ensuring data
                consistency and version control.
              </li>

              <li>
                Data Seeding: Incorporating seed data to populate the database
                with initial project and task information, facilitating testing
                and development.
              </li>
            </ul>
          </p>

          <h1 className="project__sub-title">5. Conclusion:</h1>
          <p className="project__description">
            The successful design and development of the project management app
            enables users to efficiently organize their tasks and projects. The
            app's ability to handle user authentication, task prioritization,
            and progress tracking showcased the comprehensive nature of the
            solution. Through effective design, development, and implementation,
            the project management app emerged as a valuable tool for
            individuals and task management.
          </p>

          <h1 className="project__sub-title">6. Features to add (later):</h1>
          <p className="project__description">
            <ul>
              <li>Multi-users and team feature</li>
              <li>On-page drag and drop of tasks</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectManagement;
