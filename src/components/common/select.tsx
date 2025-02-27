interface SelectOptionType {
  label: string;
  value: string | number;
}

interface IProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: number | string;
  name: string;
  id?: string;
  placeholder?: string;
  renderList?: SelectOptionType[];
  classname?: string;
}

export const Select = ({
  onChange,
  name,
  value,
  id,
  renderList,
  classname,
  placeholder = "Choose a option..",
}: IProps) => {
  return (
    <select
      name={name}
      value={value}
      id={id}
      className={`text-text-light/90 bg-transparent border-text-light peer block w-full appearance-none border-0 border-b-2 px-0 py-2.5 text-sm focus:outline-none focus:ring-0 ${classname}`}
      onChange={onChange}
    >
      <option disabled>{placeholder}</option>
      {renderList?.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
