export default function SearchBar({ query, onChange }) {
  return (
    <input className="search-bar"
      type="text" // text to enter in elemnt
      placeholder="Search by name..."
      value={query}
      onChange={e => onChange(e.target.value)}
    />
  );
}