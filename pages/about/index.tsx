import { AboutMe } from "@/component/about";
import { Education } from "@/component/education";
import { Experience } from "@/component/experience";
import { Skills } from "@/component/skills";

const About = () => {
  return (
    <div className="flex flex-col pb-10">
      <AboutMe />
      <Skills />
      <Education />
      <Experience />
    </div>
  )
}

export default About;