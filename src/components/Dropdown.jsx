function Dropdown({ options, onSelect }) {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="absolute top-full mt-1 border border-gray-300 bg-white"
    >
      <option value="">Select character</option>
      {options.map((o, idx) => (
        <option key={idx} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
