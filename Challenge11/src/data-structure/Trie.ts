import { TrieNode } from "./TrieNode";
import type { Product } from "../types/product.types";

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(product: Product) {
    let current = this.root;
    const word = product.name.toLowerCase();

    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }

      current = current.children.get(char)!;
      current.products.push(product);
    }

    current.isEndOfWord = true;
  }

  searchByPrefix(prefix: string): Product[] {
    let current = this.root;
    const normalized = prefix.toLowerCase();

    for (const char of normalized) {
      if (!current.children.has(char)) return [];
      current = current.children.get(char)!;
    }

    return current.products;
  }
}