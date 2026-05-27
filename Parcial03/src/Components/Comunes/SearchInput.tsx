interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({value, onChange,}: Props) => {
  return (
    <input
      type="text"
      placeholder="Search songs..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};