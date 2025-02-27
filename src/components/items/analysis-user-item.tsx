import Icon from "@mdi/react";
import { mdiStairsUp, mdiStairsDown } from "@mdi/js";
import { AnimatedNumber } from "../common/animate-number";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  analysisNumbers: { total: number; active: number };
  sign?: string;
  percentage: number;
  classname?: string;
  duration?: number;
}

export const AnalysicUserItem = ({
  children,
  percentage,
  classname,
  analysisNumbers,
  sign,
  duration,
}: IProps) => {
  return (
    <div
      className={`rounded-xl border border-background-light px-4 py-6 space-y-2 ${classname}`}
    >
      <span className="text-xs font-bold text-text-light uppercase">
        {children}
      </span>
      <div className="flex items-center justify-between">
        <div className="text-text-light">
          <span className="text-3xl text-black font-bold">
            <AnimatedNumber
              targetNumber={analysisNumbers.total}
              duration={duration || 2000}
            />
            {sign}
          </span>
          <span> from {analysisNumbers.active}</span>
        </div>
        <span
          className={`flex items-center rounded py-0.5 px-1 text-xs ${percentage > 0 ? "bg-[#e5faf6] text-[#00c9a7]" : "text-[#ee5b83] bg-[#fdedf1]"}  block`}
        >
          <Icon
            path={percentage > 0 ? mdiStairsUp : mdiStairsDown}
            size={0.6}
          />
          {percentage}%
        </span>
      </div>
    </div>
  );
};
