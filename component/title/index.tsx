import react, { PropsWithChildren } from 'react';

export const Title = ({ children }: PropsWithChildren<any>) => {
  return (
    <div className='w-max my-10'>
      <h1 className='text-[50px] text-darkgreen'>{children}</h1>
      <div className='flex flex-col gap-2'>
      <hr className='w-3/4 border-1'/>
      <hr className='w-2/4 border-1'/>
      </div>
    </div>
  );
};
