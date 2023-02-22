import Image from 'next/image';
import { Button } from '../button';
import { Title } from '../title';
import data from '../../json/about.json';

export const AboutMe = () => {

  return (
    <div className='relative'>
      <Title>About Me</Title>
      <h3 className='text-3xl mb-5'>
        I&#39;m <span className='font-bold text-darkblue'>Dystian En Yusgiantoro</span> and a <span className='font-bold text-darkblue'>Frontend Developer!</span>
      </h3>
      <p className='text-xl'>I&#39;m a Frontend Developer with strong curiosity. I like to produce clean code. I strive to stay up-to-date with the latest technology.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mt-8 w-full md:w-4/6'>
        {data.myInfo.map((it, index) => (
          <div key={index}>
            <div className='flex flex-row text-xl gap-2'>
              <h5>{it.title} : </h5>
              <p>{it.desc}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>

      <div className='flex flex-row gap-5 mt-8'>
        <Button>Download CV</Button>
        <Button>Hire Me</Button>
      </div>

      <div className="particle invisible md:visible absolute bottom-0 right-0">
        <Image src='/assets/particle-blue.png' alt='particle' width={300} height={300} />
      </div>
    </div>
  );
};
