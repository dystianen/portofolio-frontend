import { useEffect, useState } from 'react';
import { Button } from '../button';
import { Title } from '../title';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AboutType } from '@/utils/interfaces/About';

export const AboutMe = (props: AboutType) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='relative -mt-8 md:mt-0'>
      <Title>About Me</Title>
      <h3 data-aos='fade-up' className='text-lg lg:text-2xl mb-5'>
        I&#39;m <span className='font-bold text-darkblue'>Dystian En Yusgiantoro</span> and a <span className='font-bold text-darkblue'>Frontend Developer at Extramarks Education!</span>
      </h3>
      <p data-aos='fade-up' className='text-base text-justify'>
        Hi, I&#39;m a frontend developer with more than 3 years experience in this industry. I am very passionate and enthusiastic in creating attractive and easy-to-use user interfaces. I have experience in several frameworks such as React,
        Next.js, Angular, and Vue.js. I&#39;m also very used to using modern technologies like HTML5, CSS3, and JavaScript ES6+. I enjoy working in a team and usually engage in collaborative projects with other designers and developers. I
        believe that effective collaboration is essential to create a quality product. Apart from that, I also frequently participate in local developer communities and attend technology events and meetups to broaden my knowledge and
        network. I believe that as a frontend developer, I have a responsibility to create great user experiences and maintain clean and structured code. I look forward to continuing to learn and grow in my career as a frontend developer.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mt-8 w-full md:w-4/6'>
        {props.data?.map((it, index) => (
          <div key={index}>
            <div className='flex flex-row flex-nowrap text-base gap-2'>
              <h5>{it.title} :</h5>
              <p className={'text-ellipsis overflow-hidden'}>{it.desc}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>

      <div className='flex flex-row gap-5 mt-8'>
        <a className={'bg-darkblue grid place-items-center text-white rounded-lg px-4 py-2 text-base hover:cursor-pointer'} href={'/CV-Dystian En Yusgiantoro.pdf'} download={'CV-Dystian En Yusgiantoro'}>
          Download CV
        </a>
        <a className={'bg-darkblue grid place-items-center text-white rounded-lg px-4 py-2 text-base hover:cursor-pointer'} href={'https://wa.me/+6281514365317'}>
          Hire Me
        </a>
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
