import { Button } from '@/component/button';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const contact = [
    {
      img: '/assets/logo/github.png',
      href: 'https://github.com/dystianen',
      alt: 'github'
    },
    {
      img: '/assets/logo/linkedin.png',
      href: 'https://www.linkedin.com/in/dystian-en',
      alt: 'linkedin'
    },
    {
      img: '/assets/logo/whatsapp.png',
      href: 'https://wa.me/+6281514365317',
      alt: 'whatsapp'
    },
    {
      img: '/assets/logo/email.png',
      href: 'mailto:distian.enyus@gmail.com',
      alt: 'email'
    },
    {
      img: '/assets/logo/instagram.png',
      href: 'https://www.instagram.com/dystian_en',
      alt: 'instagram'
    },
  ]

  return (
    <div className={'flex flex-col-reverse md:flex-row items-center md:justify-between gap-5 md:gap-20 w-full h-full'}>
      <div className={'flex flex-col w-full md:w-2/4 gap-5 items-center md:items-start'}>
        <div className={'flex flex-col'}>
          <h1 className={'text-2xl md:text-3xl text-center md:text-left'}>
            Hello my name is <span className={'font-bold text-darkblue'}>Dystian En Yusgiantoro</span>
          </h1>
          <h1 className={'animasi-teks title text-3xl md:text-4xl text-center md:text-left'}>
            I&#39;m a <span className={'font-bold text-darkblue'}>Frontend Developer!</span>
          </h1>
        </div>

        <p className={'text-lg text-center md:text-left'}>I&#39;m a Frontend Developer with strong curiosity. I like to produce clean code. I strive to stay up-to-date with the latest technology.</p>

        <div className={'flex flex-row items-center gap-8 mb-4'}>
          {contact.map((it, index) => (
            <Image className={'hover:cursor-pointer'} onClick={() => window.open(it.href)} key={index} src={it.img} alt={it.alt} width={35} height={35}/>
          ))}
        </div>
        <Button onClick={() => router.push('/about')}>More About Me</Button>
      </div>
      <div className={'-mt-20'}>
        <Image src={'/assets/profile.png'} width={500} height={500} alt='profile' />
      </div>
    </div>
  );
};

export default Home;
