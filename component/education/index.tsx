import Image from 'next/image';
import { Title } from '../title';
import { EducationType } from '@/utils/types/Education';

export const Education = (props: EducationType) => {
  return (
    <>
      <Title>Education</Title>

      <div className='relative flex flex-row bg-darkblue rounded-lg w-full p-5 md:p-10'>
        <div className='z-0 absolute top-2 right-2'>
          <Image src={'/assets/particle-white.png'} height={150} width={150} alt='calender' />
        </div>
        <div className='w-[0.2rem] min-h-full bg-grey opacity-60 rounded-full'></div>
        <div className='z-10 flex flex-col gap-10 -ml-[7.3px]'>
          {props.data.map((it, index) => (
            <div key={index} className='flex flex-row gap-3'>
              <div className='bg-white rounded-full w-3 h-3'></div>
              <div className='flex flex-col gap-1 text-white text-base tracking-wide md:text-xl -mt-2'>
                <div className='flex flex-row gap-2'>
                  <Image src={'/assets/calender.svg'} height={20} width={20} alt='calender' />
                  <h4>
                    {it.start} - {it.end}
                  </h4>
                </div>
                <h5 className='text-lightblue font-bold'>{it.name}</h5>
                <p className='opacity-60'>{it.field}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
