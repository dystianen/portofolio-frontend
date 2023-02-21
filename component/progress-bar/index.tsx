import { useRouter } from 'next/router';
import react, { ComponentProps } from 'react';

export const ProgressBar = ({ title,  percentage }: ComponentProps<any>) => {
  const router = useRouter();

  return (
    <>
      <div className='flex flex-row justify-between text-lg'>
        <h5>{title}</h5>
        <h5>{percentage}%</h5>
      </div>
      <div className='w-full h-2 bg-grey rounded-full'>
        <div className={`h-2 bg-lightblue rounded-full`} style={{width: `${percentage}%`}}></div>
      </div>
    </>
  );
};
