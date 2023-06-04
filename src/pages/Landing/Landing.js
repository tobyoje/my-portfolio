import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import PostList from "../../components/PostList/PostList";
import ProjectList from "../../components/ProjectList/ProjectList";
import "./Landing.scss";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <Hero />
        <ProjectList />
        <PostList />
        <Contact />
      </div>
    </>
  );
};

export default Landing;
