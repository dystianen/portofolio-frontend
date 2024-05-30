import { BsCalendarEvent, BsFillArrowRightCircleFill } from "react-icons/bs";

export const SinglePosition = ({ data }: any) => {
  return (
    <div className="flex flex-col gap-1 text-white text-base tracking-wide md:text-xl w-full -mt-2">
      <p className="text-white font-bold text-lg">
        {data.positions[0].position}
      </p>
      <p className="text-lightblue text-base">
        {data.company} - {data.type}
      </p>
      <div className="flex flex-row items-center gap-2 text-orange text-sm">
        <BsCalendarEvent />
        <p>
          {data.start} - {data.end}
        </p>
      </div>
      {data.desc.map((it: any, index: any) => (
        <div key={index} className={"text-base"}>
          <p className={`mb-2 ${it.title ? "mt-5" : "mt-0"}`}>{it.title}</p>

          <p className={"opacity-60 mb-4"}>Responsibilities :</p>
          <div className="flex flex-col gap-4 mb-5">
            {it.details.map((detail: any, index: any) => (
              <div
                key={index}
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
