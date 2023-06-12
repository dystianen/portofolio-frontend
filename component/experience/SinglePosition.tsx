import Image from "next/image"
import { BsFillArrowRightCircleFill } from "react-icons/bs"

export const SinglePosition = ({ data }: any) => {
    return (
        <div className='flex flex-col gap-1 text-white text-base tracking-wide md:text-xl w-full -mt-2'>
            <h5 className='text-white font-bold text-lg'>{data.positions[0].position}</h5>
            <h5 className='text-lightblue text-base'>{data.company} - {data.type}</h5>
            <div className='flex flex-row gap-2'>
                <Image src={'/assets/calender.svg'} height={20} width={20} alt='calender' />
                <h5 className='text-sm'>
                    {data.start} - {data.end}
                </h5>
            </div>
            {data.desc.map((it: any, index: any) => (
                <div key={index} className={'mb-5 text-base'}>
                    <h5 className='mb-2'>{it.title}</h5>

                    <h3 className={'opacity-60 mb-4'}>Responsibilities :</h3>
                    <div className='flex flex-col gap-4 mb-5'>
                        {it.details.map((detail: any, index: any) => (
                            <div key={index} className='flex flex-row items-start md:items-center gap-2 md:gap-4 opacity-60'>
                                <div className='w-max mt-1 md:mt-0'>
                                    <BsFillArrowRightCircleFill />
                                </div>
                                <p>{detail}</p>
                            </div>
                        ))}
                    </div>
                    <p className='opacity-60'><span className='font-bold'>Skills: </span>{it.stacks.length ? it.stacks.join(', ') : '-'}</p>
                </div>
            ))}
        </div>
    )
}