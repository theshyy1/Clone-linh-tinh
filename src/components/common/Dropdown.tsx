import { IProject } from "../../models/project-model";

interface IProps {
  label: string;
  fieldItems?: (string | number)[];
  field?: keyof IProject;
  filters?: (field: keyof IProject, value: string) => void;
  classnames?: string;
}

export const Dropdown = ({
  label,
  fieldItems,
  field,
  classnames,
  filters,
}: IProps) => {
  return (
    <select
      onChange={(e) =>
        filters && filters(field as keyof IProject, e.target.value)
      }
      className={`${classnames} flex items-center px-[14px] py-[9px] text-sm hover:opacity-60`}
    >
      <option value="" hidden>
        {label}
      </option>
      <option value="all">All</option>
      {fieldItems?.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
