import react, { useEffect, PropsWithChildren } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export const Title = ({ children }: PropsWithChildren<any>) => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div data-aos='fade-right' className='w-max my-10'>
      <h1 className='text-4xl lg:text-5xl text-darkgreen'>{children}</h1>
      <div className='flex flex-col gap-2'>
      <hr className='w-3/4 border-1'/>
      <hr className='w-2/4 border-1'/>
      </div>
    </div>
  );
};
