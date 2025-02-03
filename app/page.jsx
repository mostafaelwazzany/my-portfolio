
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Exp from "./components/Exp";
import About from "./components/About";
import GetTouch from "./components/GetTouch";
import { Analytics } from "@vercel/analytics/react"
export default function Home() {
  return (

    <div className=" select-none cursor-default">

      <Hero></Hero>
      <About></About>
      <Exp></Exp>
      <Projects></Projects>

      <GetTouch></GetTouch>
    </div>
  );
}
