interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchBox({ value, onChange }: SearchBoxProps) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    onChange("");
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by name..."
        value={value}
        onChange={handleInput}
      />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default SearchBox;
