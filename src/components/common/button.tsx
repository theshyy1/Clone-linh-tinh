import React, { ReactNode } from "react";

type ButtonProp = {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  type?: "submit" | "button";
  disabled?: boolean;
};

export const Button: React.FC<ButtonProp> = ({
  onClick,
  type,
  children,
  icon,
  className,
  disabled,
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${className} flex items-center justify-center px-[14px] py-[9px] text-sm hover:opacity-60`}
      disabled={disabled}
    >
      <span>{children}</span>
      {icon && <span className="">{icon}</span>}
    </button>
  );
};
