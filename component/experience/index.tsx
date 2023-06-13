import Image from 'next/image';
import { Title } from '../title';
import { ExperienceInterface } from '@/utils/interfaces/Experience';
import { ManyPositions } from './ManyPositions';
import { SinglePosition } from './SinglePosition';

export const Experience = (props: ExperienceInterface) => {
  return (
    <>
      <Title>Experience</Title>

      <div className='relative flex flex-row bg-darkblue rounded-lg w-full py-5 px-7 md:py-10 md:px-12'>
        <div className='absolute -bottom-8 -right-5'>
          <Image src={'/assets/particle-white.png'} height={150} width={150} alt='calender' />
        </div>
        <div className='z-10 flex flex-col gap-10 -ml-[7.3px] grow'>
          {props.data.map((it, index) => (
            <div key={index} className='flex flex-col gap-3'>
              {it.positions.length > 1 && (
                <>
                  <div>
                    <h5 className='text-lightblue text-lg'>{it.company}</h5>
                    <h5 className='text-white text-base'>{it.long}</h5>
                    <h5 className='text-white text-base opacity-60 tracking-wider'>{it.location}</h5>
                  </div>
                  <div className='flex flex-col items-start gap-10 mt-4'>
                    {it?.positions?.map((position: any, index: any) => (
                      <div className='flex flex-row gap-5'>
                        <div className='h-full'>
                          <div className='w-max'>
                            <div className='bg-grey rounded-full w-3 h-3'></div>
                          </div>
                          {index !== 2 && (
                            <div className="line-with-bullet"></div>
                          )}
                        </div>
                        <ManyPositions data={position} />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {it.positions.length <= 1 && <SinglePosition data={it} />}

              {index !== props.data.length - 1 && <hr className='text-white mt-5' />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
