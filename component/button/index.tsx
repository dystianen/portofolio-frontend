import { useRouter } from 'next/router';
import react, { PropsWithChildren } from 'react';

export const Button = ({ children, route }: PropsWithChildren<any>) => {
  const router = useRouter();

  return (
    <button onClick={() => router.push(route)} className='bg-darkblue text-white rounded-lg shadow-lg w-max py-2 px-5 text-xl'>
      {children}
    </button>
  );
};
