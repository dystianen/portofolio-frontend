import { PropsWithChildren } from "react";

export const Title = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-max mt-10 mb-4">
      <h1 className="text-2xl lg:text-3xl text-darkgreen">{children}</h1>
      <div className="flex flex-col gap-2">
        <hr className="w-3/4 border-1" />
        <hr className="w-2/4 border-1" />
      </div>
    </div>
  );
};
