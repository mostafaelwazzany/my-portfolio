
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Exp from "./components/Exp";
import About from "./components/About";
import GetTouch from "./components/GetTouch";
import Certificates from "./components/Certifictes";
import EducationCard from "./components/Eduction";
import WorkExperience from "./components/WorkExperience";
import Feedback from "./components/Feedback";
import OfferedServices from "./components/OfferedServices";
import GlobalApi from "./api/GlobalApi";

export default async function Home() {
  const [projectsResponse, certificatesResponse] = await Promise.allSettled([
    GlobalApi.mainpageProjects(),
    GlobalApi.certifcites(),
  ]);

  const projects =
    projectsResponse.status === "fulfilled"
      ? projectsResponse.value?.projectdatas || []
      : [];
  const certificates =
    certificatesResponse.status === "fulfilled"
      ? certificatesResponse.value?.certificates || []
      : [];

  return (

    <div className=" select-none cursor-default">

      <Hero></Hero>
      <About></About>
      <EducationCard  ></EducationCard>
      <WorkExperience></WorkExperience>
      <Exp></Exp>
      <Certificates initialCertificates={certificates}></Certificates>
      <Feedback></Feedback>
      <OfferedServices></OfferedServices>
      <Projects initialProjects={projects}></Projects>
      <GetTouch></GetTouch>
    </div>
  );
}
