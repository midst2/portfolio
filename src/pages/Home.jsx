import About from "../../sections/About";
import Hero from "../../sections/Hero";
import Marquee from "../../sections/Marquee";
import Work from "../../sections/Work";
import Navbar from "../components/navbar";
import Services from "../../sections/MainProfession";
import Contact from "../../sections/Contact";
import Skills from "../../sections/Skills";
import ResumeCard from "../../sections/Resumecard";

const Home = () => {
  return <>
    <Hero/>
    <About/>
    <Services/>
    <Skills/>
    <Work/>
    <Marquee/>
    <ResumeCard/>
    <Contact/>
  </>;
};
export default Home;
