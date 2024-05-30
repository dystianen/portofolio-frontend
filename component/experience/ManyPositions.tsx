import { BsCalendarEvent, BsFillArrowRightCircleFill } from "react-icons/bs";

export const ManyPositions = ({ data }: any) => {
  return (
    <div className="flex flex-col text-white text-base tracking-wide md:text-xl w-full -mt-2">
      <p className="text-white font-bold text-base">{data.position}</p>
      <p className="text-orange text-sm mb-2">{data.typePosition}</p>
      <div className="flex flex-row items-center gap-2 text-sm">
        <BsCalendarEvent />
        <p>
          {data.start} - {data.end}
        </p>
      </div>
      {data.desc?.map((it: any, index: any) => (
        <div key={index} className="text-base timeline-item">
          <div className="timeline-point"></div>
          <p className="mb-2">{it.position}</p>

          <p className="opacity-60 mb-4">Responsibilities :</p>
          <div className="flex flex-col gap-4 mb-5">
            {it.details.map((detail: any, idx: any) => (
              <div
                key={idx}
                className="flex flex-row items-start md:items-center gap-2 md:gap-4 opacity-60"
              >
                <div className="w-max mt-1 md:mt-0">
                  <BsFillArrowRightCircleFill />
                </div>
                <p>{detail}</p>
              </div>
            ))}
          </div>
          <p className="opacity-60">
            <span className="font-bold">Skills: </span>
            {it.stacks.length ? it.stacks.join(", ") : "-"}
          </p>
        </div>
      ))}
    </div>
  );
};
