import type {Product} from "../types/product.types";

export class TrieNode {
    children: Map<string, TrieNode>;
    products: Product[];
    isEndOfWord: boolean;

    constructor(){
        this.children = new Map();
        this.products = [];
        this.isEndOfWord = false;
    }
};