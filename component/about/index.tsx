import { useEffect, useState } from 'react';
import { Button } from '../button';
import { Title } from '../title';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AboutType } from '@/utils/types/About';

export const AboutMe = (props: AboutType) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='relative'>
      <Title>About Me</Title>
      <h3 data-aos='fade-up' className='text-3xl mb-5'>
        I&#39;m <span className='font-bold text-darkblue'>Dystian En Yusgiantoro</span> and a <span className='font-bold text-darkblue'>Frontend Developer!</span>
      </h3>
      <p data-aos='fade-up' className='text-xl'>
        I&#39;m a Frontend Developer with strong curiosity. I like to produce clean code. I strive to stay up-to-date with <br className='hidden md:block' /> the latest technology.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mt-8 w-full md:w-4/6'>
        {props.data?.map((it, index) => (
          <div key={index}>
            <div className='flex flex-row flex-nowrap text-xl gap-2'>
              <h5>{it.title} :</h5>
              <p className={'text-ellipsis overflow-hidden'}>{it.desc}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>

      <div className='flex flex-row gap-5 mt-8'>
        <a
          className={'bg-darkblue grid place-items-center text-white rounded-lg px-4 hover:cursor-pointer'}
          href={'/CV-Dystian En Yusgiantoro.pdf'}
          download={'CV-Dystian En Yusgiantoro'}
        >
          Download CV
        </a>
        <Button onClick={() => setShowModal(true)}>Hire Me</Button>
      </div>

      {showModal && (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-xl'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <div className='z-50 absolute right-2 top-2'>
                  <button className='p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none' onClick={() => setShowModal(false)}>
                    <MdClose />
                  </button>
                </div>
                <div className='relative p-10 flex-auto'>
                  <img className='w-full rounded-lg' src={'/assets/thumbnail/comming.avif'} alt={'thumbnail'} />
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-30 fixed inset-0 z-40 bg-black'></div>
        </>
      )}

      <div className='invisible md:visible absolute bottom-0 right-0'>
        <Image src='/assets/particle-blue.png' alt='particle' width={300} height={300} />
      </div>
    </div>
  );
};
