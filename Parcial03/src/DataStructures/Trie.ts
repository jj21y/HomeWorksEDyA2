import { TrieNode } from "./TrieNode";
import { Song } from "../Types/Song.Types";

export class Trie {
    root: TrieNode
    constructor (){
        this.root = new TrieNode();
    }
}