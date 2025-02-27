import { ReactNode } from "react";

export const Error = ({ children }: { children: ReactNode }) => {
  return (
    <span className="text-error mt-1 block rounded py-1 text-sm">
      {children}
    </span>
  );
};
