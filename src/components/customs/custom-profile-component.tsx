import { ReactNode } from "react";

type IProp = {
  children: ReactNode;
  title: string;
  icon?: any;
  classnames?: string;
};

export const CustomProfileComponent = ({
  children,
  title,
  icon,
  classnames,
}: IProp) => {
  return (
    <div className={`border rounded-xl shadow-md ${classnames}`}>
      <div className="border-b p-4 pb-4 font-semibold flex items-center justify-between">
        <span>{title}</span>
        {icon && (
          <span className="text-gray-300 cursor-pointer h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-300/50">
            {icon}
          </span>
        )}
      </div>
      <>{children}</>
    </div>
  );
};
