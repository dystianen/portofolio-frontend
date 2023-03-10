import { Title } from '@/component/title';
import { data } from '../../json/certificate.json';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';

const Certificate = () => {
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState('');

  function onShowImage(img: string) {
    setShowModal(true);
    setUrl(img);
  }

  return (
    <div className='relative pb-10'>
      <Title>Certificated</Title>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 w-full'>
        {data.map((it, index) => (
          <button key={index} onClick={() => onShowImage(it.img)} className='relative grid place-items-center rounded-lg bg-grey hover:shadow-2xl'>
            <img className='h-60 md:h-52 w-full rounded-lg' src={it.img} alt={'thumbnail'} />
            <div className='h-2/5 w-full flex items-end p-3 absolute bottom-0 rounded-b-lg bg-gradient-to-t from-black to-transparent'>
              <div className='flex flex-row gap-2'>
                <h1 className='text-white text-sm'>{it.title}</h1>
              </div>
            </div>
          </button>
        ))}

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
                    <img className='w-full rounded-lg' src={url} alt={'thumbnail'} />
                  </div>
                </div>
              </div>
            </div>
            <div className='opacity-30 fixed inset-0 z-40 bg-black'></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Certificate;
