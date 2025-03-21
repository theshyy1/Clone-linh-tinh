import React, { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "date";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  placeholder?: string;
  clasnames?: string;
  onBlur?: (event: any) => void;
}

export const Input = ({
  type,
  onChange,
  name,
  value,
  placeholder,
  onBlur,
  clasnames,
}: IProps) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      className={`${clasnames} text-text-light/90 bg-transparent border-text-light peer block w-full appearance-none border-0 border-b-2 px-0 py-2.5 text-sm focus:outline-none focus:ring-0`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
    />
  );
};
