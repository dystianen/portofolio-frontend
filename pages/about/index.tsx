import { AboutMe } from "@/component/about";
import { Education } from "@/component/education";
import { Experience } from "@/component/experience";
import { Skills } from "@/component/skills";

import about from '../../json/about.json';
import skills from '../../json/skills.json';
import education from '../../json/education.json';
import experience from '../../json/experience.json';

const About = () => {
  return (
    <div className="flex flex-col pb-10">
      <AboutMe data={about.data}/>
      <Skills data={skills.data}/>
      <Education data={education.data}/>
      <Experience data={experience.data}/>
    </div>
  )
}

export default About;