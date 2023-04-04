import Image from 'next/image';
import { Title } from '../title';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { ExperienceType } from '@/utils/types/Experience';

export const Experience = (props: ExperienceType) => {
  return (
    <>
      <Title>Experience</Title>

      <div className='relative flex flex-row bg-darkblue rounded-lg w-full p-5 md:p-10'>
        <div className='z-0 absolute top-2 right-2'>
          <Image src={'/assets/particle-white.png'} height={150} width={150} alt='calender' />
        </div>
        <div className='absolute -bottom-8 -right-5'>
          <Image src={'/assets/particle-white.png'} height={150} width={150} alt='calender' />
        </div>
        <div className='w-max'>
          <div className='w-1 min-h-full bg-grey rounded-full'></div>
        </div>
        <div className='z-10 flex flex-col gap-10 -ml-[12px]'>
          {props.data.map((it, index) => (
            <div key={index} className='flex flex-row items-start gap-3'>
              <div className='w-max'>
                <div className='bg-white rounded-full w-5 h-5'></div>
              </div>
              <div className='flex flex-col gap-1 text-white text-base tracking-wide md:text-xl w-full'>
                <div className='flex flex-row gap-2'>
                  <Image src={'/assets/calender.svg'} height={20} width={20} alt='calender' />
                  <h4>
                    {it.start} - {it.end}
                  </h4>
                </div>
                <h5 className='text-lightblue font-bold mb-3'>{it.name}</h5>
                {it.desc.map((data, index) => (
                  <div key={index} className={'mb-5'}>
                    <h5 className='mb-2'>{data.title}</h5>

                    <h3 className={'opacity-60 mb-4'}>Responsibilities :</h3>
                    <div className='flex flex-col gap-4 mb-5'>
                      {data.details.map((detail, index) => (
                        <div key={index} className='flex flex-row items-start md:items-center gap-2 md:gap-4 opacity-60'>
                          <div className='w-max mt-1 md:mt-0'>
                            <BsFillArrowRightCircleFill />
                          </div>
                          <p>{detail}</p>
                        </div>
                      ))}
                    </div>
                    <p className='opacity-60'>Stacks : {data.stacks.length ? data.stacks.join(', ') : '-'}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
