import { useEffect, useState } from "react";
import { SearchEngine } from "../data-structure/SearchEngine";
import { mockProducts } from "../data/MockProducts";
import { SearchBar } from "../components/SearchBar";
import type { Product } from "../types/product.types";

export const SearchPage = () => {
  const [engine] = useState(() => new SearchEngine());
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    engine.load(mockProducts);
  }, [engine]);

  const handleSearch = (value: string) => {
    const res = engine.search(value, 5);
    setResults(res);
  };

  return <SearchBar onSearch={handleSearch} results={results} />;
};