import Icon from "@mdi/react";
import { mdiStairsUp, mdiStairsDown } from "@mdi/js";
import { AnimatedNumber } from "../common/animate-number";

interface IProps {
  label: string;
  analysisNumbers: { total: number; active: number };
  sign?: string;
  percentage: number;
  classname?: string;
}

export const AnalysicUserItem = ({
  label,
  percentage,
  classname,
  analysisNumbers,
  sign,
}: IProps) => {
  return (
    <div
      className={`rounded-xl border border-background-light px-4 py-6 space-y-2 ${classname}`}
    >
      <span className="text-xs font-bold text-text-light uppercase">
        {label}
      </span>
      <div className="flex items-center justify-between">
        <div className="text-text-light">
          <span className="text-3xl text-black font-bold">
            <AnimatedNumber
              targetNumber={analysisNumbers.total}
              duration={2000}
            />
            {sign}
          </span>{" "}
          from {analysisNumbers.active}
        </div>
        <span
          className={`flex items-center rounded py-0.5 px-1 text-xs ${percentage > 0 ? "bg-[#e5faf6] text-[#00c9a7]" : "text-[#ee5b83] bg-[#fdedf1]"}  block`}
        >
          {percentage > 0 ? (
            <Icon path={mdiStairsUp} size={0.6} />
          ) : (
            <Icon path={mdiStairsDown} size={0.6} />
          )}
          {percentage}%
        </span>
      </div>
    </div>
  );
};
