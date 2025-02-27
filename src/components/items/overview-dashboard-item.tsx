import { IOverview } from "../../models/dashboard-modal";
import { AnimatedNumber } from "../common/animate-number";
interface IProps {
  overitem: IOverview;
}

export const OverviewItem = ({
  overitem: { id, icon, descriptions, title, rate, logoImage, numbers },
}: IProps) => {
  return (
    <article
      key={id}
      className="bg-gray-300/50 z-0 col-span-3 overflow-hidden rounded-2xl shadow-sm transition-transform duration-100 hover:translate-y-[-0.04rem] hover:shadow-md"
    >
      <div className="p-[18px] pb-[30px]">
        <span>{logoImage}</span>
        <p className="text-text-light pb-2.5 pt-5 text-sm">{title}</p>
        <span className="my-2.5 text-[28px]">{numbers}</span>
        <p className="text-text-light flex items-center text-[10px]">
          <AnimatedNumber targetNumber={rate} />
          <span>%</span>
          <span className="mr-1">{icon}</span>
          {descriptions}
        </p>
      </div>
    </article>
  );
};
