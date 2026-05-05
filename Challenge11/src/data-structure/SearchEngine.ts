import { Trie } from "./Trie";
import { MaxHeap } from "./MaxHeap";
import type { Product } from "../types/product.types";

export class SearchEngine {
    private trie: Trie;

    constructor(){
        this.trie = new Trie();
    }
    load(products: Product[]) {
    products.forEach((p) => this.trie.insert(p));
  }

search(prefix: string, k: number): Product[] {
  if (!prefix.trim()) return [];

  const results = this.trie.searchByPrefix(prefix);

  // 🔥 orden explícito por popularidad (debug/claridad)
  console.log(
    "Resultados sin ordenar:",
    results.map(r => `${r.name} (${r.popularity})`)
  );

  const heap = new MaxHeap();

  results.forEach((p) => heap.push(p));

  const topK: Product[] = [];

  for (let i = 0; i < k; i++) {
    const item = heap.pop();
    if (!item) break;
    topK.push(item);
  }

  console.log(
    "Top K ordenado:",
    topK.map(r => `${r.name} (${r.popularity})`)
  );

  return topK;
}
};