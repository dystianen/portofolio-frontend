import { Title } from '@/component/title';
import { portfolio } from '../../json/portofolio.json';
import { AiOutlineLink } from 'react-icons/ai';
import { PortfolioType } from '@/utils/types/Portfolio';

const Portfolio = (props: PortfolioType) => {
  return (
    <div className='relative pb-10'>
      <Title>Portfolio</Title>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 w-full'>
        {props.data.map((it, index) => (
          <a key={index} href={it.href} target='_blank' rel='noreferrer' className='relative grid place-items-center rounded-lg bg-grey hover:shadow-2xl'>
            <img className='h-60 md:h-52 w-full rounded-lg' src={it.img} alt={'thumbnail'} />
            <div className='h-2/5 w-full flex items-end p-3 absolute bottom-0 rounded-b-lg bg-gradient-to-t from-black to-transparent'>
              <div className='flex flex-row gap-1'>
                <AiOutlineLink className='text-white'/>
                <h1 className='text-white text-sm'>{it.title}</h1>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      data: portfolio
    },
  }
}

export default Portfolio;
