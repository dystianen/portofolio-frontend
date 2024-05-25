import Image from "next/image";
import { Title } from "../title";
import { EducationType } from "@/utils/interfaces/Education";
import { BsCalendarEvent } from "react-icons/bs";

export const Education = (props: EducationType) => {
  return (
    <>
      <Title>Education</Title>

      <div className="relative flex flex-row bg-darkblue rounded-lg w-full p-5 md:p-10">
        <div className="z-0 absolute -bottom-8 -right-5">
          <Image
            src={"/assets/particle-white.png"}
            height={150}
            width={150}
            alt="calender"
          />
        </div>
        <div className="timeline">
          <div className="z-10 flex flex-col gap-10">
            {props.data.map((it, index) => (
              <div key={index} className="flex flex-row gap-5">
                <div className="w-max">
                  <div className="bg-white rounded-full w-3 h-3 -ml-[15px] z-10 relative"></div>
                </div>
                <div className="flex flex-col gap-1 text-white text-base tracking-wide md:text-xl -mt-2">
                  <div className="flex flex-row items-center gap-2 text-sm">
                    <BsCalendarEvent />
                    <h5>
                      {it.start} - {it.end}
                    </h5>
                  </div>
                  <h5 className="text-lightblue font-bold text-base">
                    {it.name}
                  </h5>
                  <p className="text-sm text-orange">{it.field}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
