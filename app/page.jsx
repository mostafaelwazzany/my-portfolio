
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Exp from "./components/Exp";
import About from "./components/About";
import GetTouch from "./components/GetTouch";
import Certificates from "./components/Certifictes";
import EducationCard from "./components/Eduction";

export default function Home() {
  return (

    <div className=" select-none cursor-default">

      <Hero></Hero>
      <About></About>
      <EducationCard  ></EducationCard>
      <Exp></Exp>
      <Certificates></Certificates>
      <Projects></Projects>
      <GetTouch></GetTouch>
    </div>
  );
}
