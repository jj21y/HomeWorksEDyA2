import { useEffect, useState } from "react";
import type { Product } from "../types/product.types";

interface Props {
  onSearch: (value: string) => void;
  results: Product[];
}

export const SearchBar = ({ onSearch, results }: Props) => {
  const [input, setInput] = useState("");


  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(input);
    }, 300);

    return () => clearTimeout(timeout);
  }, [input, onSearch]);

  return (
    <div className="container">
      <h1 className="title">Search Engine</h1>

      <input
        className="search-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search products..."
      />

      <ul className="results">
        {results.length === 0 && input && (
          <li>No results found</li>
        )}

        {results.map((p) => (
          <li key={p.id} className="result-item">
            <span>{p.name}</span>
            <span>⭐ {p.popularity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};