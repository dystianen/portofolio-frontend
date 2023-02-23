import { Title } from '@/component/title';
import data from '../../json/portofolio.json';

const Portfolio = () => {
  return (
    <div className='relative pb-10'>
      <Title>My Portfolio</Title>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-8 w-full'>
        {data.data.map((it, index) => (
          <a key={index} href={it.href} target='_blank' rel='noreferrer' className='relative grid place-items-center rounded-lg bg-grey hover:shadow-2xl'>
            <img className='h-60 md:h-44 w-full rounded-lg' src={it.img} alt={'thumbnail'} />
            <div className='h-2/5 w-full flex items-end p-3 absolute bottom-0 rounded-b-lg bg-gradient-to-t from-black to-transparent'>
              <h1 className='text-white text-sm'>{it.title}</h1>
            </div>
          </a>
        ))}
        <a target='_blank' rel='noreferrer' className='relative grid place-items-center rounded-lg bg-grey hover:shadow-2xl'>
        <img className='h-60 md:h-44 w-full rounded-lg' src={'/assets/thumbnail/comming.avif'} alt={'thumbnail'} />
          <div className='h-2/5 w-full flex items-end p-3 absolute bottom-0 rounded-b-lg bg-gradient-to-t from-black to-transparent'><h1 className='text-white text-sm'></h1></div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
