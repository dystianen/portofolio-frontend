import react, { useEffect } from 'react';
import Image from 'next/image';
import { Title } from '../title';
import data from '../../json/about.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Title>Education</Title>

      <div className='relative flex flex-row bg-darkblue rounded-lg w-full p-5 md:p-10'>
        <div className='z-0 absolute top-2 right-2'>
          <Image src={'/assets/particle-white.png'} height={150} width={150} alt='calender' />
        </div>
        <div className='w-1 min-h-full bg-grey rounded-full'></div>
        <div className='z-10 flex flex-col gap-10 -ml-[12px]'>
          {data.education.map((it, index) => (
            <div key={index} className='flex flex-row gap-3'>
              <div className='bg-white rounded-full w-5 h-5'></div>
              <div className='flex flex-col gap-1 text-white text-xl'>
                <div className='flex flex-row gap-2'>
                  <Image src={'/assets/calender.svg'} height={20} width={20} alt='calender' />
                  <h4>
                    {it.start} - {it.end}
                  </h4>
                </div>
                <h5 className='text-lightblue font-bold'>{it.name}</h5>
                <p>{it.field}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
