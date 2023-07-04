import { useState } from "react";

type DropdownOption = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: DropdownOption[];
  onSelect: (selectedValue: string) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const onOptionSelect = (option: DropdownOption) => {
    setSelectedOption(option.value);
    onSelect(option.value);
  };

  return (
    <select
      value={selectedOption || ""}
      onChange={(e) => onOptionSelect(options[e.target.selectedIndex])}
    >
      <option value="" disabled>
        Select an option
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
