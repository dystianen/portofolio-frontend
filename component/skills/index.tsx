import react, { useEffect } from 'react';
import { ProgressBar } from '../progress-bar';
import { Title } from '../title';
import data from '../../json/about.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Title>Skills</Title>
      <div className='grid grid-cols-2 gap-x-10 gap-y-5'>
        {data.skills.map((it, index) => (
          <div key={index}>
            <ProgressBar title={it.title} percentage={it.percentage} />
          </div>
        ))}
      </div>
    </div>
  );
};
