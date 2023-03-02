import { useEffect } from 'react';
import { Title } from '../title';
import { data } from '../../json/skills.json';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Title>Skills</Title>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-5 md:gap-x-10 gap-y-5'>
        {data.map((it, index) => (
          <div key={index} data-aos='fade-up' className='flex flex-row items-center gap-2'>
            <IoMdCheckmarkCircleOutline className='text-xl text-darkblue' />
            <p className='text-xl text-darkgreen'>{it}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
