import Image from 'next/image';
import { ProgressBar } from '../progress-bar';
import { Title } from '../title';

export const Experience = () => {
  const data = [
    {
      name: 'PT Extramarks Indonesia / Kelas Pintar (Frontend Web Developer)',
      start: 'Nov 2022',
      end: 'Feb 2023',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      name: 'PT Adyatma Cendekia Sinergi Abadi (Frontend Web Developer)',
      start: 'Aug 2021',
      end: 'Aug 2023',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      name: 'Jagoan Hosting Indonesia (Backend Developer Internship)',
      start: 'Jul 2019',
      end: 'Jul 2020',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];
  return (
    <>
      <Title>Experience</Title>

      <div className='relative flex flex-row bg-darkblue rounded-lg w-full p-10'>
        <div className='absolute top-2 right-2'>
          <Image src={'/assets/particle-white.png'} height={150} width={150} alt='calender' />
        </div>
        <div className='absolute -bottom-8 -right-5'>
          <Image src={'/assets/particle-white.png'} height={150} width={150} alt='calender' />
        </div>
        <div className='w-1 min-h-full bg-grey rounded-full'></div>
        <div className='flex flex-col gap-10 -ml-[12px]'>
          {data.map((it, index) => (
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
                <p>{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
