import { newStatusStyles } from "../../common/styles";

interface IProps {
  id: number;
  title: string;
  numbers: number;
}

export const ProgressItem = ({ id, title, numbers }: IProps) => {
  return (
    <article key={id}>
      <span className={`${newStatusStyles[title]} block text-[22px] font-bold`}>
        {numbers}
      </span>
      <span className="text-text-light text-sm">{title}</span>
    </article>
  );
};
